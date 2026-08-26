export function exportPNG(
  colors: string[] | string[][],
  filename = "palette.png",
) {
  const rows: string[][] = Array.isArray(colors[0])
    ? (colors as string[][])
    : [colors as string[]];

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) return;

  const swatchWidth = 80;
  const swatchHeight = 80;

  const cols = Math.max(...rows.map((row) => row.length));

  canvas.width = cols * swatchWidth;
  canvas.height = rows.length * swatchHeight;

  rows.forEach((row, rowIndex) => {
    row.forEach((color, i) => {
      ctx.fillStyle = color;
      ctx.fillRect(
        i * swatchWidth,
        rowIndex * swatchHeight,
        swatchWidth,
        swatchHeight,
      );
    });
  });

  const link = document.createElement("a");
  link.download = filename;
  link.href = canvas.toDataURL("image/png");
  link.click();
}
