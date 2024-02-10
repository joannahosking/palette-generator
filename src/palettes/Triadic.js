import { useState, useEffect } from "react";
import chroma from "chroma-js";
import { createPalette, getTriadic } from "../helpers/generate";

const Triadic = (props) => {
  const { primary } = { ...props };
  const [triadicPalette, setTriadicPalette] = useState([
    createPalette(getTriadic(primary)[0]),
    createPalette(getTriadic(primary)[1]),
  ]);

  useEffect(() => {
    setTriadicPalette([
      createPalette(getTriadic(primary)[0]),
      createPalette(getTriadic(primary)[1]),
    ]);
  }, [primary]);

  return (
    <>
      <div className="palette">
        <div className="swatch">
          <div style={{ backgroundColor: triadicPalette[0][0] }} />
          <label>{chroma(triadicPalette[0][0]).hex()}</label>
        </div>

        <div className="swatch">
          <div style={{ backgroundColor: triadicPalette[0][1] }} />
          <label>{chroma(triadicPalette[0][1]).hex()}</label>
        </div>

        <div className="swatch">
          <div style={{ backgroundColor: triadicPalette[0][2] }} />
          <label>{chroma(triadicPalette[0][2]).hex()}</label>
        </div>

        <div className="swatch">
          <div style={{ backgroundColor: triadicPalette[0][3] }} />
          <label>{chroma(triadicPalette[0][3]).hex()}</label>
        </div>

        <div className="swatch">
          <div style={{ backgroundColor: triadicPalette[0][4] }} />
          <label>{chroma(triadicPalette[0][4]).hex()}</label>
        </div>

        <div className="swatch">
          <div style={{ backgroundColor: triadicPalette[0][5] }} />
          <label>{chroma(triadicPalette[0][5]).hex()}</label>
        </div>

        <div className="swatch">
          <div style={{ backgroundColor: triadicPalette[0][6] }} />
          <label>{chroma(triadicPalette[0][6]).hex()}</label>
        </div>
      </div>

      <div className="palette">
        <div className="swatch">
          <div style={{ backgroundColor: triadicPalette[1][0] }} />
          <label>{chroma(triadicPalette[1][0]).hex()}</label>
        </div>
        <div className="swatch">
          <div style={{ backgroundColor: triadicPalette[1][1] }} />
          <label>{chroma(triadicPalette[1][1]).hex()}</label>
        </div>

        <div className="swatch">
          <div style={{ backgroundColor: triadicPalette[1][2] }} />
          <label>{chroma(triadicPalette[1][2]).hex()}</label>
        </div>

        <div className="swatch">
          <div style={{ backgroundColor: triadicPalette[1][3] }} />
          <label>{chroma(triadicPalette[1][3]).hex()}</label>
        </div>

        <div className="swatch">
          <div style={{ backgroundColor: triadicPalette[1][4] }} />
          <label>{chroma(triadicPalette[1][4]).hex()}</label>
        </div>

        <div className="swatch">
          <div style={{ backgroundColor: triadicPalette[1][5] }} />
          <label>{chroma(triadicPalette[1][5]).hex()}</label>
        </div>

        <div className="swatch">
          <div style={{ backgroundColor: triadicPalette[1][6] }} />
          <label>{chroma(triadicPalette[1][6]).hex()}</label>
        </div>
      </div>
    </>
  );
};

export default Triadic;
