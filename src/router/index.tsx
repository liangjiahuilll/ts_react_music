import React, { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'

//路由懒加载
const Discover = lazy(() => import('@/views/discover'))
const Mine = lazy(() => import('@/views/mine'))
const Download = lazy(() => import('@/views/downlode'))
const Focus = lazy(() => import('@/views/focus'))
const Album = lazy(() => import('@/views/discover/children-views/album'))
const Artist = lazy(() => import('@/views/discover/children-views/artist'))
const Djradio = lazy(() => import('@/views/discover/children-views/djradio'))
const Ranking = lazy(() => import('@/views/discover/children-views/ranking'))
const Recommend = lazy(
  () => import('@/views/discover/children-views/recommend')
)
const Songs = lazy(() => import('@/views/discover/children-views/songs'))

const routers: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to={'/discover'}></Navigate>
  },
  {
    path: '/discover',
    element: <Discover></Discover>,
    children: [
      {
        path: '/discover',
        element: <Navigate to={'/discover/recommend'}></Navigate>
      },
      {
        path: '/discover/album',
        element: <Album></Album>
      },
      {
        path: '/discover/artist',
        element: <Artist></Artist>
      },
      {
        path: '/discover/djradio',
        element: <Djradio></Djradio>
      },
      {
        path: '/discover/ranking',
        element: <Ranking></Ranking>
      },
      {
        path: '/discover/recommend',
        element: <Recommend></Recommend>
      },
      {
        path: '/discover/songs',
        element: <Songs></Songs>
      }
    ]
  },
  {
    path: '/mine',
    element: <Mine></Mine>
  },
  {
    path: '/download',
    element: <Download></Download>
  },
  {
    path: '/focus',
    element: <Focus></Focus>
  }
]

export default routers
