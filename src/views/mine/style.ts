import styled from 'styled-components'

export const MineWarpper = styled.div`
  height: 700px;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;

  > .main {
    width: 807px;
    height: 268px;
    margin: 0 auto 0;
    padding-top: 104px;
    background-position: 0 104px;

    .btn {
      display: block;
      width: 167px;
      height: 45px;
      margin: 202px 0 0 482px;
      text-indent: -9999px;
      &:hover {
        background-position: 0 -278px;
        cursor: pointer;
      }
    }
  }
`
