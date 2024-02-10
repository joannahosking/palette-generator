import chroma from "chroma-js";

const Swatch = (props) => {
  const { color } = { ...props };
  let textColor = chroma(color).lch()[0] < 65 ? 'white' : '';

  return (
    <div className="swatch">
      <div
        style={{ backgroundColor: color, color: textColor }}
        onClick={() => {navigator.clipboard.writeText(color)}}
      />
      <label>{color}</label>
    </div>
  );
};

export default Swatch;
