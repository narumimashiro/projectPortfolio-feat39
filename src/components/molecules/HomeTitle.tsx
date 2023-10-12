import { memo } from 'react'

import styles from '@/styles/components/HomeTitle.module.sass'

// common
import * as Def from '@/common/define'

// recoil
import { useRecoilValue } from 'recoil'
import { hardType } from '@/recoil/common'

const TextPc = memo((props : {isPc: boolean}) => {
  return (
    <div>
      {
      (props.isPc) ? (
        <>
          Welcome to<br/>
          <span className='ml-32'>My Site</span>
        </>
      ) : (
        <>
          Welcome<br/>
          to<br/>
          My Site
        </>
      )
      }
    </div>
  )
})
TextPc.displayName = 'TextPc'

const HomeTitle = () => {

  const hard = useRecoilValue(hardType)

  return (
    <div className={`${styles.bgextend} ${styles.bgSlideLtoR}`}>
      <span className={`${(hard === Def.HardType.MOBILE) ? styles.textinfo4mobible
                                                         : styles.textinfo} 
                        ${styles.bgappear}`}>
        <TextPc isPc={hard === Def.HardType.PC} />
      </span>
    </div>
  )
}
export default HomeTitle