import { RecipeType } from "./recipe";

export interface RecipeResponse {
  number: number;
  offset: number;
  results: RecipeType[];
  totalResults: number;
}
