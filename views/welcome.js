
var colors = ["#32cd32", "#000", "#32cd32", "#000",
             "#32cd32", "#000", "#32cd32", "#000",
             "#32cd32", "#000", "#32cd32", "#000"];
/*
var numEntries = ["1", "7", "2", "1",
                   "1", "5", "3", "1",
                   "1", "2", "3", "4"];
*/
var numEntries = [1, 2, 3, 4, 5, 1, 2, 3, 4, 1, 2, 3]
    
var startAngle = 0;
var arc = Math.PI / 6;
var spinTimeout = null;

var spinArcStart = 10;
var spinTime = 0;
var spinTimeTotal = 0;

var ctx;

function drawRouletteWheel() {
  document.getElementById("spin").hidden = false;
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var outsideRadius = 200;
    var textRadius = 150;
    var insideRadius = 50;

    ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,500,500);


    ctx.strokeStyle = "black";
    ctx.lineWidth = 20;

    ctx.font = 'bold 36px sans-serif';

    for(var i = 0; i < 12; i++) {
      var angle = startAngle + i * arc;
      ctx.fillStyle = colors[i];

      ctx.beginPath();
      ctx.arc(250, 250, outsideRadius, angle, angle + arc, false);
      ctx.arc(250, 250, insideRadius, angle + arc, angle, true);
      ctx.stroke();
      ctx.fill();

      ctx.save();
      ctx.shadowOffsetX = -1;
      ctx.shadowOffsetY = -1;
      ctx.shadowBlur    = 0;
      ctx.shadowColor   = "rgb(220,220,220)";
      ctx.fillStyle = "white";
      ctx.translate(250 + Math.cos(angle + arc / 2) * textRadius, 
                    250 + Math.sin(angle + arc / 2) * textRadius);
      ctx.rotate(angle + arc / 2 + Math.PI / 2);
      var text = numEntries[i];
      ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
      ctx.restore();
    } 

    //Arrow
    ctx.fillStyle = "#99377f";
    ctx.beginPath();
    ctx.moveTo(200 + 50, 200 - (outsideRadius + 50 ));
    ctx.lineTo(250 + 8, 250 - (outsideRadius + 10));
    ctx.lineTo(250 + 8, 250 - (outsideRadius - 10));
    ctx.lineTo(250 + 8, 250 - (outsideRadius - 10));
    ctx.lineTo(250 + 0, 250 - (outsideRadius - 26));
    ctx.lineTo(250 - 8, 250 - (outsideRadius - 10));
    ctx.lineTo(250 - 8, 250 - (outsideRadius - 10));
    ctx.lineTo(250 - 8, 250 - (outsideRadius + 10));
    ctx.fill();
  }
}

function spin() {
  spinAngleStart = Math.random() * 10 + 10;
  spinTime = 0;
  spinTimeTotal = Math.random() * 3 + 4 * 1000;
  rotateWheel();
}

function rotateWheel() {
  spinTime += 30;
  if(spinTime >= spinTimeTotal) {
    stopRotateWheel();
    return;
  }
  var spinAngle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
  startAngle += (spinAngle * Math.PI / 180);
  drawRouletteWheel();
  spinTimeout = setTimeout('rotateWheel()', 30);
}

function stopRotateWheel() {
  clearTimeout(spinTimeout);
  var degrees = startAngle * 180 / Math.PI + 90;
  var arcd = arc * 180 / Math.PI;
  var index = Math.floor((360 - degrees % 360) / arcd);
  ctx.save();
  ctx.font = 'bold 35px Helvetica, Arial';
  var text = numEntries[index]
  ctx.fillText(text, 250 - ctx.measureText(text).width / 2, 250 + 10);
  ctx.restore();
}

function easeOut(t, b, c, d) {
  var ts = (t/=d)*t;
  var tc = ts*t;
  return b+c*(tc + -3*ts + 3*t);
}

drawRouletteWheel();
