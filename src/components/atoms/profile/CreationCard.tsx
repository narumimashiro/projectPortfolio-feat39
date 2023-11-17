import Link from 'next/link'
import styles from '@/styles/components/profile/CreationCard.module.sass'

// common
import { HardType } from '@/common/define'

// recoil
import { useRecoilValue } from 'recoil'
import { hardType } from '@/recoil/common'

// MaterialUI
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

// constant
import { CreationInfo } from '@/components/atoms/profile/creations'
const TEXT_LINK_TO_SITE = 'Visit the website'

type ContentThumbnail = {
  title: string,
  imgSrc: string
}
const ContentThumbnail = ({title,  imgSrc}: ContentThumbnail) => {
  return (
    <CardMedia
      className={styles.thumbnail}
      component='img'
      alt={title}
      image={`/images/creation/${imgSrc}`}
    />
  )
}

const ContentTitle = ({title}: {title: string}) => {
  return (
    <Typography
      gutterBottom variant='h5'
      // component='div'
      className='double-underline'
    >
      {title}
    </Typography>
  )
}

const ContentLink = ({ url }: { url: string}) => {
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

const ContentDescription = ({description} : {description: string}) => {
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

type Props = {
  creation: CreationInfo,
  placement: string
}
const CreationCard = (props: Props) => {
  const { title, imgSrc, description, url } = props.creation
  const isLeft = props.placement === 'left'

  const hard = useRecoilValue(hardType)

  return (
    <>
      <div className={styles.container}>
        {
          hard === HardType.PC ? (
            isLeft ? (
              <>
                <Card
                  elevation={12}
                  className={`content-center ${styles['creation-area']}`}
                >
                  <ContentThumbnail
                    title={title}
                    imgSrc={imgSrc}
                  />
                  <CardContent
                    className={styles['creation-info']}
                  >
                    <ContentTitle title={title} />
                    <ContentLink url={url} />
                    <ContentDescription description={description} />
                  </CardContent>
                </Card>
              </>
            ) : (
              <>
                  <Card
                    elevation={12}
                  className={`content-center ${styles['creation-area']}`}
                >
                  <CardContent
                    className={styles['creation-info']}
                  >
                    <ContentTitle title={title} />
                    <ContentLink url={url} />
                    <ContentDescription description={description} />
                  </CardContent> 
                  <ContentThumbnail
                    title={title}
                    imgSrc={imgSrc}
                  />
                </Card>
              </>
            )
          ) : (
              <>
              </>
          )
        }
      </div>
    </>
  )
}
export default CreationCard