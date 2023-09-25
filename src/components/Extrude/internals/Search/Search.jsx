import styles from "./Search.module.scss";
import { search } from "../../../../../public/assets";
import Select from "../../../Select";
import { states } from "./constants";
import Button from "../../../Button";
import { useContext, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Modal from "../../../Modal";
import { ModalContext } from "../../../../context/ModalContext";
import ComingSoon from "../../../ComingSoon";

export const Search = () => {
  const [value, setValue] = useState("");
  const [disabled, setDisabled] = useState(true);
  const { setIsActive } = useContext(ModalContext);

  useEffect(() => {
    if (value.trim().length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [value]);

  const onSubmit = () => {
    setIsActive((pre) => !pre);
  };

  const onClose = () => {
    setIsActive((pre) => !pre);
    setValue("");
  };

  return (
    <div className={styles.section}>
      <div className={styles.inputContainer}>
        <div className={styles.top}>
          <img src={search} alt="icon" />
          <input
            value={value}
            type="text"
            placeholder="State/Province"
            onChange={(e) => setValue(e.target.value)}
            className={styles.input}
          />
        </div>
        <Button
          disabled={disabled}
          label="Search"
          onClick={onSubmit}
          className={
            disabled ? `${styles.btn} ${styles.btnAlt}` : `${styles.btn}`
          }
        />
      </div>
      <Select placeholder="State/Province" options={states} />
      <Modal className={styles.modal}>
        <AiOutlineClose onClick={onClose} className={styles.icon2} />
        <ComingSoon />
      </Modal>
    </div>
  );
};

// Search.propTypes = {};
