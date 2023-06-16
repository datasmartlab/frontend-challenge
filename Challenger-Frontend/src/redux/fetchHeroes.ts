import { getHeroes } from "../services/apiMarvel";
import { setHeroes } from "./CharacterSlice";
import { Dispatch } from "redux";

export const fetchHeroes = (offset: number, limite: number) => {
  return async (dispatch: Dispatch) => {
    try {
      const heroes = await getHeroes(offset, limite);
      dispatch(setHeroes(heroes));
    } catch (error) {
      console.log("Erro ao buscar heróis:", error);
    }
  };
};
