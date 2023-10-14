import Head from 'next/head'
import { useRecoilValue } from 'recoil'
import { Axios } from '@/common/lib/axios'

import type { InferGetServerSidePropsType } from 'next'
type Props = InferGetServerSidePropsType<typeof getServerSideProps>
import { PrksMusicInfo } from '@/common/deftype'

// My Components
import MusicInfo from '@/components/molecules/prsk/MusicInfo'

// common
import * as Def from '@/common/define'

// recoil
import { hardType } from '@/recoil/common'

export const getServerSideProps = async () => {

  try {
    return await Axios.get('/api/getPrskMusicList')
    .then(res => {
      const prskMusicList: PrksMusicInfo[] = res.data
      return {
        props: {
          prskMusicList
        }
      }
    })
  } catch(err) {
    return {
      props: {
        errorlog: 'Error: cannot fetching music list'
      }
    }
  }
}

const PrskPlayList = (props: Props) => {

  const hard = useRecoilValue(hardType)

  return ('prskMusicList' in props) ? (
    <>
      <Head>
        <title>B.T.W | PlayList</title>
        <meta name="description" content="prsk play list" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {
        (hard === Def.HardType.PC) ? (
          <>
            {
              props.prskMusicList.map((el, index) => (
                <MusicInfo key={index} info={el} />
              ))
            }
          </>
        ) : (
          <>
            <h2>mobile</h2>
          </>
        )
      }
    </>
  ) : (
    <></>
  )
}
export default PrskPlayList