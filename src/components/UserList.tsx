//вытаскиваем хук useEffect
import React, { useEffect } from "react";
//вытаскиваем сформированный хук  useTypedSelector
import { useTypedSelector } from "../hooks/useTypeSelector";
//вытаскиваем сформированный хук действий useActions
import {useActions} from "../hooks/useActions";

//компонент имен пользователей
const UserList: React.FC = () => {
    //с помощью хука useTypedSelector из хранилища store мы вытаскиваем список имен пользователей users
    //флаг, который сигнализирует процесс скачивания имен пользователей с сервера
    //и сообщение об ошибке которая может случиться при осуществлении скачивания имен пользователей с севера
    const {users,error,loading} = useTypedSelector(state => state.user);
    //вытаскиваем функцию запроса на скачивание имен пользователей с сервера
    const {fetchUsers} = useActions();


    useEffect(() => {
        //активируем функцию fetchUsers
        fetchUsers() 
    },[fetchUsers])

    //сигнализируем процесс скачивания имен пользователей с сервера
    if (loading) {
        return <h1>The download is in progress...</h1>
    }

    //случай когда случилась ошибка при скачивании имен пользователей с сервера
    if (error) {
        return <h1>{error}</h1>
    }
    
    return (
        <div>
            {/*Выводим все скаченные имена пользователей с сервера */}
            {users && users.map(user =>
                <div key={user.id}>{user.name}</div>
            )}
        </div>
    )
}

export default UserList;