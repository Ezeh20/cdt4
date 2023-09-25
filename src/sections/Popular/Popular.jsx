import styles from "./Popular.module.scss";
import Container from "../../components/Container";
import { constant } from "./constants";
import { pin } from "../../../public/assets";

export const Popular = () => {
  return (
    <Container className={styles.container}>
      <section className={styles.postCodes}>
        <div className={styles.top}>
          <p className={styles.code}>Popular Postcodes</p>
          <p className={styles.view}>View All</p>
        </div>
        <div className={styles.cardContainer}>
          {constant.map((itm) => {
            const { id, img, code, popularity } = itm;
            return (
              <div key={id} className={styles.card}>
                <img src={img} alt={code} className={styles.img} />
                <div className={styles.cardBottom}>
                  <img src={pin} alt="pin" />
                  <div className={styles.post}>
                    <p className={styles.code}>{code}</p>
                    <p className={styles.popularity}>{popularity}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Container>
  );
};
