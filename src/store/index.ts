import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const store=configureStore({
  reducer:{}
})

type GetstateFntype=typeof store.getState
type Irootstate=ReturnType<GetstateFntype>

export const useAppSelector:TypedUseSelectorHook<Irootstate>=useSelector
export default store