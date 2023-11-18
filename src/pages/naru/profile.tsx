import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import Head from 'next/head'
import styles from '@/styles/components/profile/Profile.module.sass'

// My Components
import MyProfile from '@/components/molecules/profile/MyProfile'
import MyCreation from '@/components/molecules/profile/MyCreation'

// common
import { MyBaseProfile } from '@/common/deftype'
import { Axios } from '@/common/lib/axios'

type Props = InferGetServerSidePropsType<GetServerSideProps>

export const getServerSideProps = async () => {
  return await Axios.get('/api/getMyProfile')
    .then(res => {
      const profileData: MyBaseProfile = res.data
      return {
        props: {
          profileData
        }
      }
    })
    .catch(err => {
      console.error('Error : cannot fetching data', err)
      return {
        props: {}
      }
    })
}

const Profile = ({ profileData }: Props): JSX.Element => {

  return (
    <>
      <Head>
        <title>B.T.W | Profile</title>
        <meta name="description" content="My profile page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.container}>
        <MyProfile profile={profileData} />
        <MyCreation />
      </div>
    </>
  )
}
export default Profile