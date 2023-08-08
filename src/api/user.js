import axiosInstance from 'api/AxiosInstance.js'

// 取得特定使用者資料
export const getUserData = async (id) => {
  try {
    const  data  = await axiosInstance.get(`/users/${id}`)
    if (data) {
      return data.data.data.user
    }
  } catch (error) {
    console.error('[Get User Data Failed]:', error)
    const { message } = error.response.data
    return { success: false, message }
  }
}
