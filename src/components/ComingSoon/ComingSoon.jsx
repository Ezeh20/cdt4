import styles from "./ComingSoon.module.scss";
import { constants } from "./constants";

export const ComingSoon = () => {
  return (
    <div className={styles.comingSoon}>
      <p>{constants.p1}</p>
      <p>{constants.p2}</p>
    </div>
  );
};
