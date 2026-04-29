export function exportPNG(colors: string[], filename = "palette.png") {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) return;

  const swatchWidth = 80;
  const height = 80;

  canvas.width = colors.length * swatchWidth;
  canvas.height = height;

  colors.forEach((color, i) => {
    ctx.fillStyle = color;
    ctx.fillRect(i * swatchWidth, 0, swatchWidth, height);
  });

  const link = document.createElement("a");
  link.download = filename;
  link.href = canvas.toDataURL("image/png");
  link.click();
}