import * as Def from 'common/define'

// ↓ 関数のト書きについて知ったタイミングだったので、作成してみた
/**
* ハード情報と画面サイズからリサイズが必要か返す
* @param {number} hard - ハード情報
* @param {number} pre_s - 直前の画面サイズ
* @param {number} cur_s - 最新の画面サイズ
* @returns {boolean} リサイズが必要かどうか
*/
export const judgeNeedResize = (hard: number, pre_s: number, cur_s: number) => {
  switch(hard) {
  case Def.HardType.PC:
    if((pre_s >= Def.SIZE_MIN_PC) && (cur_s >= Def.SIZE_MIN_PC)) return false // PCサイズから更新なし
    else return true
  case Def.HardType.TABLET:
    if(((pre_s <= Def.SIZE_MAX_TABLET) && (pre_s > Def.SIZE_MAX_MOBILE)) &&
       ((cur_s <= Def.SIZE_MAX_TABLET) && (cur_s > Def.SIZE_MAX_MOBILE))) return false // タブレットサイズから更新なし
    else return true
  case Def.HardType.MOBILE:
    if((pre_s <= Def.SIZE_MAX_MOBILE) && (cur_s <= Def.SIZE_MAX_MOBILE)) return false // モバイルサイズから更新なし
    else return true
  default:
    console.warn(`The function has received unexpected arguments.
                  Please review the implementation.
                  hard : [${hard}],
                  pre_s : [${pre_s}]
                  cur_s : [${cur_s}]`)
    return false
  }
}

/**
* 指定されたハードの画面サイズかどうか返す
* @param {number} hard - ハード情報
* @param {number} size - 画面サイズ
* @returns {boolean} 指定ハードサイズかどうか
*/
export const judgeScreenSize = (hard: number, size: number) => {
  switch (hard) {
  case Def.HardType.PC:
    return size >= Def.SIZE_MIN_PC
  case Def.HardType.TABLET:
    return (size <= Def.SIZE_MAX_TABLET) && (size > Def.SIZE_MAX_MOBILE)
  case Def.HardType.MOBILE:
    return size <= Def.SIZE_MAX_MOBILE
  default:
    console.warn(`The function has received unexpected arguments.
                  Please review the implementation.
                  hard : [${hard}],
                  size : [${size}]`)
    return false
  }
}