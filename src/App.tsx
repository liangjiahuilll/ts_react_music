import { useRoutes } from 'react-router-dom'
import routers from './router'
import React, { Suspense, useEffect } from 'react'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import PlayerBar from './views/player/player-bar/index'
import { useDispatch } from 'react-redux'
import { getCurrentSong } from './views/player/store/player'
import Login from './views/login'
import ReactDOM from 'react-dom'

function App() {
  const dispatch: any = useDispatch()
  const backdrop = document.getElementById('backdrop')
  useEffect(() => {
    dispatch(getCurrentSong(2638631174))
  }, [])
  return (
    <div className="App">
      <AppHeader></AppHeader>
      <Suspense fallback="">
        <div className="main">{useRoutes(routers)}</div>
      </Suspense>
      <AppFooter></AppFooter>
      <PlayerBar></PlayerBar>
      {ReactDOM.createPortal(<Login></Login>, backdrop)}
    </div>
  )
}

export default App
