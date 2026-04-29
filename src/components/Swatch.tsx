import chroma from "chroma-js";
import { useState, useEffect } from "react";
import styles from "./Swatch.module.css";

type SwatchProps = {
  color: string;
};

export default function Swatch({ color }: SwatchProps) {
  const [copied, setCopied] = useState(false);

  const [l] = chroma(color).lch();
  const textColor = l < 65 ? "white" : "inherit";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(color);
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy color:", err);
    }
  };

  useEffect(() => {
    if (!copied) return;

    const timeout = setTimeout(() => setCopied(false), 1000);
    return () => clearTimeout(timeout);
  }, [copied]);

  return (
    <div
      className={styles.swatch}
      data-copied={copied}
      onClick={handleCopy}
    >
      <div style={{ backgroundColor: color, color: textColor }}>
        <span className={styles.copied}>Copied!</span>
      </div>

      <label>{color}</label>
    </div>
  );
}