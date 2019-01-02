let c;
let ctx;

const init = () => {
  c = document.getElementById("myCanvas");
  ctx = c.getContext("2d");

  koch(30, 0, 40, 0, -60)
  koch(30, 100, 50, 0, -7)
  koch(30, 200, 50, 0, -45)
  koch(30, 300, 75, 0, 45)
  koch(30, 400, 100, 0, 90)
}

const koch = (l, x, y, deg, offset = 0) => {
  const l1 = {
    x1: x,
    y1: y,
    x2: x + l * Math.cos(rad(deg)),
    y2: y + l * Math.sin(rad(deg))
  }

  const l2 = {
    x1: l1.x2,
    y1: l1.y2,
    x2: l1.x2 + l * Math.cos(rad(deg - 60)),
    y2: l1.y2 + l * Math.sin(rad(deg - 60))
  }

  const l3 = {
    x1: l2.x2,
    y1: l2.y2,
    x2: l2.x2 + l * Math.cos(rad(deg + 60)),
    y2: l2.y2 + l * Math.sin(rad(deg + 60))
  }

  const l4 = {
    x1: l3.x2,
    y1: l3.y2,
    x2: l3.x2 + l * Math.cos(rad(deg)),
    y2: l3.y2 + l * Math.sin(rad(deg))
  }

  drawLine(l1);
  drawLine(l2);
  drawLine(l3);
  drawLine(l4);

  setTimeout(() => {
    koch(l, l4.x2, l4.y2, deg + 180 + offset, offset)
  }, 10);

}

const rad = (deg) => {
  return deg * (Math.PI / 180);
}

const drawLine = (line) => {
  x1 = line.x1
  y1 = line.y1
  x2 = line.x2
  y2 = line.y2

  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}