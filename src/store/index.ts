import recommend from '@/views/discover/children-views/recommend/store/recommend'
import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import playlist from '@/views/player/store/player'
import login from '@/views/login/store/index'

const store = configureStore({
  reducer: {
    recommend,
    playlist,
    login
  }
})

type GetstateFntype = typeof store.getState
export type Irootstate = ReturnType<GetstateFntype>

export const useAppSelector: TypedUseSelectorHook<Irootstate> = useSelector
export default store
