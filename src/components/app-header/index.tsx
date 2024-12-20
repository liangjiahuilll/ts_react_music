import React, { memo } from 'react'
import { HeaderLeft, HeaderRight, HeaderWrapper } from './style'
import Lists from '@/assets/data/header_titles.json'
import { NavLink } from 'react-router-dom'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { changeIsUser, changeShowLogin } from '@/views/login/store'
import { useAppSelector } from '@/store'

const Appheader = () => {
  const IsUser = useAppSelector((state) => state.login.isUser)
  const dispatch = useDispatch()
  const changeLogin = () => {
    dispatch(changeShowLogin(true))
  }
  const outLogin = () => {
    localStorage.removeItem('user')
    dispatch(changeIsUser(false))
  }
  function showitems(item: any) {
    if (item.type === 'path') {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="icon sprite_01"></i>
        </NavLink>
      )
    } else {
      return (
        <a href={item.link} target="_blank" rel="noreferrer">
          {item.title}
        </a>
      )
    }
  }

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a className="logo sprite_01" href="/">
            网易云音乐
          </a>
          <div className="title-list">
            {Lists.map((item) => {
              return (
                <div className="item" key={item.title}>
                  {showitems(item)}
                </div>
              )
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            className="search"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined></SearchOutlined>}
          ></Input>
          <span className="center">创作者中心</span>
          {IsUser ? (
            <span className="login" onClick={outLogin}>
              退出
            </span>
          ) : (
            <span className="login" onClick={changeLogin}>
              登录
            </span>
          )}
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
}
export default memo(Appheader)
