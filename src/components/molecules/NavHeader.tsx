import { ReactNode } from 'react'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { useWindowWidth } from '@react-hook/window-size'

// styles
import styles from '@/styles/components/NavHeader.module.sass'

// My Components
import HumbergerButton from '@/components/atoms/HumbergerButton'
import MobileNavList from '@/components/atoms/MobileNavList'
import Geometric from '@/components/atoms/Geometric'

// common
import * as Def from '@/common/define'
import { judgeNeedResize, judgeScreenSize } from '@/common/comsystem'

// recoil
import { useRecoilState } from 'recoil'
import { displayWidth } from '@/recoil/common'
import { displayHeight } from '@/recoil/common'

interface Props {
  children: ReactNode
}

const NavHeader = ({children} : Props) => {

  const [cssActive, setCssActive] = useState(false)
  const widthSize = useWindowWidth()
  const [dispWidth, setDispWidth] = useRecoilState(displayWidth)
  const isLayoutPc = useRef(true) // 初期値はPCサイズ

  const [, setDispHeigt] = useRecoilState(displayHeight)
  if(typeof window !== 'undefined') {
    window.addEventListener('resize', () => {
      setDispHeigt(window.innerHeight)
    });
  }

  useEffect(() => {
    let needUpd8 =false
    if(widthSize != dispWidth) {
      needUpd8 = judgeNeedResize(Def.HardType.PC, dispWidth, widthSize)
      setDispWidth(widthSize)
    }
    if(needUpd8) isLayoutPc.current = judgeScreenSize(Def.HardType.PC, widthSize)
    // console.log(isLayoutPc.current) // for debug
  
    // dispSizeなどについての警告が出るが、画面サイズの更新のみではレイアウトを変更しないため無視する
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [widthSize])

  return (
    <>
      {
      (!isLayoutPc.current) ? (
        <>
          <div className='fixed right-5 top-5 z-10'
               onClick={() => setCssActive(!cssActive)}>
            <HumbergerButton isOpen={cssActive}/>
          </div>
          <nav className={`${cssActive ? `${styles['scale-menu-open']}` : `${styles['scale-menu-hidden']}`}`}>
            <div className="absolute w-screen h-screen z-0">
              <Geometric />
            </div>
            <ul className='flex-col text-center'>
              <MobileNavList onClick={() => setCssActive(false)}>
                <Link href="/">Home</Link>
              </MobileNavList>
              <MobileNavList onClick={() => setCssActive(false)}>
                <Link href="/naru/PrskPlayList">prsk</Link>
              </MobileNavList>
              <MobileNavList onClick={() => setCssActive(false)}>
                <Link href="/tempdev/tempdev">TempDev</Link>
              </MobileNavList>
              <MobileNavList onClick={() => setCssActive(false)}>
                <Link href="/naru/profile">Profile</Link>
              </MobileNavList>
              <MobileNavList onClick={() => setCssActive(false)}>
                <Link href="/naru/game">Game</Link>
              </MobileNavList>
              <MobileNavList onClick={() => setCssActive(false)}>
                <Link href="/naru/note">Note</Link>
              </MobileNavList>
              <MobileNavList onClick={() => setCssActive(false)}>
                <Link href="/naru/tool">Tool</Link>
              </MobileNavList>
            </ul>
          </nav>
          <div className='w-full h-screen'>
            {children}
          </div>
        </>
      ) : (
        <>
          <div className={styles['pc-header']}>
            <nav className='flex absolute w-full h-20 justify-between top-0 left-0'>
              <div className='flex ml-5'>
                <li><Link href="/">Home</Link></li>
              </div>
              <div className='flex mr-5'>
                <li><Link href="/naru/PrskPlayList">prsk</Link></li><p>/</p>
                <li><Link href="/tempdev/tempdev">TempDev</Link></li><p>/</p>
                <li><Link href="/naru/profile">Profile</Link></li><p>/</p>
                <li><Link href="/naru/game">Game</Link></li><p>/</p>
                <li><Link href="/naru/note">Note</Link></li><p>/</p>
                <li><Link href="/naru/tool">Tool</Link></li>
              </div>
            </nav>
          </div>
          <div className='page-content'>
            {children}
          </div>
        </>
      )
      }
    </>
  )
}
export default NavHeader

/*
□ Todo List
・ナビゲーションの中のリンクは共通にしてメンテを楽にする



*/