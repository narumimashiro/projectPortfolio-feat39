import styles from '@/styles/components/profile/MyProfile.module.sass'

// common
import { HardType } from '@/common/define'
import { MyBaseProfile } from '@/common/deftype'

// recoil
import { useRecoilValue } from 'recoil'
import { hardType } from '@/recoil/common'

// MaterialUI
import { Avatar } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

// constant
const iconStyle = { width: 125, height: 125 }
const FAVES = '好きなこと'
const INTRODUCE = '自己紹介'

type IAM = {
  name: string,
}
const IAM = (props: IAM) => {

  return (
    <>
      <div className='wrap-column text-25'>
        <Avatar
          alt='profile'
          src='/images/icon/profile.png'
          sx={iconStyle}
          variant='circular'
        >
          <AccountCircleIcon
            sx={iconStyle}
          />
        </Avatar>
        <span>{props.name}</span>
      </div>
    </>
  )
}
  
const MyProfile = (props: {profile: MyBaseProfile}) => {

  const hard = useRecoilValue(hardType)

  return (
    <>
      <div className={`wrap-column ${styles.container}`}>
        <IAM
          name={props.profile.name}
        />
        <div className={(hard === HardType.MOBILE) ? `${styles['content-portrait']}`
                                                   : `${styles['content-landscape']}`}>
          <div>
            <h6 className='text-16-ex'>{FAVES}</h6>
            <span className='text-16'>{props.profile.faves}</span>
          </div>
          <div>
            <h6 className='text-16-ex'>{INTRODUCE}</h6>
            <span className={`text-16 ${styles.context}`}>
              {props.profile.introduce}
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
export default MyProfile