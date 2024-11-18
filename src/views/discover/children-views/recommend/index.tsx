import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchBannerdata,getHotrecommend,getNewAlbum, getrankings } from './store/recommend'
import TopBanner from './child-comp/top-banner'
import { RecommendWrapper } from './style'
import Hotrecomment from './child-comp/hot-recommend'
import NewAlbum from './child-comp/new-album'
import Topranking from './child-comp/top-ranking'

const Recommend = () => {
  const dispach: any = useDispatch()
  useEffect(() => {
    dispach(fetchBannerdata())
    dispach(getHotrecommend())
    dispach(getNewAlbum())
    dispach(getrankings())
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
          <div className='right'></div>
        </div>
      </RecommendWrapper>
  )
}
export default memo(Recommend)
