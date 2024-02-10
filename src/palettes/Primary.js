import { useState, useEffect } from "react";
import chroma from "chroma-js";
import Swatch from '../components/Swatch';
import { createPalette } from "../helpers/generate";

const Primary = (props) => {
  const { primary, setPrimary, shift } = { ...props };
  const [primaryPalette, setPrimaryPalette] = useState(createPalette(primary, shift));

  useEffect(() => {
    setPrimaryPalette(createPalette(primary, shift));
  }, [primary, shift]);

  let textColor = chroma(primary).lch()[0] < 65 ? 'white' : '';

  return (
    <div className="palette">
      <Swatch color={primaryPalette[0]} />
      <Swatch color={primaryPalette[1]} />
      <Swatch color={primaryPalette[2]} />
      <div className="swatch primary">
        <div style={{ backgroundColor: primary, color: textColor }}>
          <input
            type="color"
            name="primary"
            value={primary}
            onChange={(e) => setPrimary(e.target.value)}
          />
        </div>
        <label>{chroma(primary).hex()}</label>
      </div>
      <Swatch color={primaryPalette[4]} />
      <Swatch color={primaryPalette[5]} />
      <Swatch color={primaryPalette[6]} />
    </div>
  );
};

export default Primary;
