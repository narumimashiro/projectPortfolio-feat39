import Head from 'next/head'
import { InferGetStaticPropsType } from 'next'

type Props = InferGetStaticPropsType<typeof getStaticProps>

// @/common
import * as DefType from '@/common/deftype'
import { Axios } from '@/common/lib/axios'

// MyComponent
import BackgoundImageSlide from '@/components/molecules/BackgroundImageSlide'
import MyProfFooter from '@/components/molecules/MyProfFooter'
import HomeTitle from '@/components/molecules/HomeTitle'

export const getStaticProps = async () => {

  const isLocal = process.env.NODE_ENV === 'development'

  if(!isLocal) {
    return await Axios.get('/api/getImagesFromS3')
      .then(res => {
        const imageList: DefType.S3[] = res.data.Contents
        return {
          props: {
            imageList
          }
        }
      })
      .catch(err => {
        console.error('Error : cannot fetching images data' , err)

        return {
          props: {
            imageList: []
          }
        }
      })
  } else {
    return {
      props: {
        imageList: []
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