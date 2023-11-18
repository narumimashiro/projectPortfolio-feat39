import { useState } from 'react'
import styles from '@/styles/components/profile/CreationCard.module.sass'

// common
import { HardType } from '@/common/define'

// recoil
import { useRecoilValue } from 'recoil'
import { hardType } from '@/recoil/common'

// MaterialUI
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// My Components
import { ContentThumbnail, ContentTitle, ContentLink, ContentDescription } from './PartsOfCreationCard'

// constant
import { CreationInfo } from '@/components/atoms/profile/creations'

type Props = {
  creation: CreationInfo,
  placement: string,
}
const CreationCard = (props: Props) => {
  const { title, imgSrc, description, url } = props.creation
  const isLeft = props.placement === 'left'

  const hard = useRecoilValue(hardType)
  const [open, setOpen] = useState(true)

  const handlerChange = () => {
    setOpen(!open)
  }

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
              <Card className={`content-center ${styles['creation-area-portrait']}`}>
                <Accordion
                  className={open ? '' : `${styles.accordion}`}
                  onChange={handlerChange}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                  >
                    <ContentTitle title={title} />
                  </AccordionSummary>
                  <AccordionDetails>
                    <ContentLink url={url} />
                    <ContentDescription description={description} />
                    <ContentThumbnail
                      title={title}
                      imgSrc={imgSrc}
                    />
                  </AccordionDetails>
                </Accordion>
                {
                  open && (
                    <ContentThumbnail
                      title={title}
                      imgSrc={imgSrc}
                    />
                  )
                }
              </Card>
          )
        }
      </div>
    </>
  )
}
export default CreationCard