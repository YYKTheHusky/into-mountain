import axios from 'axios'

const baseURL = 'https://trail-finder-project-final-zkqznr2c5a-de.a.run.app/api'
const axiosInstance = axios.create({ baseURL })

axiosInstance.interceptors.request.use(
  (config) => {
    const adminToken = localStorage.getItem('adminToken')
    if (adminToken) {
      config.headers.Authorization = `Bearer ${adminToken}`
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
    const { id, avatar, isSuspended } = responseData.data.user
    if (responseData) {
      return {
        token,
        id,
        avatar,
        isSuspended
      }
    }
  } catch (error) {
    console.error('[Admin Login Failed]:', error)
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
// 停權特定使用者
export const addSuspension = async (id) => {
  try {
    const res = await axiosInstance.put(`/admin/admin/suspend`, { id })
    if (res) {
      return res
    }
  } catch (error) {
    console.error('[Get User Data Failed]:', error)
    const { message } = error.response.data
    return { success: false, message }
  }
}

// export const addSuspension = async (id) => {
//   try {
//     const requestData = qs.stringify({ id })
//     const adToken = localStorage.getItem('adToken')
//     const res = await axios.put(`${baseURL}/admin/admin/suspend`, requestData, {
//       headers: {
//         Authorization: 'Bearer ' + adToken,
//         'Content-Type': 'application/x-www-form-urlencoded'
//       }
//     })

//     if (res) {
//       return res
//     }
//   } catch (error) {
//     console.error('[Get User Data Failed]:', error)
//     const { message } = error.response.data
//     return { success: false, message }
//   }
// }

// 查看所有停權使用者清單
export const getAllSuspension = async () => {
  try {
    const res = await axiosInstance.get(`/admin/users/suspension`)
    if (res) {
      return res.data.data
    }
  } catch (error) {
    console.error('[Get All Suspension Data Failed]:', error)
  }
}
