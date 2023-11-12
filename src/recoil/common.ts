import { atom, selector } from 'recoil'
// import * as Common from './types'
import * as Def from '@/common/define'

export const displayWidth = atom<number>({
  key: 'displaywidth',
  default: Def.SIZE_MIN_PC
})

export const displayHeight = atom<number>({
  key: 'displayheight',
  default: (typeof window !== 'undefined') ? window.innerHeight : 1080
})

export const hardType = selector({
  key: 'hardtype',
  get: ({ get }) => {
    const dispWidth = get(displayWidth)
    if(dispWidth >= Def.SIZE_MIN_PC) return Def.HardType.PC
    else if(dispWidth < Def.SIZE_MAX_MOBILE) return Def.HardType.MOBILE
    else return Def.HardType.TABLET
  }
})