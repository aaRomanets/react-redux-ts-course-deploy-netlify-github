import React from "react";
//вытаскиваем список названий задач
import TodoList from "./components/TodoList";
//вытаскиваем список пользовaтелей
import UserList from "./components/UserList";

const App = () => {
  return (
    <div>
      {/*Изображаем список пользователей */}
      <UserList/>
      <hr/>
      {/*Изображаем список задач */}
      <TodoList/>
    </div>
  );
};

export default App;
