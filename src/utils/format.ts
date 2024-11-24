export function formatCount(count) {
  if (count > 100000) {
    return Math.floor(count / 10000) + '万'
  } else {
    return count
  }
}

export function getImgSize(imgUrl, width, height = width) {
  return imgUrl + `?param=${width}x${height}`
}
