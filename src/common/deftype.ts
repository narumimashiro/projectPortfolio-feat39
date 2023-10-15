export interface S3 {
  Key: string,
  LastModified?: string,
  ETag: string,
  ChecksumAlgorithm?: [],
  Owner?: {},
  Size?: number,
  StorageClass?: string
}

export interface PrksMusicInfo {
  title: string,
  id: string,
  sekai: {
    artist: string,
    url: string
  },
  original: {
    artist: string,
    url: string
  }
}