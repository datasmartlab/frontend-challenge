import { getHeroes } from "../services/apiMarvel";
import { setHeroes } from "./CharacterSlice";
import { Dispatch } from "redux";

export const fetchHeroes = () => {
  return async (dispatch: Dispatch) => {
    try {
      const heroes = await getHeroes();
      dispatch(setHeroes(heroes));
    } catch (error) {
      console.log("Erro ao buscar heróis:", error);
    }
  };
};
