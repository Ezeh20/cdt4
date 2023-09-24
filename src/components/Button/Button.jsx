import PropTypes from "prop-types";
import styles from "./Button.module.scss";

export const Button = ({ label, className, ...props }) => {
  return (
    <button className={`${styles.button} ${className}`} {...props}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  label: "Some label",
  className: "",
};
