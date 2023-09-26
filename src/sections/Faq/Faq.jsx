import Container from "../../components/Container";
import { FAQ, testIds } from "./constants";
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
    <section data-testid={testIds.COMPONENT} className={styles.faq}>
      <Container className={styles.container}>
        <h3 data-testid={testIds.HEADING} className={styles.header}>Frequently Asked Questions</h3>
        <div data-testid={testIds.QUESTION_ANSWER} className={styles.qa}>
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
                    className={
                      active === idx ? `${styles.img}` : `${styles.imgAlt}`
                    }
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
