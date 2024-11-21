import { memo } from 'react'
import { SettleSingerWarpper } from './style'
import AreaHeaderV2 from '@/components/area-header-v2'
import { useAppSelector } from '@/store'
import { getImgSize } from '@/utils/format'

const SettleSinger = () => {
  const singers = useAppSelector((state) => state.recommend.artistlist)
  console.log(singers)
  return (
    <SettleSingerWarpper>
      <AreaHeaderV2
        title="入驻歌手"
        moreText="查看更多&gt;"
        morelink="#/discover/artist"
      ></AreaHeaderV2>
      <div className="artists">
        {singers &&
          singers.map((item) => {
            return (
              <a href="#/discover/artist" key={item.id} className="item">
                <img src={getImgSize(item.picUrl, 80)} alt=""></img>
                <div className="info">
                  <div className="name">{item.name}</div>
                  <div className="alias">{item.alias.join(' ')}</div>
                </div>
              </a>
            )
          })}
      </div>
      <div className='apply-for'>
        <a href='#/'>申请成为网易音乐人</a>
      </div>
    </SettleSingerWarpper>
  )
}
export default memo(SettleSinger)
