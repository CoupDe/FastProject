import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "../slices/store";

export const useAppDispatch = () => useDispatch<AppDispatch>(); //Типизированный диспатч
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
