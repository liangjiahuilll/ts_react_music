import { memo } from 'react'
import { Button, Form, Input } from 'antd'
import { LoginWarpper } from './style'
import { useAppSelector } from '@/store'
import { useDispatch } from 'react-redux'
import { changeIsUser, changeShowLogin } from './store'

const Login = () => {
  const isShow = useAppSelector((state) => state.login.isLogin)
  const dispatch: any = useDispatch()
  const closeLogin = () => {
    dispatch(changeShowLogin(false))
    console.log(localStorage.getItem('user') + 'name')
  }

  if (localStorage.getItem('user')) {
    dispatch(changeIsUser(true))
  }
  const handleSubmit = (val) => {
    console.log(123)
    if (val.username === 'liang') {
      localStorage.setItem('user', '123')
      dispatch(changeIsUser(true))
    }
  }

  return (
    isShow && (
      <LoginWarpper>
        <div className="logincard">
          <div className="title">
            <span>用户登录</span>
            <span className="x" onClick={closeLogin}>
              x
            </span>
          </div>
          <div className="datas">
            <Form onFinish={handleSubmit}>
              <Form.Item name={'username'}>
                <Input placeholder="请输入用户名" className="input"></Input>
              </Form.Item>
              <Form.Item name={'password'}>
                <Input placeholder="请输入密码" className="input"></Input>
              </Form.Item>
              <Form.Item>
                <Button htmlType="submit" className="btn" onClick={closeLogin}>
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className="bottom">
            <div className="other">其他登录方式</div>
          </div>
        </div>
      </LoginWarpper>
    )
  )
}
export default memo(Login)
