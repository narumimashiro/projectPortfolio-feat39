import Head from 'next/head'
import styles from '~/Home.module.sass'
import axios from 'axios'
import { InferGetStaticPropsType } from 'next'

type Props = InferGetStaticPropsType<typeof getStaticProps>
import * as DefType from 'common/deftype'

// MyComponent
import BackgoundImageSlide from '@/ui_components/BackgroundImageSlide'
import MyProfFooter from '@/ui_components/MyProfFooter'

export const getStaticProps = async () => {

  const isLocal = process.env.NODE_ENV === 'development'
  axios.defaults.baseURL = isLocal ? 'http://localhost:3000' : process.env.NEXT_PUBLIC_VERCEL_URL
  try {
    const response = await axios.get('/api/getImagesFromS3')
    const imageList: DefType.S3[] = response.data.Contents

    return {
      props: {
        imageList
      }
    }
  } catch(err) {
    console.error('Error : cannot fetching images data' , err)
    
    // なぜかapiフォルダが機能しないので、暫定でベタ書き
    const imageList: DefType.S3[] = [{
      Key: '脳内革命ガール_杏_1.png',
      LastModified: "string",
      ETag: "an",
      ChecksumAlgorithm: [],
      Owner: {},
      Size: 2,
      StorageClass: "string"
    },{
      Key: 'フブジェット.png',
      LastModified: "string",
      ETag: "fubuki",
      ChecksumAlgorithm: [],
      Owner: {},
      Size: 2,
      StorageClass: "string"
    }]

    return {
      props: {
        imageList
      }
    }
  }
}

const Home = ({ imageList }: Props) => {
  console.log(imageList)
  return (
    <>
      <Head>
        <title>B.T.W | Portfolio</title>
        <meta name="description" content="Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BackgoundImageSlide imageList={imageList}/>
      <MyProfFooter />
    </>
  )
}
export default Home