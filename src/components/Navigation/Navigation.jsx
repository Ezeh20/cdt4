import Container from "../Container";
import { logo, help } from "../../../public/assets";
import { AiOutlineMenuFold, AiOutlineClose } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { constants } from "./constants";
import styles from "./Navigation.module.scss";
const { dropDown, single } = constants;

export const Navigation = () => {
  const [toggle, setToggle] = useState(false);
  const [drop, setDrop] = useState(null);

  const onToggle = () => {
    setToggle((prev) => !prev);
  };

  const click = (idx) => {
    if (drop === idx) {
      return setDrop(null);
    }
    setDrop(idx);
  };

  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <div className={styles.top}>
            <img src={logo} alt="logo" className={styles.logo} />
            <img src={help} alt="help" className={styles.help} />
            {toggle ? (
              <AiOutlineClose className={styles.icon} onClick={onToggle} />
            ) : (
              <AiOutlineMenuFold className={styles.icon} onClick={onToggle} />
            )}
          </div>
          <Container className={styles.container}>
            <div
              className={
                toggle
                  ? `${styles.bottom} ${styles.bottomAlt}`
                  : `${styles.bottom}`
              }
            >
              <div className={styles.dropDown}>
                {dropDown.map((itm, idx) => {
                  const { id, dropdown, lists } = itm;
                  return (
                    <div
                      key={id}
                      className={styles.group}
                      onClick={() => click(idx)}
                    >
                      <div className={styles.group1}>
                        <p className={styles.dropdown}>{dropdown}</p>
                        <IoIosArrowDown
                          className={
                            drop === idx
                              ? `${styles.icon} ${styles.iconAlt}`
                              : `${styles.icon}`
                          }
                        />
                      </div>
                      <div
                        className={
                          drop === idx
                            ? `${styles.group2} ${styles.group2Alt}`
                            : `${styles.group2}`
                        }
                      >
                        {lists.map((itm) => {
                          return (
                            <div key={itm}>
                              <p>{itm}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
                <div className={styles.single}>
                  {single.map((itm) => {
                    return (
                      <div key={itm} className={styles.itm}>
                        <p className={styles.link}>{itm}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Container>
        </nav>
      </Container>
    </header>
  );
};
