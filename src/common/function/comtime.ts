/**
* 現在時刻を YYYYMMDDHHMMSSで返す
* @param なし
* @returns {string} 現在時刻を返す
*/
export const whatTimeIsItNow = () => {
  const timeData = new Date()
  const year = timeData.getFullYear()
  const month = ('0' + `${timeData.getMonth() + 1}`).slice(-2)
  const date = ('0' + timeData.getDate()).slice(-2)
  const hours = ('0' + timeData.getHours()).slice(-2)
  const minutes = ('0' + timeData.getMinutes()).slice(-2)
  const seconds = ('0' + timeData.getSeconds()).slice(-2)

  // YYYYMMDDHHMMSS
  return `${year}${month}${date}${hours}${minutes}${seconds}`
}

/**
* YYYYMMDDHHMMSS表記の時刻を単位ごとに区切る
* @param {string} time - 現在時刻
* @returns {string} YYYY-MM-DD-HH-MM-SS表記で返す
*/
// TODO 引数の正確性もチェックしたい
const arrangeTime = (time: string) => {
  const year = time.slice(0, 4)
  const month = time.slice(4, 6)
  const day = time.slice(6, 8)
  const hour = time.slice(8, 10)
  const minutes = time.slice(10, 12)
  const seconds = time.slice(12, 14)
  return `${year}-${month}-${day}-${hour}-${minutes}-${seconds}`
}

/**
* 現在時刻を YYYYMMDDで返す
* @param なし
* @returns {string} 現在時刻を返す
*/
export const whatsTheDateToday = () => {
  const timeData = new Date()
  const year = timeData.getFullYear()
  const month = ('0' + `${timeData.getMonth() + 1}`).slice(-2)
  const date = ('0' + timeData.getDate()).slice(-2)

  // YYYYMMDD
  return `${year}${month}${date}`
}

/**
* YYYYMMDD表記の時刻を単位ごとに区切る
* @param {string} date - 現在時刻
* @returns {string} YYYY-MM-DD表記で返す
*/
// TODO 引数の正確性もチェックしたい
const arrangeDate = (date: string) => {
  const year = date.slice(0, 4)
  const month = date.slice(4, 6)
  const day = date.slice(6, 8)
  return `${year}-${month}-${day}`
}