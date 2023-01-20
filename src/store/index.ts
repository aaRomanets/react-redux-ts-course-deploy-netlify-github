import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
//вытаскиваем корневой редюсер rootReducer
import { rootReducer } from "./reducers";

//хранилище store формируем с помощью корневого редюсера rootReducer и компонента thunk
export const store = createStore(rootReducer, applyMiddleware(thunk));