let c;
let ctx;

const lines = [];
let depth = 0;

const init = () => {
  c = document.getElementById("myCanvas");
  ctx = c.getContext("2d");

  base(300, 100, 100, 0)
}

const base = (l, x, y, deg) => {
  const l1 = {
    x: x,
    y: y,
    l: l,
    deg: deg
  }

  const l2 = {
    x: l1.x + l * Math.cos(rad(l1.deg)),
    y: l1.y + l * Math.sin(rad(l1.deg)),
    l: l,
    deg: l1.deg + 180 - 60
  }

  const l3 = {
    x: l2.x + l * Math.cos(rad(l2.deg)),
    y: l2.y + l * Math.sin(rad(l2.deg)),
    l: l,
    deg: l2.deg + 180 - 60
  }

  lines.push(l1, l2, l3);

  drawLine(l1);
  drawLine(l2);
  drawLine(l3);

  koch(lines, 1, true);
}

const koch = (lines, count, side) => {
  if (count >= 5)
    return;

  const newlines = [];
  lines.forEach(line => {
    const l = line.l / 3;
    const deg = line.deg;
    const baseX = line.x + l * Math.cos(rad(deg));
    const baseY = line.y + l * Math.sin(rad(deg));

    let l1;
    let l2;
    if (side) {
      l1 = {
        x: baseX + l * Math.cos(rad(deg - 60)),
        y: baseY + l * Math.sin(rad(deg - 60)),
        l: l,
        deg: deg + 180 - 60
      }

      l2 = {
        x: l1.x + l * Math.cos(rad(deg + 60)),
        y: l1.y + l * Math.sin(rad(deg + 60)),
        l: l,
        deg: deg + 180 + 60
      }
    }
    else {
      l1 = {
        x: baseX + l * Math.cos(rad(deg + 60)),
        y: baseY + l * Math.sin(rad(deg + 60)),
        l: l,
        deg: deg + 180 + 60
      }

      l2 = {
        x: l1.x + l * Math.cos(rad(deg - 60)),
        y: l1.y + l * Math.sin(rad(deg - 60)),
        l: l,
        deg: deg + 180 - 60
      }
    }

    drawLine(l1);
    drawLine(l2);
    newlines.push(l1, l2);
  });
  koch(newlines, ++count, !side)
}

const rad = (deg) => {
  return deg * (Math.PI / 180);
}

const drawLine = (line) => {
  x1 = line.x
  y1 = line.y
  x2 = x1 + line.l * Math.cos(rad(line.deg))
  y2 = y1 + line.l * Math.sin(rad(line.deg))

  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}