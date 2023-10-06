/**
 * Amazon S3から画像データを取得するAPI 
 */

import type { NextApiRequest, NextApiResponse } from 'next'
import AWS from 'aws-sdk'

// TODO.Vercelデプロイ時にAPIフォルダが呼び出せなかった...
// AWS.config.update({
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   region: process.env.AWS_REGION,
// })

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const isLocal = process.env.NODE_ENV == 'development'

  const functions = require('firebase-functions')

  const AWS_ACCESS_KEY_ID = isLocal ? process.env.AWS_ACCESS_KEY_ID : functions.config().aws_access_key_id.env
  const AWS_SECRET_ACCESS_KEY = isLocal ? process.env.AWS_SECRET_ACCESS_KEY : functions.config().aws_secret_access_key.env
  const AWS_REGION = isLocal ? process.env.AWS_REGION : functions.config().aws_region.env

  AWS.config.update({
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
    region: AWS_REGION,
  })

  const s3 = new AWS.S3()

  const bucketName: string | undefined = isLocal ? process.env.AWS_S3_BUCKET_NAME : functions.config().aws_s3_bucket_name.env
  if(bucketName) {
    const params: AWS.S3.ListObjectsRequest = {
      Bucket: bucketName
    }

    s3.listObjects(params, (err, data) => {
      if(err) {
        console.log(err) // for debug
        return res.status(500).json('Sorry cannot access')
      } else {
        return res.status(200).json(data)
      }
    })
  } else {
    return res.status(404).json('Not Found your bucket name')
  }
}

export default handler