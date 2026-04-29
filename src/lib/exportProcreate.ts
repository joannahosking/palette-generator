export function exportProcreate(colors: string[], name = "palette") {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN"
"http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>SwatchName</key>
  <string>${name}</string>
  <key>Swatches</key>
  <array>
    ${colors
      .map(
        (hex) => `
    <dict>
      <key>R</key><real>${parseInt(hex.slice(1, 3), 16) / 255}</real>
      <key>G</key><real>${parseInt(hex.slice(3, 5), 16) / 255}</real>
      <key>B</key><real>${parseInt(hex.slice(5, 7), 16) / 255}</real>
      <key>A</key><real>1</real>
    </dict>`
      )
      .join("")}
  </array>
</dict>
</plist>`;

  const blob = new Blob([xml], { type: "application/octet-stream" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `${name}.swatches`;
  link.click();

  URL.revokeObjectURL(url);
}