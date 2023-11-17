/**
 * Firestoreから自分のプロフィール情報を取得
 */

import type { NextApiRequest, NextApiResponse } from 'next'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '@/common/lib/firebase'

import { anonymouseSignin } from '@/common/function/firebaseAnonymouseSignin'

const BUCKET_NAME = 'my-profile'
const SUB_COLLECTION = 'base-data'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  
  const success = await anonymouseSignin()
  
  if (success) {
    const docRef = doc(db, BUCKET_NAME, SUB_COLLECTION)
    await getDoc(docRef)
      .then(snapshot => {
        return res.status(200).json(snapshot.data())
      })
      .catch(err => {
        console.error(err)
        return res.status(500).json('Sorry, cannot get document...')
      })
  } else {
    return res.status(500).json('Anonymouse Authentication Error')
  }

}
export default handler