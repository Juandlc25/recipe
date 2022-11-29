import { FC, useState } from "react";
import styles from "./styles.module.scss";
import logo from "../../assets/images/logo.png";
import cx from "classnames";
import useMediaQuery from "../../hooks/use-media-query";
import { MediaQueries } from "../../models/media-queries";
import home from "../../assets/images/home.png";

const Header: FC = () => {
  const [active] = useState<string>("Home");
  const isDesktop = useMediaQuery(MediaQueries.DESKTOP);
  const items = [
    "Home",
    "Vegetarianos",
    "Platos principales",
    "Tortas",
    "Comida Rapida",
    "Menú niños",
    "Sopas",
  ];
  return (
    <header className={styles.container}>
      <img className={styles.logo} src={logo} alt="logo" />
      {isDesktop ? (
        <div className={styles.items}>
          {items.map((item, key) => (
            <span
              className={cx(styles.item, active === item && styles.active)}
              key={key}
            >
              {item}
            </span>
          ))}
        </div>
      ) : (
        <img className={styles.home} src={home} alt="home" />
      )}
    </header>
  );
};

export default Header;
