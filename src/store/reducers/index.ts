import {combineReducers} from "redux";
//вытаскиваем редюсер по списку названий задач
import { todoReducer } from "./todoReducer";
//вытаскиваем редюсер по именам пользователей
import {userReducer} from "./userReducer";

//фомируем корневой редюсер
export const rootReducer = combineReducers({
    //редюсер по пользователям обозначаем как user
    user: userReducer,
    //редюсер по списку названий задач обозначаем как todo
    todo: todoReducer
})

//экспортируем корневое состояние по всем редюсерам
export type RootState = ReturnType<typeof rootReducer>