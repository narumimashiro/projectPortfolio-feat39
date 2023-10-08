import Image from 'next/image'
import { memo } from 'react'

// common
import * as Def from 'common/define'

const iconSmall = 36
const iconLarge = 48

interface Props {
  service: number,
  isMobile: boolean
}

const MySnsLink = memo((props : Props) => {

  const getStyle = () => {
    const style = {
      width: (props.isMobile) ? `${iconSmall}px` : `${iconLarge}px`,
      height: (props.isMobile) ? `${iconSmall}px` : `${iconLarge}px`
    }
    return style
  }

  return (
    <>
      <div style={getStyle()}>
        <a className='w-full h-full'
           href={Def.mySnsAccount[props.service].url}
           target='_blank'
           rel='noopener noreferrer'>
          <Image src={Def.mySnsAccount[props.service].img}
                 alt={Def.mySnsAccount[props.service].name}
                 width={(props.isMobile ? iconSmall : iconLarge)}
                 height={(props.isMobile ? iconSmall : iconLarge)}
                 priority={true}
          />
        </a>
      </div>
    </>
  )
})
MySnsLink.displayName = 'MySnsLink'
export default MySnsLink