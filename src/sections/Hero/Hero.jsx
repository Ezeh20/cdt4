import styles from "./Hero.module.scss";
import { hero_bg } from "../../../public/assets";
import Container from "../../components/Container";

export const Hero = () => {
  const greeting = "HELLO";
  const subtext = "Do you want to check your Postcode?";
  return (
    <section style={{ background: `url(${hero_bg})` }} className={styles.hero}>
      <div className={styles.overlay}>
        <Container className={styles.container}>
          <div>
            <p>{greeting}</p>
            <p className={styles.subtext}>{subtext}</p>
          </div>
          <div className={styles.extrude}>
            <h1>Ade</h1>
          </div>
        </Container>
      </div>
    </section>
  );
};
