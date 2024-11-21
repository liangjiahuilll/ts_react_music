import React, { memo } from 'react'
import { MineWarpper } from './style'

const Mine = () => {
  return <MineWarpper className='wrap-v2'>
    <div className='main sprite_mine'>
      <div className='btn sprite_mine'></div>
    </div>
  </MineWarpper>
}
export default memo(Mine)
