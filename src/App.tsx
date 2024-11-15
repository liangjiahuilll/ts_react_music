import { useRoutes } from 'react-router-dom'
import routers from './router'
import React, { Suspense } from 'react'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'

function App() {
  return (
    <div className="App">
      <AppHeader></AppHeader>
      <Suspense>
        <div>{useRoutes(routers)}</div>
      </Suspense>
      <AppFooter></AppFooter>
    </div>
  )
}

export default App
