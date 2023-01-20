//интерфейс начального состояния по списку названий заданий 
export interface TodoState {
    //сам список названий заданий
    todos: any[];
    //флаг проведения процесса скачивания списка названий заданий
    loading: boolean;
    //ошибка которая возникла при проведении скачивания названий заданий
    error: null | string;
    //номер текущей страницы, на которой будем показывать скаченные названия заданий
    page: number;
    //максимальное количество скаченных названий заданий, которое мы будем показывать на странице
    limit: number;
}


export enum TodoActionTypes {
    //метка успешного окончания процесса скачивания названий новых заданий с сервера 
    FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
    //метка возникновения ошибки, которая возникла при проведении процесса скачивания названий заданий с сервера
    FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
    //метка определения страницы на которой будем показывать скаченные задания с сервера
    SET_TODO_PAGE = 'SET_TODO_PAGE'
}

//интерфейс данных которые подаются в хранилище store через соответствующий редюсер по метке FETCH_TODOS_SUCCESS
interface FetchTodoSuccessAction {
    type: TodoActionTypes.FETCH_TODOS_SUCCESS;
    payload: any[];
}

//интерфейс данных которые подаются в хранилище store через соответствующий редюсер по метке FETCH_TODOS_ERROR
interface FetchTodoErrorAction {
    type: TodoActionTypes.FETCH_TODOS_ERROR;
    payload: string;
}

//интерфейс данных которые подаются в хранилище store через соответствующий редюсер по метке SET_TODO_PAGE
interface SetTodoPage {
    type: TodoActionTypes.SET_TODO_PAGE;
    payload: number;
}

//экспортируем интерфейсы данных, которые подаются в хранилище store через reducer
export type TodoAction = FetchTodoErrorAction | FetchTodoSuccessAction | SetTodoPage;