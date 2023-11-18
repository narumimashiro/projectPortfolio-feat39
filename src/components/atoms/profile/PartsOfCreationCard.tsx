/**
 * Creation CardのParts
 */
import Link from 'next/link'
import styles from '@/styles/components/profile/CreationCard.module.sass'

// MaterialUI
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

// constant
const TEXT_LINK_TO_SITE = 'Visit the website'

type ContentThumbnail = {
  title: string,
  imgSrc: string
}
export const ContentThumbnail = ({title,  imgSrc}: ContentThumbnail) => {
  return (
    <CardMedia
      className={styles.thumbnail}
      component='img'
      alt={title}
      image={`/images/creation/${imgSrc}`}
    />
  )
}

export const ContentTitle = ({ title }: { title: string }) => {
  return (
    <Typography
      gutterBottom variant='h5'
      component='div'
      className='double-underline'
    >
      {title}
    </Typography>
  )
}

export const ContentLink = ({ url }: { url: string}) => {
  return (
    <div className={styles['link-wrap']}>
      <Link
        href={url}
        target='_blink'
      >
        {TEXT_LINK_TO_SITE}
      </Link>
    </div>
  )
}

export const ContentDescription = ({ description } : { description: string }) => {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      className={styles['description-area']}
    >
      {description}
    </Typography>
  )
}