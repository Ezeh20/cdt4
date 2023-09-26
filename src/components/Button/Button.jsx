import PropTypes from "prop-types";
import styles from "./Button.module.scss";

export const Button = ({ label, className, dataTest, ...props }) => {
  return (
    <button
      data-testid={dataTest}
      className={`${styles.button} ${className}`}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  dataTest: PropTypes.string,
};

Button.defaultProps = {
  label: "Some label",
  className: "",
  dataTest: "",
};
