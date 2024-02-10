import { useState, useEffect } from "react";
import Swatch from "../components/Swatch";
import { createPalette, getTriadic } from "../helpers/generate";

const Triadic = (props) => {
  const { primary, shift } = { ...props };
  const [triadicPalette, setTriadicPalette] = useState([
    createPalette(getTriadic(primary)[0], shift),
    createPalette(getTriadic(primary)[1], shift),
  ]);

  useEffect(() => {
    setTriadicPalette([
      createPalette(getTriadic(primary)[0], shift),
      createPalette(getTriadic(primary)[1], shift),
    ]);
  }, [primary, shift]);

  return (
    <>
      <div className="palette">
        <Swatch color={triadicPalette[0][0]} />
        <Swatch color={triadicPalette[0][1]} />
        <Swatch color={triadicPalette[0][2]} />
        <Swatch color={triadicPalette[0][3]} />
        <Swatch color={triadicPalette[0][4]} />
        <Swatch color={triadicPalette[0][5]} />
        <Swatch color={triadicPalette[0][6]} />
      </div>

      <div className="palette">
        <Swatch color={triadicPalette[1][0]} />
        <Swatch color={triadicPalette[1][1]} />
        <Swatch color={triadicPalette[1][2]} />
        <Swatch color={triadicPalette[1][3]} />
        <Swatch color={triadicPalette[1][4]} />
        <Swatch color={triadicPalette[1][5]} />
        <Swatch color={triadicPalette[1][6]} />
      </div>
    </>
  );
};

export default Triadic;
