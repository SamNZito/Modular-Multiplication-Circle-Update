Math.PI

var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

console.log(canvas.width);
console.log(canvas.height);


/*c is context*/
var c = canvas.getContext('2d'); //2d space elements

var lineInput;
var multiInput;
var r = 350.0;
c.strokeStyle = 'white';

window.addEventListener('input', function(){
  lineInput = document.getElementById("bean").value;
  multiInput = document.getElementById("bean2").value;
  reDraw();
});

window.addEventListener('resize', function()
{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    c.strokeStyle = 'white';
    reDraw();
});

function reDraw(){
  arrX = [];
  arrY = [];
  Calc();
  drawIt();
}

function Calc(){

  const theta = (Math.PI*2)/lineInput;
  const centerX = window.innerWidth/2;
  const centerY = window.innerHeight/2;
  arrX = [];
  arrY = [];
  var pointX;
  var pointY;

  // calculated the points around the circle
  for(let i = 0; i < lineInput;i++)
  {
    pointX = r * Math.cos(theta*i) + centerX;
    pointY = r * Math.sin(theta*i) + centerY;
    
    arrX.push(pointX);
    arrY.push(pointY); 
  }
  c.lineWidth = .009;
}

// allows the color button to change the color of the circle
function colorChange(){
  c.strokeStyle = colorPicker();
  //c.lineWidth = .009;
  //clear();
  Calc();
  drawIt();
}

// clears screen
function clear(){
  c.clearRect(0,0, canvas.width, canvas.height)
}

// picks a random color
function colorPicker(){
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
}

// draws the actual lines that makes up the circle
function drawIt(){
  clear();
  c.beginPath();

  for(let i = 0; i < lineInput;i++)
  {
    x = multiInput*i;
    l = x%lineInput;

    c.moveTo(arrX[i],arrY[i]);
    c.lineTo(arrX[l],arrY[l]); 
    c.stroke();
    
  }
}

// the drop down menu
function toggleNav(){
  document.body.classList.toggle("nav-open");
}

// allows to rotate the circle
function rotated(){

  canvas.classList.toggle("rotated0");
}

        