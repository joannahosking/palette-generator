import chroma from "chroma-js";
import styles from "./Swatch.module.css";

type Props = {
  color: string;
  onChange: (value: string) => void;
};

const getTextColor = (color: string) => {
  const [l] = chroma(color).lch();
  return l < 65 ? "white" : "inherit";
};

export default function Picker({ color, onChange }: Props) {
  const textColor = getTextColor(color);

  return (
    <div className={styles.swatch} data-editable="true">
      <div style={{ backgroundColor: color, color: textColor }}>
        <input
          type="color"
          value={color}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>

      <label>{color}</label>
    </div>
  );
}