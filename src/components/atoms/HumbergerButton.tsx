import styles from '@/styles/components/Humberger.module.sass'

interface Props {
  isOpen: boolean
}

const HumbergerButton = (props: Props) => {
  
  return (
    <>
      <div className={`${styles['humberger-btn']} ${props.isOpen ? `${styles['humberger-open']}` : ''}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  )
}
export default HumbergerButton