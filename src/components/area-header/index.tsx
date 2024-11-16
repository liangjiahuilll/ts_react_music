import { memo } from 'react'
import { AreaHeaderWarpper } from './style'
import { Link } from 'react-router-dom'

const AreaHeader = (props) => {
  const {
    title = '默认标题',
    keyword = [],
    moreText = '更多',
    morelink = '/'
  } = props
  return (
    <AreaHeaderWarpper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keywords">
          {keyword.map((item) => {
            return (
              <div className="item" key={item}>
                <span className="link">{item}</span>
                <span className="divider">|</span>
              </div>
            )
          })}
        </div>
      </div>
      <div className='right'>
        <Link className='more' to={morelink}>
        {moreText}
        </Link>
        <i className='sprite_02 icon'></i>
      </div>
    </AreaHeaderWarpper>
  )
}

export default memo(AreaHeader)
