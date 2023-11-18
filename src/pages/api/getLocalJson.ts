/**
 * 開発時のDB読み込み量削減のためのAPI
 */

import type { NextApiRequest, NextApiResponse } from 'next'

import jsonData from '../../../public/prsk-music-list-for-dev.json'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {

  return res.status(200).json(jsonData)
}
export default handler