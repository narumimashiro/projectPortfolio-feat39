import { signInAnonymously } from 'firebase/auth'
import { auth } from '@/common/lib/firebase'

export const anonymouseSignin = async () => {

  // Anonymouse Login
  const res = await signInAnonymously(auth).then(() => {
    console.log('Anonymouse Login Success')
    return true
  })
  .catch(error => {
    console.error(error.message)
    return false
  })

  return res
}