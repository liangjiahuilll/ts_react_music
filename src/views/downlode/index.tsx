import React, { memo } from "react";
import type { ReactNode,FC } from "react";
interface Iprop {
  children?:ReactNode
}
const Download:FC<Iprop>=()=>{
  return (
    <div></div>
  )
}
export default memo(Download)