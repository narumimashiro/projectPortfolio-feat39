import axios from 'axios'

const isLocal = process.env.NODE_ENV === 'development'

export const Axios = axios.create({
  baseURL: isLocal ? 'http://localhost:3000' : process.env.NEXT_PUBLIC_VERCEL_URL,
})