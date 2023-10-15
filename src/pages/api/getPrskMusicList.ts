/**
 * FirestoreからプロセカMusicInfoデータを取得するAPI 
 */

import type { NextApiRequest, NextApiResponse } from 'next'
import { collection, getDocs } from 'firebase/firestore'
import { signInAnonymously } from 'firebase/auth'
import { db, auth } from '@/common/lib/firebase'

import { PrksMusicInfo } from '@/common/deftype'

const BUCKET_NAME = 'prsk-music-list'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {

  // Anonymouse Login
  signInAnonymously(auth).then(() => {
    console.log('Anonymouse Login Success')
  })
  .catch(error => {
    console.error(error.message)
    return res.status(500).json('Anonymouse Authentication Error')
  })

  const dataCollection = collection(db, BUCKET_NAME)

  // GET Request
  if(req.method === 'GET') {
    let resData = Array<PrksMusicInfo>()
    await getDocs(dataCollection)
      .then(snapshot => {
        snapshot.docs.map(el => {
          resData.push({
            title: el.data().title,
            id: el.data().id,
            sekai: {
              artist: el.data().sekai.artist,
              url: el.data().sekai.url
            },
            original: {
              artist: el.data().original.artist,
              url: el.data().original.url
            }
          })
        })
        // console.log(resData) // for debug
        return res.status(200).json(resData)
      })
      .catch(err => {
        console.error(err.message)
        return res.status(500).json('Sorry, cannot get firebase collection...')
      })
  } else {
    return res.status(400).json('We only support the GET method.')
  }
}
export default handler