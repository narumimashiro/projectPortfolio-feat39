import { ReactNode } from 'react'
import { useRecoilValue } from 'recoil'

import styles from '@/styles/components/prsk/PrskMusicList.module.sass'

// common
import * as Def from '@/common/define'

// recoil
import { hardType } from '@/recoil/common'
import { prskMusicList } from '@/recoil/prskPlayList'

// MyComponents
import PrskSortBar from '@/components/molecules/prsk/PrskSortBar'

interface PrskMusicListProps {
  children: ReactNode;
}

const PrskMusicList = ({children} : PrskMusicListProps) => {

  const hard = useRecoilValue(hardType)

  return (
    <>
      {
        (hard !== Def.HardType.MOBILE) ? (
          <>
            <PrskSortBar />
            <div className={styles['scroll-box']}>
              { children }
            </div>
          </>
        ) : (
          <></>
        )
      }
    </>
  )
}
export default PrskMusicList