import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchBannerdata,getHotrecommend,getNewAlbum, getrankings,getArtistList } from './store/recommend'
import TopBanner from './child-comp/top-banner'
import { RecommendWrapper } from './style'
import Hotrecomment from './child-comp/hot-recommend'
import NewAlbum from './child-comp/new-album'
import Topranking from './child-comp/top-ranking'
import UserLogin from './child-comp/user-login'
import SettleSinger from './child-comp/settle-singer'
import HotAnchor from './child-comp/hot-anchor'

const Recommend = () => {
  const dispach: any = useDispatch()
  useEffect(() => {
    dispach(fetchBannerdata())
    dispach(getHotrecommend())
    dispach(getNewAlbum())
    dispach(getrankings())
    dispach(getArtistList())
  })
  return (
      <RecommendWrapper>
      <TopBanner></TopBanner>
        <div className='content wrap-v2'>
          <div className='left'>
            <Hotrecomment></Hotrecomment>
            <NewAlbum></NewAlbum>
            <Topranking></Topranking>
          </div>
          <div className='right'>
            <UserLogin></UserLogin>
            <SettleSinger></SettleSinger>
            <HotAnchor></HotAnchor>
          </div>
        </div>
      </RecommendWrapper>
  )
}
export default memo(Recommend)
