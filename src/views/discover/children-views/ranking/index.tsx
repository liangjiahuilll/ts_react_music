import React, { memo } from "react";
import type { FC, ReactNode } from 'react'
interface Iprop {
  children?:ReactNode
}
const Ranking:FC<Iprop>=()=>{
  return (
    <div></div>
  )
}
export default memo(Ranking)