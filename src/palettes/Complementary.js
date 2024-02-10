import { useState, useEffect } from "react";
import chroma from "chroma-js";
import { createPalette, getComplementary } from "../helpers/generate";

const Complementary = (props) => {
  const { primary } = { ...props };
  const [complementaryPalette, setComplementaryPalette] = useState(createPalette(getComplementary(primary)));

  useEffect(() => {
    setComplementaryPalette(createPalette(getComplementary(primary)));
  }, [primary]);

  return (
    <div className="palette">
      <div className="swatch">
        <div style={{ backgroundColor: complementaryPalette[0] }} />
        <label>{chroma(complementaryPalette[0]).hex()}</label>
      </div>
      <div className="swatch">
        <div style={{ backgroundColor: complementaryPalette[1] }} />
        <label>{chroma(complementaryPalette[1]).hex()}</label>
      </div>

      <div className="swatch">
        <div style={{ backgroundColor: complementaryPalette[2] }} />
        <label>{chroma(complementaryPalette[2]).hex()}</label>
      </div>

      <div className="swatch">
        <div style={{ backgroundColor: complementaryPalette[3] }} />
        <label>{chroma(complementaryPalette[3]).hex()}</label>
      </div>

      <div className="swatch">
        <div style={{ backgroundColor: complementaryPalette[4] }} />
        <label>{chroma(complementaryPalette[4]).hex()}</label>
      </div>

      <div className="swatch">
        <div style={{ backgroundColor: complementaryPalette[5] }} />
        <label>{chroma(complementaryPalette[5]).hex()}</label>
      </div>

      <div className="swatch">
        <div style={{ backgroundColor: complementaryPalette[6] }} />
        <label>{chroma(complementaryPalette[6]).hex()}</label>
      </div>
    </div>
  );
};

export default Complementary;
