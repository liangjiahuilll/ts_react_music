import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


interface Ilogin{
  isLogin:boolean
  isUser:boolean
}

const initialState:Ilogin={
  isLogin:false,
  isUser:false
}
const loginSlice=createSlice({
  name:'login',
  initialState,
  reducers:{
    changeShowLogin(state,{payload}){
      state.isLogin=payload
    },
    changeIsUser(state,{payload}){
      state.isUser=payload
    }
  }
})

export default loginSlice.reducer
export const {changeShowLogin,changeIsUser}=loginSlice.actions