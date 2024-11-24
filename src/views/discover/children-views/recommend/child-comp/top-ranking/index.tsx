import React, { memo } from 'react'
import { TopRankingWarpper } from './styled'
import AreaHeader from '@/components/area-header'
import { useAppSelector } from '@/store'
import TopRankingItem from '../top-ranking-item'

const Topranking = () => {
  const rankings = useAppSelector((state) => state.recommend.rankings)

  return (
    <TopRankingWarpper>
      <AreaHeader title="榜单" morelink="/discover/ranking"></AreaHeader>
      <div className="content">
        {rankings.map((item) => {
          return <TopRankingItem itemData={item} key={item.id}></TopRankingItem>
        })}
      </div>
    </TopRankingWarpper>
  )
}

export default memo(Topranking)
