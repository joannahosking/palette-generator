import chroma from "chroma-js";

export const adjustHue = (val) => {
  if (val < 0) val += Math.ceil(-val / 360) * 360;
  return val % 360;
};

export const map = (n, start1, end1, start2, end2) => {
  return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
};

export const createPalette = (primary) => {
  const primaryLch = chroma(primary).lch();
  const base = {
    l: primaryLch[0],
    c: primaryLch[1],
    h: primaryLch[2],
  };
  const minLightness = 1;
  const maxLightness = 99;
  const hueStep = 15;
  const newPalette = [base];

  for (let i = 1; i < 4; i++) {
    const hueDark = adjustHue(base.h - hueStep * i);
    const hueLight = adjustHue(base.h + hueStep * i);
    const lightnessDark = map(i, 0, 3, base.l, minLightness);
    const lightnessLight = map(i, 0, 3, base.l, maxLightness);
    const chromaAll = base.c;

    newPalette.push({
      l: lightnessDark,
      c: chromaAll,
      h: hueDark,
      mode: "lch",
    });
    newPalette.unshift({
      l: lightnessLight,
      c: chromaAll,
      h: hueLight,
      mode: "lch",
    });
  }

  return newPalette.map((color) => chroma.lch(color.l, color.c, color.h).hex());
};

export const getComplementary = (primary) => {
    const primaryRgb = chroma(primary).rgb();
    return chroma(255 - primaryRgb[0], 255 - primaryRgb[1], 255 - primaryRgb[2], 'rgb').hex();
}

export const getTriadic = (primary) => {
    const primaryLch = chroma(primary).lch();
    let firstHue = primaryLch[2] + 120 > 360 ? 360 % (primaryLch[2] + 120) : primaryLch[2] + 120;
    let secondHue = firstHue + 120 > 360 ? 360 % (firstHue + 120) : firstHue + 120;
    return [chroma(primaryLch[0], primaryLch[1], firstHue, 'lch').hex(), chroma(primaryLch[0], primaryLch[1], secondHue, 'lch').hex()];
}