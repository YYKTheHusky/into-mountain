import axios from 'axios'

const baseURL = 'https://trail-finder-project-final-zkqznr2c5a-de.a.run.app/api'

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
