import { useState, useEffect } from 'react'

// My Components
import MySnsLink from '@/components/materials/MySnsLink'

// common
import * as Def from 'common/define'

// recoil
import { useRecoilValue } from 'recoil'
import { hardType } from 'recoil/common'

const MyProfFooter = () => {

  const [isMobile, setMobile] = useState(false)
  const hard = useRecoilValue(hardType)

  useEffect(() => {
    setMobile(hard === Def.HardType.MOBILE)
  }, [hard])

  return (
    <>
      <div className='fixed flex justify-center w-full h-24 left-0 bottom-0'>
        <div className='grid grid-cols-4 items-center w-1/3 h-full'>
          <div className='flex justify-center'>
            <MySnsLink service={Def.SnsAccount.Pixiv} isMobile={isMobile}/>
          </div>
          <div className='flex justify-center'>
            <MySnsLink service={Def.SnsAccount.Github} isMobile={isMobile}/>
          </div>
          <div className='flex justify-center'>
            <MySnsLink service={Def.SnsAccount.Instagram} isMobile={isMobile}/>
          </div>
          <div className='flex justify-center'>
            <MySnsLink service={Def.SnsAccount.X_Twitter} isMobile={isMobile}/>
          </div>
        </div>
      </div>
    </>
  )
}
export default MyProfFooter