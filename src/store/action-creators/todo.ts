import axios from "axios"
import { Dispatch } from "react"
//вытаскиваем интерфейс данных в хранилище store, связанный со списком названий заданий
import { TodoAction } from "../../types/todo"
//вытаскиваем список меток имеющих отношение к списку названий заданий
import {  TodoActionTypes } from "../../types/todo"

//экспортируемая функция скачивания списка названий заданий с сервера по странице с номером page 
//при максивальном количестве названий заданий limit
export const fetchTodos = (page:number = 1, limit:number = 10) => 
{
    return async (dispatch: Dispatch<TodoAction>) => 
    {
        try 
        {
            //делаем запрос на скачивание списка названий заданий с сервера
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos',
            {
                //в указанном запросе отправляем страницу _page названий заданий и максимальное количество 
                //соответствующих названий на странице _limit
                params: {_page: page, _limit: limit}
            }
            );
            setTimeout(() => 
            {
                //скаченный список названий заданий отправляем по метке TodoActionTypes.FETCH_TODOS_SUCCESS в хранилище store
                //через соответствующий редюсер
                dispatch({type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: response.data}); 
            }, 500);
        } catch (e) 
        {
            //по метке TodoActionTypes.FETCH_TODOS_ERROR через соответствующий редюсер в хранилище store
            //отправляем сообщение об ошибке, которая случилась при скачивании списка названий заданий с сервера
            dispatch(
            {
                type: TodoActionTypes.FETCH_TODOS_ERROR, 
                payload: 'The error occured at downloading of tasks names list'
            })
        }
    }
}

//экспортируем функцию задания номера текущей страницы, на которой будем показывать названия заданий
export function setTodoPage(page: number): TodoAction {
    return {
        type: TodoActionTypes.SET_TODO_PAGE,
        payload: page
    }
}