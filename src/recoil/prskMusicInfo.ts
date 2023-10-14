import { atom } from 'recoil'
import { PrksMusicInfo } from '@/common/deftype'

export const prskMusicList = atom<Array<PrksMusicInfo>>({
  key: 'prskmusiclist',
  default: []
})