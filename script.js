let c;
let ctx;

const init = () => {
  c = document.getElementById("myCanvas");
  ctx = c.getContext("2d");

  koch(30, 0, 100, 90)
}

const koch = (l, x, y, dir) => {
  const rad = dir * (Math.PI / 180);
  const sin = Math.sin(rad);
  const cos = Math.cos(rad);

  const opposite = (sin * l); 
  const rechteZijde = (cos * l);
  drawLine(x, y, opposite, (rechteZijde));


  // mijnLijn.X2 = 150 + opposite;
  // mijnLijn.Y2 = 300 - (rechteZijde + 150);


  // const x1 = x;
  // const y1 = y;
  // const x2 =
  //   drawLine(x, y, x + l, y);

  // drawLine(x + l, y, x + (l) + l * 0.5, y - l);
  // drawLine(x + l, y, x + (l) + l * 0.5, y - l);

  // drawLine(x + (2 * l), y, x + (3 * l), y);

}

const drawLine = (x1, y1, x2, y2) => {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}