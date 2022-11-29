/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useState, useContext } from "react";
import styles from "./styles.module.scss";
import star from "../../assets/images/star.png";
import heart from "../../assets/images/heart.png";
import { RecipeType } from "../../models/recipe";
import { RecipeDetails } from "../../models/recipe-details";
import useMediaQuery from "../../hooks/use-media-query";
import { Context } from "../../App";

interface Props extends RecipeType {}

const Recipe: FC<Props> = ({ id, title, image }) => {
  const [details, setDetails] = useState<RecipeDetails>({} as RecipeDetails);
  const [isHovering, setIsHovering] = useState(false);
  const isPhone = useMediaQuery(880);
  const { apiKey } = useContext(Context);
  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        setDetails({
          servings: data.servings,
          readyInMinutes: data.readyInMinutes,
          pricePerServing: data.pricePerServing,
        });
      })
      .catch(() => {
        console.log("error");
      });
  }, []);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const getHeight = () => {
    if (!isPhone) {
      if (isHovering) return "202px";
      return "182px";
    }
    if (isHovering) return "300px";
    return "270px";
  };
  return (
    <div
      className={styles.container}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{ height: getHeight() }}
    >
      <img className={styles.img} src={image} alt="" />
      {isHovering ? (
        <div className={styles.details}>
          <div>
            <span>Tamaño de la porción</span>
            <label>{details.servings ?? 8} porciones</label>
          </div>
          <div>
            <span>Tiempo de preparación</span>
            <label>{details.readyInMinutes ?? 4} minutos</label>
          </div>
          <div>
            <span>Precio por porción</span>
            <label>{details.pricePerServing ?? 120.3} minutos</label>
          </div>
        </div>
      ) : (
        <>
          <span className={styles.title}>{title}</span>
          <div className={styles.bottom}>
            <div>
              <img src={star} alt="star" />
              <span className={styles.score}>5.0</span>
            </div>
            <img src={heart} alt="heart" />
          </div>
        </>
      )}
    </div>
  );
};

export default Recipe;
