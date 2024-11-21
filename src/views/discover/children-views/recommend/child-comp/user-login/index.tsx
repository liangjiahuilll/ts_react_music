import { memo } from 'react'
import { UserLoginWarpper } from './style'

const UserLogin = () => {
  return (
    <UserLoginWarpper className="sprite_02">
      <p className='desc'>登录网易云音乐，可以享受无限收藏乐趣，并且无限同步到手机</p>
      <a href="#/login" className="sprite_02">
        用户登录
      </a>
    </UserLoginWarpper>
  )
}
export default memo(UserLogin)
