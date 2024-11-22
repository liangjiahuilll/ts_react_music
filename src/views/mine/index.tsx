import React, { memo } from 'react'
import { MineWarpper } from './style'
import { useDispatch } from 'react-redux'
import { changeShowLogin } from '../login/store'

const Mine = () => {
  const dispatch = useDispatch()
  const handleLogin = () => {
    dispatch(changeShowLogin(true))
  }
  return (
    <MineWarpper className="wrap-v2">
      <div className="main sprite_mine">
        <div className="btn sprite_mine" onClick={handleLogin}></div>
      </div>
    </MineWarpper>
  )
}
export default memo(Mine)
