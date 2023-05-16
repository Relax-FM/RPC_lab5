 <script type="application/javascript" src="{{ url_for('static',filename='script/v1.js') }}"></script>
<button onclick="draw({{data}})">Tab to print</button>

function draw(){
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.clearRect(0,0,500,500);

// Рисуем первую точку
ctx.beginPath();
ctx.arc(50, 50, 10, 0, 2 * Math.PI);
ctx.fillStyle = "red";
ctx.fill();

// Рисуем вторую точку
ctx.beginPath();
ctx.arc(200, 100, 10, 0, 2 * Math.PI);
ctx.fillStyle = "green";
ctx.fill();

// Рисуем третью точку
ctx.beginPath();
ctx.arc(350, 200, 10, 0, 2 * Math.PI);
ctx.fillStyle = "blue";
ctx.fill();

// Соединяем точки линиями
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(200, 100);
ctx.lineTo(350, 200);
ctx.stroke();
}