import { useContext } from "react";
import PropTypes from "prop-types";
import { ModalContext } from "../../context/ModalContext";

export const Modal = ({ children, className }) => {
  const { isActive } = useContext(ModalContext);

  return (
    <div
      className={
        isActive
          ? `modal_modal modal_content ${className}`
          : "hideModal_hideModal"
      }
    >
      <div className="animate_modal_modal">{children}</div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  dataTest: PropTypes.string,
};

Modal.defaultProps = {
  className: "",
  rendered: false,
  dataTest: "",
};
