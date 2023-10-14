/**
 * Amazon S3から画像データを取得するAPI 
 */

import type { NextApiRequest, NextApiResponse } from 'next'
import AWS from 'aws-sdk'

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {

  const s3 = new AWS.S3()

  const bucketName: string | undefined = process.env.AWS_S3_BUCKET_NAME
  if(bucketName) {
    const params: AWS.S3.ListObjectsRequest = {
      Bucket: bucketName
    }

    s3.listObjects(params, (err, data) => {
      if(err) {
        // console.log(err) // for debug
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