import styled from 'styled-components'

export const FocusWarpper = styled.div`
  height: 700px;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;

  .main {
    width: 902px;
    height: 414px;
    margin: 0 auto 0;
    padding-top: 70px;
    background-position: 0 70px;

    .btn {
      display: block;
      width: 157px;
      height: 48px;
      margin: 260px 0 0 535px;
      text-indent: -9999px;
      // background-color:red;
      &:hover {
        background-position: 0 -430px;
        cursor: pointer;
      }
    }
  }
`
