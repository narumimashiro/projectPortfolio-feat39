
import styles from '@/styles/components/ModalYoutube.module.sass'

interface Props {
  isOpen: boolean,
  onClose: () => void,
  url: string
}

const ModalYoutube = (props: Props) => {

  if(!props.isOpen) return null

  return (
    <div className={styles.modal}>
      <div className={styles['modal-content']}>
        <iframe
          width="840"
          height="472"
          src={`https://www.youtube.com/embed/${props.url}&autoplay=1`}
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          id='ytplayer'
        ></iframe>
        <button className='ml-96 right-0'
                onClick={props.onClose}>Close</button>
      </div>
    </div>

  )
}
export default ModalYoutube

