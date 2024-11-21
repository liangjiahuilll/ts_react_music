import React, { ElementRef, memo, useRef } from 'react'
import { NewAlbumWarpper } from './style'
import AreaHeader from '@/components/area-header'
import { Carousel } from 'antd'
import { useAppSelector } from '@/store'
import NewAlbumitem from '@/components/new-album-item'
const NewAlbum = () => {
  const bannerref = useRef<ElementRef<typeof Carousel>>()
  const newalbum = useAppSelector((state) => state.recommend.newalbum)
  function handlePrevClick() {
    bannerref.current.prev()
  }
  function handleNextClick() {
    bannerref.current.next()
  }
  return (
    <NewAlbumWarpper>
      <AreaHeader title="新碟上架"> </AreaHeader>
      <div className="content">
        <button
          className="sprite_02 arrow arrow-left"
          onClick={handlePrevClick}
        ></button>
        <div className="banner">
          <Carousel dots={false} speed={1500} ref={bannerref}>
            {[0,1].map((item) => {
              return (
                <div key={item}>
                  <div className="album-list">
                    {newalbum?.slice(item * 5, (item + 1) * 5).map((album) => {
                      return (
                        <NewAlbumitem
                          key={album.id}
                          itemData={album}
                        ></NewAlbumitem>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </Carousel>
        </div>
        <button
          className="sprite_02 arrow arrow-right"
          onClick={handleNextClick}
        ></button>
      </div>
    </NewAlbumWarpper>
  )
}
export default memo(NewAlbum)
