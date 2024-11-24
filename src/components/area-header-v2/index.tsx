import { memo } from 'react'
import { AreaHeaderV2Warpper } from './style'

const AreaHeaderV2 = (props) => {
  const { title = '默认标题', moreText, morelink } = props
  return (
    <AreaHeaderV2Warpper>
      <h3 className="title">{title}</h3>
      {moreText && morelink && <a href={morelink}>{moreText}</a>}
    </AreaHeaderV2Warpper>
  )
}
export default memo(AreaHeaderV2)
