import Container from "../../components/Container";
import { FAQ } from "./constants";
import styles from "./Faq.module.scss";
import { arr_right } from "../../../public/assets";
import { useState } from "react";

export const Faq = () => {
  const [active, setActive] = useState(null);

  const onClick = (idx) => {
    if (active === idx) return setActive(null);
    setActive(idx);
  };

  return (
    <section className={styles.faq}>
      <Container className={styles.container}>
        <h3 className={styles.header}>Frequently Asked Questions</h3>
        <div className={styles.qa}>
          {FAQ.map((itm, idx) => {
            const { id, question, answer } = itm;
            return (
              <div
                key={id}
                onClick={() => onClick(idx)}
                className={styles.single}
              >
                <div className={styles.head}>
                  <p className={styles.question}>{question}</p>
                  <img
                    src={arr_right}
                    alt="arr"
                    className={active === idx ? `${styles.img}` : `${styles.imgAlt}`}
                  />
                </div>
                <p
                  className={
                    active === idx
                      ? `${styles.answer} ${styles.answerAlt}`
                      : `${styles.answer}`
                  }
                >
                  {answer}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
