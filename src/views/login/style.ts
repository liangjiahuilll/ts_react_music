import styled from 'styled-components'

export const LoginWarpper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 200000;

  .logincard {
    height: 410px;
    background: #fff;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -55%);
    width: 530px;
    border-radius: 4px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.8);
    border: none;
  }

  .title {
    height: 38px;
    line-height: 38px;
    border-radius: 4px 4px 0 0;
    z-index: 10;
    width: 100%;
    padding: 0 45px 0 18px;
    font-weight: bold;
    font-size: 14px;
    background-color: #2d2d2d;
    box-sizing: border-box;
    color: aliceblue;

    .x {
      position: absolute;
      right: 20px;
      color: #5e5c5c;
      font-size: 18px;
      cursor: pointer;
    }
  }

  .bottom {
    position: absolute;
    bottom: 0;
    padding: 0 19px;
    height: 48px;
    width: 100%;
    box-sizing: border-box;
    border-top: 1px solid #c6c6c6;
    border-radius: 0 0 4px 4px;
    line-height: 48px;
    background-color: #f7f7f7;
  }

  .other:hover {
    color: rgb(120, 180, 180);
    cursor: pointer;
  }

  .datas {
    width: 320px;
    height: 152px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -60%);
  }

  .input {
    height: 36px;
    border-radius: 20px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
  }

  .btn {
    background-color: #ff3a3a;
    width: 100%;
    height: 36px;
    border-radius: 20px;
    font-size: 14px;
    line-height: 36px;
    color: white;

    &:hover {
      color: rgb(104, 109, 109);
      cursor: pointer;
    }
  }
`
