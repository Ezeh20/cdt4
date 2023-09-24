import PropTypes from "prop-types";
import styles from "./Select.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

export const Select = ({ options, placeholder }) => {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div className={styles.select}>
      <div
        className={styles.inputContainer}
        onClick={() => setActive((pre) => !pre)}
      >
        <input
          value={value}
          type="text"
          readOnly
          placeholder={placeholder}
          className={styles.input}
        />
        <IoIosArrowDown
          className={
            active ? `${styles.icon} ${styles.iconAlt}` : `${styles.icon}`
          }
        />
      </div>
      {active ? (
        <div className={styles.options}>
          {options.map((itm) => {
            return (
              <p
                key={itm}
                onClick={() => {
                  setValue(itm);
                  setActive((pre) => !pre);
                }}
                className={styles.state}
              >
                {itm}
              </p>
            );
          })}
        </div>
      ) : undefined}
    </div>
  );
};

Select.propTypes = {
  options: PropTypes.array,
  placeholder: PropTypes.string,
};
