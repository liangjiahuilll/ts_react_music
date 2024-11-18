import React from "react"
import { TopRankingWarpper } from "./styled"
import AreaHeader from "@/components/area-header"
import { useAppSelector } from "@/store"

const Topranking=()=>{
  const rankings=useAppSelector(state=>state.recommend.rankings)
  return (
    <TopRankingWarpper>
      <AreaHeader title='榜单' morelink='/discover/ranking'></AreaHeader>
      <div className="content">
        {
          rankings.map(item=>{
            return <div></div>
          })
        }
      </div>
    </TopRankingWarpper>
  )
}

export default Topranking