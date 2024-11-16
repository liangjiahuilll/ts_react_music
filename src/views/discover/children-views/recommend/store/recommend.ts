import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import hyRequest from '@/service'
import { AxiosHeaders } from 'axios'

export const fetchBannerdata = createAsyncThunk(
  'banner',
  async (args, { dispatch }) => {
    const res = await hyRequest.get({
      url: '/banner',
      headers: new AxiosHeaders()
    })
    dispatch(changeBanners(res.banners))
  }
)

export const getHotrecommend=createAsyncThunk(
  'hot',
  async (args,{dispatch})=>{
    const res=await hyRequest.get({
      url:'/personalized',
      headers: new AxiosHeaders(),
      params:{
        limit:8
      }
    })
    dispatch(changeHotrecommend(res.result))
  }
)

interface Irecommend {
  banners: any[],
  hotrecommends:any[]
}

const initialState: Irecommend = {
  banners: [],
  hotrecommends:[]
}
const recommendSlice = createSlice({
  name: 'recommend',
  //
  initialState,
  reducers: {
    changeBanners(state, { payload }) {
      state.banners = payload
    },

    changeHotrecommend(state,{payload}){
      state.hotrecommends=payload
    }
  }
})

export const { changeBanners,changeHotrecommend } = recommendSlice.actions
export default recommendSlice.reducer
