//вытаскиваем необходимые интерфейсы 
import {UserAction,  UserState} from "../../types/user";
//вытаскиваем список меток по пользователям
import {UserActionTypes} from "../../types/user";

//состояние списка имен пользователей
const initialState: UserState = 
{
    //сам список имен пользователей
    users: [],
    //флаг скачивания списка имен пользователей
    loading: false,
    //ошибка, которая возникла при загрузке списка имен пользователей
    error: null    
}

//составляем и экспортируем редюсер по списку имен пользователей
export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        //по метке UserActionTypes.FETCH_USERS_SUCCESS полученную информацию о скаченных именах пользователях передаем в хранилище store
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {loading: false, error: null, users: action.payload}
        //по метке UserActionTypes.FETCH_USERS_ERROR информацию об ошибке которая случилась 
        //в процессе загрузки имен пользователей передаем в хранилище store 
        case UserActionTypes.FETCH_USERS_ERROR:
            return {loading: false, error: action.payload, users: []}
        default:
            return state;
    }   
}