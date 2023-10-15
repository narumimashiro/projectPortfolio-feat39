import { atom, selector } from 'recoil'
import { PrksMusicInfo } from '@/common/deftype'
import * as Def from '@/common/define'

export const prskMusicList = atom<PrksMusicInfo[]>({
  key: 'prskmusiclist',
  default: []
})

export const prskUnitSelected = atom<string>({
  key: 'selectedunit',
  default: Def.allArtist
})

export const currentList = selector({
  key: 'currentlist',
  get: ({ get }) => {
    const musicList = get(prskMusicList)
    const selectedUnit = get(prskUnitSelected)
    let resData: PrksMusicInfo[] = []

    // ALLならすべて返す
    if(selectedUnit === Def.allArtist) return musicList

    for(let i = 0; i < musicList.length; ++i) {
      if(musicList[i].id === selectedUnit) {
        resData.push(musicList[i])
      }
    }
    return resData
  }
})