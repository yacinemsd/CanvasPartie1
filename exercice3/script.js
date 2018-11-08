var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.fillStyle = 'green';
ctx.fillRect(100, 200, 200, 60)


ctx.beginPath();
ctx.fillStyle = 'green';
ctx.fillRect(50, 260, 300, 60)

ctx.beginPath();
  ctx.lineWidth = '1'
  ctx.strokeStyle = 'black';
  ctx.fillStyle = '#cdcdcd';
  ctx.arc(74, 355, 35, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
    ctx.lineWidth = '1';
    ctx.strokeStyle = 'black';
    ctx.fillStyle = '#cdcdcd';
    ctx.arc(327, 355, 35, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
