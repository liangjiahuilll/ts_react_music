import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchBannerdata,getHotrecommend } from './store/recommend'
import TopBanner from './child-comp/top-banner'
import { RecommendWrapper } from './style'
import Hotrecomment from './child-comp/hot-recommend'

const Recommend = () => {
  const dispach: any = useDispatch()
  useEffect(() => {
    dispach(fetchBannerdata())
    dispach(getHotrecommend())
  })
  return (
      <RecommendWrapper>
      <TopBanner></TopBanner>
        <div className='content wrap-v2'>
          <div className='left'>
            <Hotrecomment></Hotrecomment>
          </div>
          <div className='right'></div>
        </div>
      </RecommendWrapper>
  )
}
export default memo(Recommend)
