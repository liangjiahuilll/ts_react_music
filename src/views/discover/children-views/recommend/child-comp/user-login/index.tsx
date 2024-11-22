import { memo } from 'react'
import { UserLoginWarpper } from './style'
import { useDispatch } from 'react-redux'
import { changeShowLogin } from '@/views/login/store'

const UserLogin = () => {
  const dispatch=useDispatch()
  const handlelogin=()=>{
    dispatch(changeShowLogin(true))
  }
  return (
    <UserLoginWarpper className="sprite_02">
      <p className='desc'>登录网易云音乐，可以享受无限收藏乐趣，并且无限同步到手机</p>
      <a className="sprite_02" onClick={handlelogin}>
        用户登录
      </a>
    </UserLoginWarpper>
  )
}
export default memo(UserLogin)
