function draw(arr){
alert(arr)
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var topology = arr;

ctx.clearRect(0,0,500,500);

topology.forEach(([number, x, y, color]) => { // перебираем элементы массива
    ctx.beginPath(); // начинаем новый путь

    ctx.fillStyle = color; // устанавливаем цвет заливки
    ctx.arc(x, y, 5, 0, Math.PI * 2); // рисуем круг радиусом 5px
    ctx.fill(); // заполняем круг цветом

    ctx.font = "bold 12px Arial"; // устанавливаем шрифт и размер
    ctx.fillStyle = "black"; // устанавливаем цвет текста
    ctx.fillText(number, x - 5, y + 15); // выводим номер точки рядом с ней
  });
}