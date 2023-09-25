import { logo_alt } from "../../../public/assets";
import Container from "../Container";
import styles from "./Footer.module.scss";
import { constants } from "./constants";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.content}>
          <div className={styles.top}>
            <img src={logo_alt} alt="logo_footer" className={styles.img}/>
            <div className={styles.links}>
              {constants.map((itm) => {
                const { id, heading, lists } = itm;
                return (
                  <div key={id} className={styles.link}>
                    <p className={styles.heading}>{heading}</p>
                    <ul className={styles.ul}>
                      {lists.map((itm, idx) => {
                        return <li key={idx} className={styles.li}>{itm}</li>;
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.bottom}>
            <p>Check My Postcode</p>
            <p>CheckMyPostcode.UK is a Good Website</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
