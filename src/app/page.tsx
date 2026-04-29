"use client";

import { useState, useMemo } from "react";
import { generatePalettes } from "@/lib/paletteEngine";
import { exportPNG } from "@/lib/exportPNG";
import { exportProcreate } from "@/lib/exportProcreate";
import Slider from "@/components/Slider";
import PaletteGrid from "@/components/PaletteGrid";
import styles from './page.module.css';

export default function Page() {
  const [primary, setPrimary] = useState("#e26969");
  const [shift, setShift] = useState(15);

  const palettes = useMemo(() => {
    return generatePalettes(primary, shift);
  }, [primary, shift]);

  return (
    <>
      <h1>Hue Shift Palette Generator</h1>
      <p>Generate hue-shifted colour palettes for pixel art.</p>
      <p>Adjust the shift to explore subtle shading or bold colour transitions across primary, complementary, and triadic palettes.</p>

      <Slider shift={shift} setShift={setShift} />
      <p className={styles.small}>Tip: Lower shift values create softer, more natural shading. Higher values produce more stylised colour shifts.</p>

      <div className={styles.paletteHeader}>
        <h2>Primary</h2>
        <button onClick={() => exportPNG(palettes.primary, "primary.png")}>
          PNG
        </button>
        <button onClick={() => exportProcreate(palettes.primary, "primary")}>
          Procreate
        </button>
      </div>
      <PaletteGrid
        colors={palettes.primary}
        editableIndex={3}
        onChange={setPrimary}
      />

      <div className={styles.paletteHeader}>
        <h2>Value Ramp</h2>
        <button onClick={() => exportPNG(palettes.valueRamp, "value-ramp.png")}>
          PNG
        </button>
        <button onClick={() => exportProcreate(palettes.valueRamp, "value-ramp")}>
          Procreate
        </button>
      </div>
      <PaletteGrid colors={palettes.valueRamp} />

      <div className={styles.faq}>
        <h2>What is hue shifting?</h2>
        <p>Hue shifting is a shading technique used in pixel art where colours change in hue as they get lighter or darker, instead of just becoming brighter or darker versions of the same colour.</p>
        <p>This usually means shifting towards warmer hues in the light and cooler hues in the shadows. The result is more vibrant, natural-looking shading compared to traditional methods, which can sometimes appear flat or muddy.</p>

        <h2>What is a value ramp?</h2>
        <p>The value ramp is a set of colours that move from light to dark using the same base hue. It’s designed to help you build consistent shading for pixel art, where structure matters more than colour variation.</p>

        <h2>Can I export these palettes?</h2>
        <p>You can download a PNG image of the palette to use as a visual reference while you work, or import it into your art software.</p>
        <p>If you're using Procreate, you can download a palette file and import it directly into the app. This lets you access your colours instantly without manually recreating them.</p>

        <h2>How can I support this tool?</h2>
        <p>If this tool made your life easier, you could always <a href="https://buymeacoffee.com/joannahosking">consider buying me a coffee</a>.</p>
        <p>I'd also love to see your projects! Email me at <a href="mailto:hello@joannahosking.com">hello@joannahosking.com</a>.</p>
      </div>
    </>
  );
}
