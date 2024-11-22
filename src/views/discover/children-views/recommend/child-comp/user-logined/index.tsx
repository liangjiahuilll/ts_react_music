import { memo } from 'react'
import { useDispatch } from 'react-redux'
import { changeIsUser } from '@/views/login/store'
import { LoginedWarpper } from './style'

const UserLogined = () => {
  const dispatch = useDispatch()
  const user = localStorage.getItem('user')
  const outLogin = () => {
    localStorage.removeItem('user')
    dispatch(changeIsUser(false))
  }
  return (
    <LoginedWarpper className="sprite_02">
      <div className="user">{user}</div>
      <button onClick={outLogin}>退出登录</button>
    </LoginedWarpper>
  )
}
export default memo(UserLogined)
