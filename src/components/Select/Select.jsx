import PropTypes from "prop-types";
import styles from "./Select.module.scss";
import { useState } from "react";

export const Select = ({ options, placeholder }) => {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState(null)
  return (
    <div className={styles.select}>
      <input type="text" readOnly placeholder={placeholder} className={styles.input}/>
      <div>
       
      </div>
    </div>
  );
};

Select.propTypes = {
  options: PropTypes.array,
  placeholder: PropTypes.string,
};
