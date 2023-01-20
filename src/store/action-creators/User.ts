import axios from "axios"
import { Dispatch } from "react"
//вытаскиваем интерфейс данных в хранилище store, связанный с именами пользователей
import { UserAction } from "../../types/user"
//вытаскиваем список меток имеющих отношение к именам пользователей
import { UserActionTypes } from "../../types/user"

//экспортируемая функция скачивания имен пользователей с сервера 
export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try 
        {
            //делаем запрос на скачивание имен пользователей с сервера
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setTimeout(() => {
                //фиксируем результат указанного скачивания и по метке UserActionTypes.FETCH_USERS_SUCCESS
                //передаем его в хранилище store через соответствующий редюсер
                dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data}); 
            }, 500);
        } 
        catch (e) 
        {
            //по метке TodoActionTypes.FETCH_TODOS_ERROR в хранилище store через соответствующий редюсер
            //отправляем сообщение об ошибке, которая случилась при скачивании имен пользователей с сервера
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR, 
                payload: 'The error occured at downloading of users names'
            })
        }
    }
}