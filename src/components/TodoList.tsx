//вытаскиваем хук useEffect
import React, { useEffect } from "react";
//вытаскиваем сформированный хук действий useActions
import { useActions } from "../hooks/useActions";
//вытаскиваем сформированный хук useTypedSelector
import { useTypedSelector } from "../hooks/useTypeSelector";

//компонент списка названий заданий
const TodoList: React.FC = () => 
{
    //с помощью сформированного хука useTypedSelector из хранилища store вытаскиваем страницу показа названий заданий, 
    //сообщение об ошибке которая возникла при скачивании названий заданий,
    //флаг, который сигнализирует процесс скачивания списка названий заданий
    //сам список названий заданий
    //максимальное число названий заданий на странице
    const {page, error, loading, todos, limit} = useTypedSelector(state => state.todo)
    //из хука действий вытаскиваем функции связанные с списком названий заданий
    const {fetchTodos, setTodoPage} = useActions()
    //задаем массив номеров страниц по которым распределим список задач
    const pages = [1,2,3,4,5];

    useEffect(() => {
        //вначале скачиваем с сервера список названий заданий в соответствии с номером страницы page
        //и максимальным количеством названий заданий limit
        fetchTodos(page, limit);
    },[page, fetchTodos, limit])

    //происходит скачивание списка названий задач с сервера
    if (loading) 
    {
        return <h1>The download is in progress...</h1>
    }

    //случилась ошибка при скачивании списка названий задач с сервера
    if (error) 
    {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {/*Изображаем сам список названий задач в соответствии с номером текущей страницы */}
            {todos && todos.map(todo =>
                <div key={todo.id}>{todo.id} - {todo.title}</div>
            )}
            {/*Изображаем разбивку на страницы по которым будем показывать список названий задач */}
            {/*И предоставляем возможность изменения списка названий задач в соответствии с изменением номера текущей страницы page */}
            <div style={{display: "flex"}}>
                {pages.map(p => 
                    <div 
                        onClick={() => setTodoPage(p)}
                        style={{border:p === page? '2px solid green' : '1px solid gray', padding: 10}}
                    >
                        {p}
                    </div>
                )}
            </div>
        </div>
    )
}

export default TodoList;