import { memo } from 'react'
import { ToprankingItemWarpper } from './style'
import { getImgSize } from '@/utils/format'
import { useDispatch } from 'react-redux'
import { getCurrentSong } from '@/views/player/store/player'

const ToprankingItem = (props) => {
  const { itemData } = props
  const { tracks = [] } = itemData
  // const currentSong=useAppSelector(state=>state.playlist.currentsong)
  const dispatch: any = useDispatch()
  const handleplayClick = (id: number) => {
    dispatch(getCurrentSong(id))
  }

  return (
    <ToprankingItemWarpper>
      <div className="header">
        <div className="image">
          <img src={getImgSize(itemData.coverImgUrl, 80)} alt="" />
          <a href="" className="sprite_cover"></a>
        </div>
        <div className="info">
          <div className="name">{itemData.name}</div>
          <div>
            <button className="sprite_02 btn play"></button>
            <button className="sprite_02 btn favor"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {tracks.slice(0, 10).map((item: any, index: any) => {
          return (
            <div className="item" key={item.id}>
              <div className="index">{index + 1}</div>
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="operator">
                  <button
                    className="btn sprite_02 play"
                    onClick={() => {
                      handleplayClick(item.id)
                    }}
                  ></button>
                  <button className="btn sprite_icon2 add"></button>
                  <button className="btn sprite_02 favor"></button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="footer">查看全部 &gt;</div>
    </ToprankingItemWarpper>
  )
}
export default memo(ToprankingItem)
