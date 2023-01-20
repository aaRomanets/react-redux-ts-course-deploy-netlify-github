//вытаскиваем необходимые интерфейсы
import { TodoAction, TodoState } from "../../types/todo";
//вытаскиваем необходимый список меток
import { TodoActionTypes } from "../../types/todo";

//начальное состояние списка задач
const initialState: TodoState = {
    //сам список названий заданий
    todos: [],
    //номер текущей страницы, на которой будем показывать скаченные названия заданий
    page: 1,
    //ошибка которая возникла при проведении скачивания названий заданий
    error: null,
    //максимальное количество скаченных названий заданий, которое мы будем показывать на странице
    limit: 10,
    //флаг, сигнализирующий процесс скачивания названий заданий
    loading: false
}

//составляем и экспортируем редюсер по списку названий заданий
export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
    switch (action.type) {
        //по метке TodoActionTypes.FETCH_TODOS_SUCCESS полученную информацию о скаченных названий заданий передаем в хранилище store
        case TodoActionTypes.FETCH_TODOS_SUCCESS:
            return {...state, loading: false, todos: action.payload}
        //по метке TodoActionTypes.FETCH_TODOS_ERROR информацию об ошибке которая случилась 
        //в процессе скачивания названий заданий передаем в хранилище store 
        case TodoActionTypes.FETCH_TODOS_ERROR:
            return {...state, loading: false, error: action.payload}
        //по метке TodoActionTypes.FETCH_TODOS_ERROR информацию о номере страницы 
        //на которой будем показывать скаченные названия заданий передаем в хранилище store 
        case TodoActionTypes.SET_TODO_PAGE:
            return {...state, page: action.payload}
        default:
            return state;
    }
}