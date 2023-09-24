// import PropTypes from "prop-types";
import styles from "./Search.module.scss";
import { search } from "../../../../../public/assets";
import Select from "../../../Select";
import { states } from "./constants";
import Button from "../../../Button";

export const Search = () => {
  return (
    <div className={styles.section}>
      <div className={styles.inputContainer}>
        <div className={styles.top}>
          <img src={search} alt="icon" />
          <input
            type="text"
            placeholder="State/Province"
            className={styles.input}
          />
        </div>
        <Button label="Search" className={styles.btn} />
      </div>
      <Select placeholder="State/Province" options={states} />
    </div>
  );
};

// Search.propTypes = {};
