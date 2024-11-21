export const getSongUrl=(id:number)=>{
  return (
    `https://music.163.com/song/media/outer/url?id=${id}.mp3`
  )
}


export const formatTime=(time:number)=>{
  // 将毫秒转成秒
  const timeSeconds=time/1000
  // 获取分钟和秒钟
  const minute=Math.floor(timeSeconds/60)
  const second=Math.floor(timeSeconds%60)
  // 格式化分钟和秒钟
  const formatMinute=String(minute).padStart(2,'0')
  const formatSecond=String(second).padStart(2,'0')
  return `${formatMinute}:${formatSecond}`
}