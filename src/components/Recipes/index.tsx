/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useState, useContext } from "react";
import styles from "./styles.module.scss";
import Recipe from "../Recipe";
import { RecipeType } from "../../models/recipe";
import { RecipeResponse } from "../../models/recipe-response";
import ojingeoMuchim from "../../assets/images/Ojingeo-muchim.png";
import roastedCarrot from "../../assets/images/roasted-carrot.png";
import sweetCherries from "../../assets/images/sweet-cherries.png";
import colaChicken from "../../assets/images/cola-chicken.png";
import { Context } from "../../App";

const Recipes: FC = () => {
  const { apiKey } = useContext(Context);
  const [recipes, setRecipes] = useState<RecipeType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`)
      .then((response) => response.json())
      .then((data: RecipeResponse) => {
        setRecipes(data.results);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  // This array is for testing in case the api does not respond due to many requests per day
  const testRecipes = [
    { id: 1, title: "Ojingeo Muchim asdasdasd asdas", image: ojingeoMuchim },
    { id: 2, title: "Roasted Carrot", image: roastedCarrot },
    { id: 3, title: "Sweet Cherries", image: sweetCherries },
    { id: 4, title: "Cola Chicken", image: colaChicken },
  ];

  return (
    <div className={styles.container}>
      <h3>Nuevas recetas</h3>
      {loading ? (
        <div className={styles.loader}>
          <div className="loader-container">
            <div className="spinner"></div>
          </div>
        </div>
      ) : recipes === undefined ? (
        <div className={styles.recipes}>
          {testRecipes.map(({ id, title, image }) => (
            <Recipe key={id} id={id} title={title} image={image} />
          ))}
        </div>
      ) : (
        <div className={styles.recipes}>
          {recipes.map(({ id, title, image }) => (
            <Recipe key={id} id={id} title={title} image={image} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Recipes;
