import { useAppSelector } from '@/store'
import { RecommendWrapper } from './style'
import AreaHeader from '@/components/area-header'
import SongMenuItem from '@/components/song-menu-item'
import { memo } from 'react'

const Hotrecomment = () => {
  const hotsongs = useAppSelector((state) => state.recommend.hotrecommends)
  console.log(hotsongs)
  return (
    <RecommendWrapper>
      <AreaHeader
        title="热门推荐"
        keyword={['华语', '流行', '摇滚', '民谣', '电子']}
        morelink="/discover/songs"
      ></AreaHeader>
      <div className="recommend-list">
        {hotsongs?.map((item) => {
          console.log(item)
          return <SongMenuItem key={item.id} itemData={item}></SongMenuItem>
        })}
      </div>
    </RecommendWrapper>
  )
}
export default memo(Hotrecomment)
