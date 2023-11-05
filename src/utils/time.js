export const formatDateTime = (inputDatetime) => {
  try {
    // 將輸入的日期時間字符串轉換為Date對象
    const dt = new Date(inputDatetime)
    // 取得年、月、日、時、分
    const year = dt.getFullYear()
    const month = String(dt.getMonth() + 1).padStart(2, '0')
    const day = String(dt.getDate()).padStart(2, '0')

    // 返回轉換後的結果
    return `${year}.${month}.${day}`
  } catch (error) {
    return 'Invalid input datetime format.'
  }
}

export const formatDateWithTime = (inputDatetime) => {
  try {
    // 將輸入的日期時間字符串轉換為Date對象
    const dt = new Date(inputDatetime)
    // 取得年、月、日、時、分
    const year = dt.getFullYear()
    const month = String(dt.getMonth() + 1).padStart(2, '0')
    const day = String(dt.getDate()).padStart(2, '0')
    const hours = String(dt.getHours()).padStart(2, '0')
    const minutes = String(dt.getMinutes()).padStart(2, '0')

    // 返回轉換後的結果
    return `${year}.${month}.${day} ${hours}:${minutes}`
  } catch (error) {
    return 'Invalid input datetime format.'
  }
}
