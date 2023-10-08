import Head from 'next/head'
import axios from 'axios'
import { InferGetStaticPropsType } from 'next'
import styles from '~/Home.module.sass'

type Props = InferGetStaticPropsType<typeof getStaticProps>

// common
import * as DefType from 'common/deftype'

// MyComponent
import BackgoundImageSlide from '@/ui_components/BackgroundImageSlide'
import MyProfFooter from '@/ui_components/MyProfFooter'
import HomeTitle from '@/ui_components/HomeTitle'

export const getStaticProps = async () => {

  const isLocal = process.env.NODE_ENV === 'development'
  const axiosInstance = axios.create({
    baseURL: isLocal ? 'http://localhost:3000' : process.env.NEXT_PUBLIC_VERCEL_URL,
  })

  try {
    const response = await axiosInstance.get('/api/getImagesFromS3')
    const imageList: DefType.S3[] = response.data.Contents

    return {
      props: {
        imageList
      }
    }
  } catch(err) {
    console.error('Error : cannot fetching images data' , err)
    
    const imageList: DefType.S3[] = [{
      Key: '脳内革命ガール_杏_1.png',
      ETag: "an",
    },{
      Key: 'フブジェット.png',
      ETag: "fubuki",
    }]

    return {
      props: {
        imageList
      }
    }
  }
}

const Home = ({ imageList }: Props) => {

  return (
    <>
      <Head>
        <title>B.T.W | Portfolio</title>
        <meta name="description" content="Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='fixed top-0 flex w-full  min-h-full justify-center items-center'>
        <HomeTitle />
      </div>
      <BackgoundImageSlide imageList={imageList}/>
      <MyProfFooter />
    </>
  )
}
export default Home