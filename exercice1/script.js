
  var canvas = document.getElementById('myCanvas');
  var ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.fillStyle = '#add8e6';
  ctx.fillRect(100, 150, 200, 200);

  ctx.beginPath();
  ctx.fillStyle = '#cacaca';
  ctx.fillRect(120, 170, 30, 30);

  ctx.beginPath();
  ctx.fillStyle = '#cacaca';
  ctx.fillRect(250, 170, 30, 30);

  ctx.beginPath(); //porte
  ctx.fillStyle = '#cacaca';
  ctx.fillRect(178, 270, 50, 80);


ctx.beginPath();
ctx.moveTo(200,30);
ctx.lineTo(100,150);
ctx.lineTo(300,150);
ctx.fillStyle = "#cd853f";
ctx.fill();
