import { memo, useEffect, useRef, useState } from 'react'
import {
  BarControl,
  BarOperator,
  BarPlayerInfo,
  PlayerBarWrapper
} from './style'
import { Link } from 'react-router-dom'
import { message, Slider } from 'antd'
import { useAppSelector } from '@/store'
import { getImgSize } from '@/utils/format'
import { formatTime, getSongUrl } from '@/utils/audio-player'
import { useDispatch } from 'react-redux'
import {
  changeLyricIndex,
  changeMusicAction,
  changePlayMode
} from '../store/player'

const Playbar = () => {
  const currentSong = useAppSelector((state) => state.playlist.currentsong)
  const lyric = useAppSelector((state) => state.playlist.lyric)
  const lyricIndex = useAppSelector((state) => state.playlist.lyricIndex)
  const playMode = useAppSelector((state) => state.playlist.playMode)
  const audioRef = useRef<HTMLAudioElement>()
  const [isPlay, setIsPlay] = useState(false)
  const [duration, setDuration] = useState(0)
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [isSliding, setIsSlliding] = useState(false)
  const dispatch: any = useDispatch()
  // const songList=useAppSelector(state=>state.playlist.playlist)
  // console.log(lyric)
  // console.log(currentSong)

  useEffect(() => {
    audioRef.current!.src = getSongUrl(currentSong.id)
    // console.log(currentSong)
    // 1968781675
    // 如果currentSong变了，说明要换音乐播放
    audioRef.current
      ?.play()
      .then(() => {
        setIsPlay(true)
        console.log('歌曲播放成功')
      })
      .catch((err) => {
        setIsPlay(false)
      })

    setDuration(currentSong.dt)
    // console.log(songList)
  }, [currentSong])

  //音频播放
  // 这个是控制当前音乐是否播放
  const handlePlayBtn = () => {
    // console.log(audioRef.current.src)
    isPlay ? audioRef.current?.pause() : audioRef.current.play()
    setIsPlay(!isPlay)
  }

  const handleTimeUpdate = () => {
    // 获取当前播放时间
    const currentTime = audioRef.current.currentTime * 1000
    // 计算当前进度百分比
    if (!isSliding) {
      const progress = (currentTime / duration) * 100
      setProgress(progress)
      setCurrentTime(currentTime)
    }

    // 匹配对应歌词
    let index = lyric.length - 1
    for (let i = 0; i < lyric.length; i++) {
      const lyricindex = lyric[i]
      // console.log(lyricindex)
      if (lyricindex.time > currentTime) {
        index = i - 1
        break
      }
    }
    if (lyricIndex === index || index === -1) return
    dispatch(changeLyricIndex(index))

    // 展示对应歌词
    console.log(lyric[index].text)
    message.open({
      content: lyric[index].text,
      // duration: 0,
      key: 'lyric'
    })
  }

  const handleSliderChange = (value: number) => {
    // 获取点击位置的时间
    const currentTime = (value / 100) * duration
    // 设置当前播放时间
    audioRef.current.currentTime = currentTime / 1000

    setCurrentTime(currentTime)
    setProgress(value)
    setIsSlliding(false)
  }

  const handleSliderchanging = (value: number) => {
    // 设置目前滑动条为拖拽状态
    setIsSlliding(true)
    setProgress(value)
    const currentTime = (value / 100) * duration
    setCurrentTime(currentTime)
  }

  const handlePlayMode = () => {
    let newplay = playMode + 1
    if (newplay > 2) newplay = 0
    dispatch(changePlayMode(newplay))
  }

  const handleChangeMusic = (isNext = true) => {
    console.log('前一首')
    dispatch(changeMusicAction(isNext))
  }

  const handleTimeEnded = () => {
    if (playMode === 2) {
      audioRef.current.currentTime = 0
      audioRef.current.play()
    } else {
      handleChangeMusic(true)
    }
  }
  return (
    <PlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <BarControl isPlay={isPlay}>
          <button
            className="btn sprite_playbar prev"
            onClick={() => handleChangeMusic(false)}
          ></button>
          <button
            className="btn sprite_playbar play"
            onClick={handlePlayBtn}
          ></button>
          <button
            className="btn sprite_playbar next"
            onClick={() => handleChangeMusic()}
          ></button>
        </BarControl>
        <BarPlayerInfo>
          <Link to="/player">
            <img
              src={getImgSize(currentSong?.al?.picUrl, 50)}
              className="image"
            ></img>
          </Link>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <span className="singer-name">{currentSong?.al?.name}</span>
            </div>
            <div className="progress">
              <Slider
                step={0.5}
                tooltip={{ formatter: null }}
                value={progress}
                onChangeComplete={handleSliderChange}
                onChange={handleSliderchanging}
              ></Slider>
              <div className="time">
                <span className="current">{formatTime(currentTime)}</span>
                <span className="divider">/</span>
                <span className="duration">{formatTime(duration)}</span>
              </div>
            </div>
          </div>
        </BarPlayerInfo>
        <BarOperator playMode={playMode}>
          <div className="left">
            <button className="btn pip"></button>
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn sprite_playbar volume"></button>
            <button
              className="btn sprite_playbar loop"
              onClick={handlePlayMode}
            ></button>
            <button className="btn sprite_playbar playlist"></button>
          </div>
        </BarOperator>
      </div>
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleTimeEnded}
      ></audio>
    </PlayerBarWrapper>
  )
}
export default memo(Playbar)
