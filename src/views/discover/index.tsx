import React, { memo, Suspense }  from "react";
import type{ FC, ReactNode } from 'react'
import { Outlet } from "react-router-dom";
interface Iprop {
  children?:ReactNode
}
const Discover:FC<Iprop> = () =>{
  return (
    <div>
      <Suspense>
        <Outlet></Outlet>
      </Suspense>
    </div>
  )
}
export default memo(Discover)