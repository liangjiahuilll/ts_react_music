import React, { memo } from 'react'
import { FocusWarpper } from './style'

const Focus = () => {
  return <FocusWarpper className='wrap-v2'>
    <div className='main sprite_friends'>
      <div className='btn sprite_friends'></div>
    </div>
  </FocusWarpper>
}
export default memo(Focus)
