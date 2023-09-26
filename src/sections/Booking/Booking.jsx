import styles from "./Booking.module.scss";
import Container from "../../components/Container";
import { left, right, places, testIds } from "./constants";
import { discover } from "../../../public/assets";


export const Booking = () => {
  return (
    <section data-testid={testIds.COMPONENT} className={styles.booking}>
      <Container className={styles.container}>
        <div data-testid={testIds.TOP} className={styles.topSection}>
          <div className={styles.left}>
            {left.map((itm, id) => {
              return <img key={id} src={itm} alt="id" />;
            })}
          </div>
          <div className={styles.right}>
            {right.map((itm, id) => {
              return (
                <img
                  key={id}
                  src={itm}
                  alt="id"
                  className={id === 1 ? `${styles.img}` : undefined}
                />
              );
            })}
          </div>
        </div>
        <div className={styles.bottomSection}>
          <div data-testid={testIds.BOTTOM} className={styles.places}>
            {places.map((itm, id) => {
              return (
                <div key={id} className={styles.place}>
                  <img src={itm} alt="id" className={styles.img} />
                  {id !== places.length - 1 ? (
                    <p className={styles.from}>Double from</p>
                  ) : undefined}
                  {id === places.length - 1 ? (
                    <img src={discover} alt="discover" className={styles.img} />
                  ) : undefined}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};
