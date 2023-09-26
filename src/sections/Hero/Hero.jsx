import styles from "./Hero.module.scss";
import { hero_bg } from "../../../public/assets";
import Container from "../../components/Container";
import Extrude from "../../components/Extrude";
import { testIds } from "./constants";

export const Hero = () => {
  const greeting = "HELLO";
  const subtext = "Do you want to check your Postcode?";
  return (
    <section
      data-testid={testIds.COMPONENT}
      style={{ background: `url(${hero_bg})` }}
      className={styles.hero}
    >
      <div className={styles.overlay}>
        <Container className={styles.container}>
          <div>
            <p data-testid={testIds.GREETING}>{greeting}</p>
            <p data-testid={testIds.SUBTEXT} className={styles.subtext}>
              {subtext}
            </p>
          </div>
          <div className={styles.extrude}>
            <Extrude />
          </div>
        </Container>
      </div>
    </section>
  );
};
