import axios from 'axios'

const baseURL = 'https://trail-finder-project-final-zkqznr2c5a-de.a.run.app/api'
const axiosInstance = axios.create({ baseURL })

axiosInstance.interceptors.request.use(
  (config) => {
    const adToken = localStorage.getItem('adToken')
    if (adToken) {
      config.headers.Authorization = `Bearer ${adToken}`
    }
    return config
  },
  (error) => {
    console.error(error)
  }
)

// 管理者登入
export const adminLogin = async ({ email, password }) => {
  try {
    const { data: responseData } = await axios.post(`${baseURL}/admin/signin`, {
      email,
      password
    })
    const { token } = responseData.data
    const { id, name, role, avatar } = responseData.data.user
    if (responseData) {
      return {
        token,
        id,
        name,
        role,
        avatar
      }
    }
  } catch (error) {
    console.error('[Login Failed]:', error)
    const { message } = error.response.data
    return { success: false, message }
  }
}

// 瀏覽全站的 User 名單
export const getAllUsers = async () => {
  try {
    const data = await axiosInstance.get(`/admin/users`)
    if (data) {
      return data.data.data
    }
  } catch (error) {
    console.error('[Get User Data Failed]:', error)
    const { message } = error.response.data
    return { success: false, message }
  }
}
