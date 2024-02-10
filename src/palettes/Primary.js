import { useState, useEffect } from "react";
import chroma from "chroma-js";
import { createPalette } from "../helpers/generate";

const Primary = (props) => {
  const { primary, setPrimary } = { ...props };
  const [primaryPalette, setPrimaryPalette] = useState(createPalette(primary));

  useEffect(() => {
    setPrimaryPalette(createPalette(primary));
  }, [primary]);

  return (
    <div className="palette">
      <div className="swatch">
        <div style={{ backgroundColor: primaryPalette[0] }} />
        <label>{chroma(primaryPalette[0]).hex()}</label>
      </div>
      <div className="swatch">
        <div style={{ backgroundColor: primaryPalette[1] }} />
        <label>{chroma(primaryPalette[1]).hex()}</label>
      </div>

      <div className="swatch">
        <div style={{ backgroundColor: primaryPalette[2] }} />
        <label>{chroma(primaryPalette[2]).hex()}</label>
      </div>
      <div className="swatch primary">
        <div style={{ backgroundColor: primary }}>
          <input
            type="color"
            name="primary"
            value={primary}
            onChange={(e) => setPrimary(e.target.value)}
          />
        </div>
        <label>{chroma(primary).hex()}</label>
      </div>

      <div className="swatch">
        <div style={{ backgroundColor: primaryPalette[4] }} />
        <label>{chroma(primaryPalette[4]).hex()}</label>
      </div>

      <div className="swatch">
        <div style={{ backgroundColor: primaryPalette[5] }} />
        <label>{chroma(primaryPalette[5]).hex()}</label>
      </div>

      <div className="swatch">
        <div style={{ backgroundColor: primaryPalette[6] }} />
        <label>{chroma(primaryPalette[6]).hex()}</label>
      </div>
    </div>
  );
};

export default Primary;
