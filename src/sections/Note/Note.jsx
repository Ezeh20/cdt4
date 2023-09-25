import { note_bg, check_mark } from "../../../public/assets";
import Container from "../../components/Container";
import styles from "./Note.module.scss";
import { constant } from "./constants";

export const Note = () => {
  return (
    <section className={styles.note} style={{ background: `url(${note_bg})` }}>
      <Container className={styles.container}>
        <p className={styles.header}>Things to note:</p>
        {constant.map((itm, idx) => {
          return (
            <div key={idx} className={styles.items}>
              <img src={check_mark} alt="check" />
              <p>{itm}</p>
            </div>
          );
        })}
      </Container>
    </section>
  );
};
