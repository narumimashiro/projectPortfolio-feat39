/**
* ランダムで文字列の生成を行う
* @param {number} strLen - 生成したい文字列の長さ
* @returns {string} ランダム生成した文字列
*/
export const createRandomString = (strLen: number) => {
  const strList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  return Array.from(crypto.getRandomValues(new Uint32Array(strLen))).map((num) => (
    strList[num % strList.length]
  )).join('')
}