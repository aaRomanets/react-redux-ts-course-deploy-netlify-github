//вытаскиваем функции, связанные с пользователями
import * as UserActionCreators from "./User";
//вытаскиваем функции, связанные с названиями заданий
import * as TodoActionCreators from "./todo";

const creators = 
{
    //связанные с названиями заданий
    ...TodoActionCreators,
    //связанные с пользователями
    ...UserActionCreators
}

//экспортируем по умолчанию функции
export default creators;