//интерфейс начального состояния по именам пользователей 
export interface UserState 
{
    //список имен пользователей
    users: any[];
    //флаг проведения загрузки списка имен пользователей 
    loading: boolean;
    //ошибка, которая случилась при загрузке списка имен пользователей
    error: null | string;
}

//составляем список меток по именам пользователей и его экспортируем
export enum UserActionTypes 
{
    //метка успешно проведенного процесса скачивания имен пользователей
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    //метка ошибки, возникшей при проведении процесса скачивания имен пользователей
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR"
}

//интерфейс данных которые подается в хранилище store через соответствующий редюсер по метке FETCH_USERS_SUCCESS 
interface FetchUsersSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: any[]
}

//интерфейс данных которые подается в хранилище store через соответствующий редюсер по метке FETCH_USERS_ERROR
interface FetchUsersErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string;
}

//экспортируем интерфейсы данных, которые подаются в хранилище store через reducer
export type UserAction = FetchUsersErrorAction | FetchUsersSuccessAction;