import axiosInstance from 'api/AxiosInstance.js'

// 取得特定使用者資料
export const getUserData = async () => {
  const currentUserId = localStorage.getItem('currentUserId')
  try {
    const { data } = await axiosInstance.get(`/users/${currentUserId}`)
    if (data) {
      return { status: data.status, userData: data.data }
    }
  } catch (error) {
    console.error('[Get User Data Failed]:', error)
    const { message } = error.response.data
    return { success: false, message }
  }
}
