import PropTypes from "prop-types";
import styles from "./Select.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { useContext, useState } from "react";
import { ModalContext } from "../../context/ModalContext";
import Modal from "../Modal";
import ComingSoon from "../ComingSoon";

export const Select = ({ options, placeholder }) => {
  const { setIsActive } = useContext(ModalContext);
  const [active, setActive] = useState(false);
  const [value, setValue] = useState("");

  const onClick = (itm) => {
    setValue(itm);
    setActive((pre) => !pre);
    setIsActive((pre) => !pre);
  };

  const onClose = () => {
    setValue("");
    setIsActive((pre) => !pre);
  };
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
                onClick={() => onClick(itm)}
                className={styles.state}
              >
                {itm}
              </p>
            );
          })}
        </div>
      ) : undefined}
      <Modal className={styles.modal}>
        <AiOutlineClose onClick={onClose} className={styles.icon2} />
        <ComingSoon />
      </Modal>
    </div>
  );
};

Select.propTypes = {
  options: PropTypes.array,
  placeholder: PropTypes.string,
};
