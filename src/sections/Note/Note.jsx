import { note_bg, check_mark } from "../../../public/assets";
import Container from "../../components/Container";
import styles from "./Note.module.scss";
import { constant, testIds } from "./constants";

export const Note = () => {
  return (
    <section
      data-testid={testIds.COMPONENT}
      className={styles.note}
      style={{ background: `url(${note_bg})` }}
    >
      <Container className={styles.container}>
        <p data-testid={testIds.HEADER} className={styles.header}>
          Things to note:
        </p>
        {constant.map((itm, idx) => {
          return (
            <div data-testid={testIds.NOTES} key={idx} className={styles.items}>
              <img src={check_mark} alt="check" />
              <p>{itm}</p>
            </div>
          );
        })}
      </Container>
    </section>
  );
};
