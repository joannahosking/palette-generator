type SliderProps = {
  shift: number;
  setShift: (value: number) => void;
  max?: number;
};

import styles from "./Slider.module.css";

export default function Slider({ shift, setShift, max = 30 }: SliderProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShift(Number(e.target.value));
  };

  const progress = shift / max;

  return (
    <div className={styles.slider}>
      <label htmlFor="shift">Shift:</label>

      <div className={styles.wrapper}>
        <input
          name="shift"
          id="shift"
          type="range"
          min={0}
          max={max}
          value={shift}
          onChange={handleChange}
        />

        <span
          className={styles.slide}
          style={{ transform: `scaleX(${progress})` }}
        />

        <span className={styles.background} />

        <span className={styles.handle} style={{ left: `${progress * 100}%` }}>
          {shift}
        </span>
      </div>
    </div>
  );
}
