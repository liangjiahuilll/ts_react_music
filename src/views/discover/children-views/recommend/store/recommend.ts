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

export const getHotrecommend = createAsyncThunk(
  'hot',
  async (args, { dispatch }) => {
    const res = await hyRequest.get({
      url: '/personalized',
      headers: new AxiosHeaders(),
      params: {
        limit: 8
      }
    })
    dispatch(changeHotrecommend(res.result))
  }
)

export const getArtistList = createAsyncThunk(
  'artist',
  async (args, { dispatch }) => {
    const res = await hyRequest.get({
      url: '/artist/list',
      headers: new AxiosHeaders(),
      params: {
        limit: 5
      }
    })
    dispatch(changeArtistList(res.artists))
  }
)

export const getNewAlbum = createAsyncThunk(
  'newalbum',
  async (args, { dispatch }) => {
    const res = await hyRequest.get({
      url: '/album/newest',
      headers: new AxiosHeaders(),
      params: {
        limit: 8
      }
    })
    dispatch(changeNewalbum(res.albums))
  }
)

const rankingIds = [19723756, 3779629, 2884035]
export const getrankings = createAsyncThunk(
  'rankingId',
  (args, { dispatch }) => {
    // for (let id of rankingIds) {
    //   hyRequest
    //     .get({
    //       url: '/playlist/detail',
    //       headers: new AxiosHeaders(),
    //       params: {
    //         id: id
    //       }
    //     })
    //     .then((res) => {
    //       switch (id) {
    //         case 19723756:
    //           console.log('飙升榜的数据', res)
    //           break
    //         case 3779629:
    //           console.log('新歌榜的数据', res)
    //           break
    //         case 2884035:
    //           console.log('原创榜的数据', res)
    //           break
    //       }
    //     })
    // }
    const promises: Promise<any>[] = []
    for (const id of rankingIds) {
      promises.push(
        hyRequest.get({
          url: '/playlist/detail',
          headers: new AxiosHeaders(),
          params: {
            id: id
          }
        })
      )
    }

    Promise.all(promises).then((res) => {
      const playlists = res
        .filter((item) => item.playlist)
        .map((item) => item.playlist)
      dispatch(changeRankingsAction(playlists))
    })
  }
)

interface Irecommend {
  banners: any[]
  hotrecommends: any[]
  newalbum: any[]
  rankings: any[]
  artistlist: any[]
}

const initialState: Irecommend = {
  banners: [],
  hotrecommends: [],
  newalbum: [],
  rankings: [],
  artistlist: []
}
const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBanners(state, { payload }) {
      state.banners = payload
    },

    changeHotrecommend(state, { payload }) {
      state.hotrecommends = payload
    },

    changeNewalbum(state, { payload }) {
      state.newalbum = payload
    },

    changeRankingsAction(state, { payload }) {
      state.rankings = payload
    },

    changeArtistList(state, { payload }) {
      state.artistlist = payload
    }
  }
})

export const {
  changeBanners,
  changeHotrecommend,
  changeNewalbum,
  changeRankingsAction,
  changeArtistList
} = recommendSlice.actions
export default recommendSlice.reducer
