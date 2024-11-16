import React, { memo, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './children-components/nav-bar'

const Discover = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div>
        <Suspense>
          <Outlet></Outlet>
        </Suspense>
      </div>
    </div>
  )
}
export default memo(Discover)
