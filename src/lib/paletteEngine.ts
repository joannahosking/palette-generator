import chroma from "chroma-js";

const adjustHue = (h: number) => ((h % 360) + 360) % 360;

const map = (
  n: number,
  a: number,
  b: number,
  c: number,
  d: number
) => ((n - a) / (b - a)) * (d - c) + c;

const createHueRamp = (base: chroma.Color, shift: number) => {
  const [l, c, h] = base.lch();

  const steps = 3;
  const minL = 1;
  const maxL = 99;

  const colors: string[] = [];

  for (let i = steps; i > 0; i--) {
    const hue = adjustHue(h - shift * i);
    const light = map(i, 0, steps, l, minL);
    colors.push(chroma.lch(light, c, hue).hex());
  }

  colors.push(chroma.lch(l, c, h).hex());

  for (let i = 1; i <= steps; i++) {
    const hue = adjustHue(h + shift * i);
    const light = map(i, 0, steps, l, maxL);
    colors.push(chroma.lch(light, c, hue).hex());
  }

  return colors;
};

const createValueRamp = (base: chroma.Color) => {
  const [l, c, h] = base.lch();

  const steps = 7;

  return Array.from({ length: steps }, (_, i) => {
    const t = i / (steps - 1);

    const lightness = 10 + t * 80;
    const chromaAdjusted = c * 0.12;
    const saturation = 0;

    return chroma
      .lch(
        Math.max(0, Math.min(100, lightness)),
        chromaAdjusted,
        h
      )
      .hex();
  });
};

export const generatePalettes = (
  primary: string,
  shift: number
) => {
  const base = chroma(primary);

  return {
    primary: createHueRamp(base, shift),
    valueRamp: createValueRamp(base),
  };
};