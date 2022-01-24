var canvas=document.getElementById("myCanvas");
var ctx= canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle= "grey";
ctx.lineWidth= 1;
ctx.rect(200, 170, 500, 250);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "red";
ctx.lineWidth= 4;
ctx.arc(250, 200, 30, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "black";
ctx.lineWidth= 4;
ctx.arc(250, 230, 30, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "blue";
ctx.lineWidth= 4;
ctx.arc(250, 260, 30, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "yellow";
ctx.lineWidth= 4;
ctx.arc(300, 210, 30, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "red";
ctx.lineWidth= 4;
ctx.arc(250, 240, 30, 0, 2*Math.PI);
ctx.stroke();