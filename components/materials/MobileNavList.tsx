import { ReactNode } from 'react'
import styles from '~/components/MobileNavList.module.sass'

interface Props {
  children: ReactNode
  onClick: () => void
}

const MobileNavList = (props : Props) => {

  return (
    <>
    <div className='flex justify-center items-center'>
      <p className={styles.line}/>
      <li className={styles['nav-contents']}
          onClick={props.onClick}>
        {props.children}
      </li>
      <p className={styles.line}/>
    </div>
    </>
  )
}
export default MobileNavList