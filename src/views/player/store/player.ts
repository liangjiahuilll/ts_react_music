import hyRequest from '@/service'
import { parseLyric } from '@/utils/lyric.parse'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AxiosHeaders } from 'axios'

export const getCurrentSong = createAsyncThunk(
  'currensong',
  (ids: number, { dispatch, getState }) => {
    const player = (getState() as any).playlist
    const playList = player.playlist
    const findIndex = playList.findIndex((item: any) => item.id === ids)
    if (findIndex === -1) {
      // 没有在列表中找到对应歌曲
      // 获取song
      hyRequest
        .get({
          url: '/song/detail',
          headers: new AxiosHeaders(),
          params: {
            ids: ids
          }
        })
        .then((res) => {
          console.log(ids)
          if (!res.songs.length) return
          const song = res.songs[0]
          const newList = [...playList]
          newList.push(song)
          dispatch(changeCurrentSong(song))
          dispatch(changePlaylist(newList))
          dispatch(changeplayIndex(newList.length - 1))
        })
        .catch((err) => console.log(err))
    } else {
      const song = playList[findIndex]
      dispatch(changeCurrentSong(song))
      dispatch(changeplayIndex(findIndex))
    }

    hyRequest
      .get({
        url: '/lyric',
        headers: new AxiosHeaders(),
        params: {
          id: ids
        }
      })
      .then((res) => {
        // 获取歌词
        const lyricString = res.lrc.lyric
        const lyrics = parseLyric(lyricString)
        console.log(lyrics)
        dispatch(changeLyric(lyrics))
      })
  }
)

export const changeMusicAction = createAsyncThunk(
  'changemusic',
  (isNext: boolean, { dispatch, getState }) => {
    // 获取state中的数据
    const player = (getState() as any).playlist
    const playMode = player.playMode
    const songIndex = player.playIndex
    const songList = player.playlist

    // 根据不同的播放模式，计算不同的下一首歌的索引
    let newIndex = songIndex
    if (playMode === 1) {
      newIndex = Math.floor(Math.random() * songList.length)
    } else {
      newIndex = isNext ? songIndex + 1 : songIndex - 1
      if (newIndex > songList.length - 1) {
        newIndex = 0
      }
      if (newIndex < 0) {
        newIndex = songList.length - 1
      }
    }

    // 获取当前歌曲
    console.log(123)
    const song = songList[newIndex]
    dispatch(changeCurrentSong(song))
    console.log(newIndex)
    dispatch(changeplayIndex(newIndex))

    hyRequest
      .get({
        url: '/lyric',
        headers: new AxiosHeaders(),
        params: {
          id: song.id
        }
      })
      .then((res) => {
        // 获取歌词
        const lyricString = res.lrc.lyric
        const lyrics = parseLyric(lyricString)
        console.log(lyrics)
        dispatch(changeLyric(lyrics))
      })
  }
)

interface IplayerState {
  currentsong: any
  lyric: any[]
  lyricIndex: number
  playlist: any[]
  playIndex: number
  playMode: number
}

const initialState: IplayerState = {
  currentsong: {},
  lyric: [],
  lyricIndex: -1,
  playlist: [],
  playIndex: -1,
  playMode: 0 //0：顺序播放  1：随机播放  2：单曲循环
}
const playlist = createSlice({
  name: 'player',
  initialState,
  reducers: {
    changeCurrentSong(state, { payload }) {
      state.currentsong = payload
    },
    changeLyric(state, { payload }) {
      state.lyric = payload
    },
    changeLyricIndex(state, { payload }) {
      state.lyricIndex = payload
    },
    changePlaylist(state, { payload }) {
      state.playlist = payload
    },
    changeplayIndex(state, { payload }) {
      state.playIndex = payload
    },
    changePlayMode(state, { payload }) {
      state.playMode = payload
    }
  }
})

export default playlist.reducer
export const {
  changeCurrentSong,
  changeLyric,
  changeLyricIndex,
  changePlaylist,
  changeplayIndex,
  changePlayMode
} = playlist.actions
