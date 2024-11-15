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

interface Irecommend {
  banners: any[]
}

const initialState: Irecommend = {
  banners: []
}
const recommendSlice = createSlice({
  name: 'recommend',
  //
  initialState,
  reducers: {
    changeBanners(state, { payload }) {
      state.banners = payload
    }
  }
})

export const { changeBanners } = recommendSlice.actions
export default recommendSlice.reducer
