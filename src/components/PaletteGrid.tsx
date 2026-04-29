import Swatch from "@/components/Swatch";
import Picker from "@/components/Picker";
import styles from "./PaletteGrid.module.css";

type Props = {
  colors: string[];
  editableIndex?: number;
  onChange?: (value: string) => void;
};

export default function PaletteGrid({
  colors,
  editableIndex,
  onChange,
}: Props) {
  return (
    <div className={styles.grid}>
      {colors.map((color, i) =>
        i === editableIndex ? (
          <Picker key="picker" color={color} onChange={onChange!} />
        ) : (
          <Swatch key={i} color={color} />
        ),
      )}
    </div>
  );
}
