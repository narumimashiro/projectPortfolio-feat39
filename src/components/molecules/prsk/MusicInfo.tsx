// common
import { PrksMusicInfo } from '@/common/deftype'

const MusicInfo = ({ info }: {info: PrksMusicInfo}) => {

  return (
    <>
      <div>{info.title}</div>
      <a href={info.sekai.url} target='_blank'><p>to Youtube ver Sekai</p></a>
      <div>{info.sekai.artist}</div>
      <a href={info.original.url} target='_blank'><p>to Youtube ver Original</p></a>
      <div>{info.original.artist}</div>
    </>
  )
}
export default MusicInfo