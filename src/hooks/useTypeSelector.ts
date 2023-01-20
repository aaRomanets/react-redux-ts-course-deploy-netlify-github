import {TypedUseSelectorHook, useSelector} from "react-redux";
//вытаскиваем корневое состояние по всем редюсерам
import { RootState } from "../store/reducers";

//составляем хук useTypedSelector с помощью хука useSelector и корневого состояния по всем редюсерам
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;