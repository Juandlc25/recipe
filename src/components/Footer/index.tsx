import { FC } from "react";
import styles from "./styles.module.scss";
import footer from "../../assets/images/footer.png";

const Footer: FC = () => {
  return (
    <footer className={styles.container}>
      <span>Con el patrocinio de</span>
      <img className={styles.image} src={footer} alt="footer" />
    </footer>
  );
};

export default Footer;
