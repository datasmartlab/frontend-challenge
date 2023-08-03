import { all } from "redux-saga/effects";
import charactersSaga from './heroes/heroSagas';


export default function* rootSagas(){
    return yield all([charactersSaga])
}

