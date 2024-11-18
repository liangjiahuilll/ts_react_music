import { memo } from "react"
import { MenuItemWarpper } from "./style"
import { formatCount, getImgSize } from "@/utils/format"

const SongMenuItem=(props)=>{
  const {itemData} = props
  console.log(itemData)
  return (
    <MenuItemWarpper>
    <div className="top">
    {itemData&&<img src={getImgSize(itemData.picUrl,140)} alt=""></img>}
      <div className="cover sprite_cover">
        <div className="info sprite_cover">
          <span>
            <i className="sprite_icon headset"></i>
            {itemData&&<span className="count">{formatCount(itemData.playCount)}</span>}
          </span>
          <i className="sprite_icon play"></i>
        </div>
      </div>
    </div>
    {itemData&&<div className="bottom">{itemData.name}</div>}
    </MenuItemWarpper>
  )
}

export default memo(SongMenuItem)