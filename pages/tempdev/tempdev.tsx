import styles from './Temp.module.scss'
import { useState } from 'react'
import Link from 'next/link'


// 開発中にテキトーに表示させたいときに使うところ
import Geometric from '@/materials/Geometric'
import MobileNavList from '@/materials/MobileNavList'
import MySnsLink from '@/materials/MySnsLink'
import MyProfFooter from '@/ui_components/MyProfFooter'

const TempDev = () => {

  const [active, setActive] = useState(false)

  const span1 = {
    top: '18px',
    left: '18px',
    transform: 'translateY(6px) rotate(-135deg)',
    width: '30%'
  }

  const s1 = 'w-1/3 l-4 pt-3'

  return (
    <>
      <h1>開発中にテキトーに表示させて確認する場所</h1>
      <MyProfFooter/>
    </>
  )
}

export default  TempDev