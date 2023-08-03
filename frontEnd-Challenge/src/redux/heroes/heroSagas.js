import { all, call, put, takeLatest } from "redux-saga/effects";
import { charactersActions } from "./heroSlice";
import { characterId, characterMarvel} from "../../api/apiMarvel";

function* fetchCharactersData(action) {
  // Função do saga responsável por chamar a API
  const { offset, limit } = action.payload;
  try {
    const response = yield call(characterMarvel, offset, limit); // Usando yield call para chamar a função characterMarvel   
    yield put(charactersActions.fetchCharactersSuccess(response)); // Dispara uma ação Redux para armazenar os dados recebidos
  } catch (error) {
    yield put(charactersActions.fetchCharactersFailure(error.message)); // Dispara uma ação Redux para tratar erros
  }
}

function* fetchIdCharacters(action) {
  const {id} = action.payload;
  try {    
    const [response] = yield call(characterId, id);
    yield put(charactersActions.fetchIdSuccess(response));   
  } catch (error) {
    yield put(charactersActions.fetchIdFailure(error.massage));
  }
}

export default all([
  takeLatest("characters/fetchCharactersRequest", fetchCharactersData),
  takeLatest("characters/fetchIdRequest", fetchIdCharacters),
]);
