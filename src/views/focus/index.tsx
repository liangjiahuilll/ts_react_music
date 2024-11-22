import React, { memo } from 'react'
import { FocusWarpper } from './style'
import { useDispatch } from 'react-redux'
import { changeShowLogin } from '../login/store'

const Focus = () => {
  const dispatch=useDispatch()
  const handleLogin=()=>{
    dispatch(changeShowLogin(true))
  }
  return <FocusWarpper className='wrap-v2'>
    <div className='main sprite_friends'>
      <div className='btn sprite_friends' onClick={handleLogin}></div>
    </div>
  </FocusWarpper>
}
export default memo(Focus)
