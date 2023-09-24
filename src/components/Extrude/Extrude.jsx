import { useState } from "react";
import styles from "./Extrude.module.scss";
import Search from "./internals/Search";
import Locate from "./internals/Locate";

export const Extrude = () => {
  const check = "Check My Postcode";
  const locate = "Locate Me";
  const [selectedOption, setSelectedOption] = useState(check);
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <aside className={styles.extrudeContainer}>
      <div className={styles.top}>
        <label className={styles.label}>
          <input
            value={check}
            type="radio"
            checked={selectedOption === check}
            className={
              selectedOption === check
                ? `${styles.radioInput} ${styles.radioInputAlt}`
                : `${styles.radioInput}`
            }
            onChange={handleChange}
          />
          <span
            className={
              selectedOption === check
                ? `${styles.radio} ${styles.radioAlt}`
                : `${styles.radio}`
            }
          >
            {check}
          </span>
        </label>
        <label className={styles.label}>
          <input
            value={locate}
            type="radio"
            checked={selectedOption === locate}
            className={
              selectedOption === locate
                ? `${styles.radioInput} ${styles.radioInputAlt}`
                : `${styles.radioInput}`
            }
            onChange={handleChange}
          />
          <span
            className={
              selectedOption === locate
                ? `${styles.radio} ${styles.radioAlt}`
                : `${styles.radio}`
            }
          >
            {locate}
          </span>
        </label>
      </div>
      <div className={styles.bottom}>
        {selectedOption === check ? <Search /> : <Locate />}
      </div>
    </aside>
  );
};
