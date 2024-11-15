import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchBannerdata } from './store/recommend'
import TopBanner from './child-comp/top-banner'

const Recommend = () => {
  const dispach: any = useDispatch()
  useEffect(() => {
    dispach(fetchBannerdata())
  }, [])
  return (
    <div>
      <TopBanner></TopBanner>
    </div>
  )
}
export default memo(Recommend)
