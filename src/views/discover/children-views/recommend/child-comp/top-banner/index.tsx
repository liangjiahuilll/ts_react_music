import { useAppSelector } from '@/store'
import React, { memo, useRef, useState } from 'react'
import type { ElementRef } from 'react'
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style'
import { Carousel } from 'antd'
import classNames from 'classnames'

const Topbanner = () => {
  // 从store中获取轮播图数据
  const banners = useAppSelector((state) => state.recommend.banners)
  const [currentindex, setCurrentindex] = useState(0)
  // 获取元素的类型约束
  const bannerref = useRef<ElementRef<typeof Carousel>>()

  function changeleft() {
    bannerref.current?.prev()
  }
  function changeright() {
    bannerref.current?.next()
  }
  // 获取轮播图索引
  function handleafterChange(current: number) {
    setCurrentindex(current)
  }

  let backgroundImg
  if (currentindex >= 0 && banners) {
    backgroundImg = banners[currentindex]?.imageUrl + '?imageView&blur=40x20'
  }

  return (
    <BannerWrapper
      style={{ background: `url('${backgroundImg}') center center / 6000px` }}
    >
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            autoplay
            ref={bannerref}
            afterChange={handleafterChange}
            dots={false}
            autoplaySpeed={10000}
            effect="fade"
          >
            {banners &&
              banners.map((item) => {
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <img
                      className="image"
                      src={item.imageUrl}
                      alt={item.typeTitle}
                    ></img>
                  </div>
                )
              })}
          </Carousel>
          <ul className="dots">
            {banners &&
              banners.map((item, index) => {
                return (
                  <li key={item.imageUrl}>
                    <span
                      className={classNames('item', {
                        active: index === currentindex
                      })}
                    ></span>
                  </li>
                )
              })}
          </ul>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="btn left" onClick={changeleft}></button>
          <button className="btn right" onClick={changeright}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}
export default memo(Topbanner)
