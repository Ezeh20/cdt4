//import PropTypes from "prop-types";
import styles from "./Locate.module.scss";
import Button from "../../../Button";

export const Locate = () => {
  return (
    <div className={styles.locate}>
      <Button label="Locate Me" className={styles.btn} />
    </div>
  );
};

Locate.propTypes = {};
