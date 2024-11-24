import React from 'react'
import { NewalbumlistWarpper } from './style'
import { getImgSize } from '@/utils/format'
const NewAlbumitem = (props) => {
  const { itemData } = props
  return (
    <NewalbumlistWarpper>
      <div className="top">
        <img src={getImgSize(itemData.picUrl, 100)}></img>
        <a href="" className="cover sprite_cover"></a>
      </div>
      <div className="bottom">
        <div className="name">{itemData.name}</div>
        <div className="artist">{itemData.artist.name}</div>
      </div>
    </NewalbumlistWarpper>
  )
}
export default NewAlbumitem
