import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
//вытаскиваем функции действий ActionCreators
import ActionCreators from '../store/action-creators/'

//создаем и экспортируем хук, который содержит в себе необходимые функции действий ActionCreators
export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(ActionCreators, dispatch)
}