import { FC } from "react";
import styles from "./styles.module.scss";
import banner from "../../assets/images/bcq.png";
import useMediaQuery from "../../hooks/use-media-query";
import { MediaQueries } from "../../models/media-queries";
import CarrotIcon from "../../assets/icons/CarrotsIcon";
import ServicesIcon from "../../assets/icons/ServicesIcon";
import CakeIcon from "../../assets/icons/CakeIcon";
import FastFoodIcon from "../../assets/icons/FastFoodIcon";
import ChildrenIcon from "../../assets/icons/ChildrenIcon";
import SoupIcon from "../../assets/icons/SoupIcon";

const Banner: FC = () => {
  const isDesktop = useMediaQuery(MediaQueries.DESKTOP);
  const cards = [
    { Icon: <CarrotIcon />, title: "Vegetarianos" },
    { Icon: <ServicesIcon />, title: "Principales" },
    { Icon: <CakeIcon />, title: "Tortas" },
    { Icon: <FastFoodIcon />, title: "Rápida" },
    { Icon: <ChildrenIcon />, title: "Menú Niños" },
    { Icon: <SoupIcon />, title: "Sopas" },
  ];
  return (
    <>
      <img className={styles.container} src={banner} alt="banner" />
      {!isDesktop && (
        <div className={styles.cards}>
          {cards.map(({ Icon, title }, key) => (
            <div className={styles.card} key={key}>
              {Icon}
              <span>{title}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Banner;
