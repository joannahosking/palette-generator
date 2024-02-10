import { useState, useEffect } from "react";
import Swatch from '../components/Swatch';
import { createPalette, getComplementary } from "../helpers/generate";

const Complementary = (props) => {
  const { primary,shift } = { ...props };
  const [complementaryPalette, setComplementaryPalette] = useState(createPalette(getComplementary(primary), shift));

  useEffect(() => {
    setComplementaryPalette(createPalette(getComplementary(primary), shift));
  }, [primary, shift]);

  return (
    <div className="palette">
      <Swatch color={complementaryPalette[0]} />
      <Swatch color={complementaryPalette[1]} />
      <Swatch color={complementaryPalette[2]} />
      <Swatch color={complementaryPalette[3]} />
      <Swatch color={complementaryPalette[4]} />
      <Swatch color={complementaryPalette[5]} />
      <Swatch color={complementaryPalette[6]} />
    </div>
  );
};

export default Complementary;
