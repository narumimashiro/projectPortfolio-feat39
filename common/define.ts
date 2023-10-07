// responsive design用
export const enum HardType {
  PC, TABLET, MOBILE
}
export const SIZE_MIN_PC = 1024     // PC最小サイズ
export const SIZE_MAX_TABLET = 1023 // mobile端末(タブレット)の最大幅
export const SIZE_MAX_MOBILE = 767  // mobile端末(スマホ)の最大値

// MyAccount
const linkPixiv = 'https://www.pixiv.net/users/34922723'
const linkGithub = 'https://github.com/narumimashiro'
const linkInstagram = 'https://www.instagram.com/narumikr_/'
const linkX_Twitter = 'https://twitter.com/n4rumikr396_'
const imgPixiv = '/images/snsicon/pixiv.png'
const imgGithub = '/images/snsicon/github.png'
const imgInstagram = '/images/snsicon/instagram.png'
const imgX_Twitter = '/images/snsicon/x_twitter.png'

export const enum SnsAccount {
  Pixiv, Github, Instagram, X_Twitter
}
interface snsAccount {
  readonly name: string
  readonly url: string,
  readonly img: string
}
export const mySnsAccount: snsAccount[] = []
mySnsAccount[SnsAccount.Pixiv]     = {'name' : 'Pixiv',     'url' : linkPixiv,     'img' : imgPixiv}
mySnsAccount[SnsAccount.Github]    = {'name' : 'Github',    'url' : linkGithub,    'img' : imgGithub}
mySnsAccount[SnsAccount.Instagram] = {'name' : 'Instagram', 'url' : linkInstagram, 'img' : imgInstagram}
mySnsAccount[SnsAccount.X_Twitter] = {'name' : 'X_Twitter', 'url' : linkX_Twitter, 'img' : imgX_Twitter}

// AWS
export const s3ImageUrl = 'https://naru396-aws-storage.s3-ap-northeast-1.amazonaws.com'