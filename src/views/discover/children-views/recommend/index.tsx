import hyRequest from "@/service";
import React, { memo, useEffect } from "react";
import type { FC, ReactNode } from 'react'
interface Iprop {
  children?:ReactNode
}
const Recommend:FC<Iprop>=()=>{
  useEffect(()=>{
    hyRequest.get({
      url:'/banner'
    }).then(res=>{
      console.log(res)
    })
  },[])
  return (
    <div></div>
  )
}
export default memo(Recommend)