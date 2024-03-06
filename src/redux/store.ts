import { configureStore } from "@reduxjs/toolkit";
import dataUserReducer from "./datauser/datauserSlice";
import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    datauser: dataUserReducer,
  },
});

export const AppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
export default store;
