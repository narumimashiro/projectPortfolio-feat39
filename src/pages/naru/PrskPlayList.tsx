import Head from 'next/head'
import { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { Axios } from '@/common/lib/axios'

import type { InferGetServerSidePropsType } from 'next'
type Props = InferGetServerSidePropsType<typeof getServerSideProps>

// My Components
import MusicInfo from '@/components/molecules/prsk/MusicInfo'
import PrskMusicList from '@/components/molecules/prsk/PrskMusicList'

// common
import * as Def from '@/common/define'
import { PrksMusicInfo } from '@/common/deftype'

// recoil
import { hardType } from '@/recoil/common'
import { prskMusicList, currentList } from '@/recoil/prskPlayList'

export const getServerSideProps = async () => {

  if(process.env.NODE_ENV === 'development') {
    return await Axios.get('/api/getLocalJson')
      .then(res=> {
        const prskMusicList: PrksMusicInfo[] = res.data
        return {
          props: {
            prskMusicList
          }
        }
      })
  }

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
  
  if('errorlog' in props) alert('please reload')
  
  const hard = useRecoilValue(hardType)
  const [_, setMusicList] = useRecoilState(prskMusicList)
  const currentMusicList = useRecoilValue(currentList)

  useEffect(() => {
    if('prskMusicList' in props) {
      setMusicList(props.prskMusicList)
    }
  })
  
  return (
    <>
      <Head>
        <title>B.T.W | PlayList</title>
        <meta name="description" content="prsk play list" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {
        (hard !== Def.HardType.MOBILE) ? (
          <>
            <div className='flex w-full h-[calc(100%-85px)]'>
              <div className='w-1/2 flex justify-center items-end pl-2'>
                <PrskMusicList>
                  {
                    currentMusicList.map((el, index) => (
                      <MusicInfo key={index} info={el} />
                    ))
                  }
                </PrskMusicList>
              </div>
              <div className='w-1/2 flex justify-center items-end pr-2'>

              </div>
            </div>
            <div className='flex w-full h-20 bg-slate-500 bottom-0'>

            </div>
          </>
        ) : (
          <>
            <h2>mobile</h2>
          </>
        )
      }
    </>
  )
}
export default PrskPlayList