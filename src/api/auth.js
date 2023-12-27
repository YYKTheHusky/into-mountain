import axios from 'axios'

const baseURL = 'https://trail-finder-ov2vgkaf5a-uc.a.run.app/api'

// 使用者登入
export const login = async ({ email, password }) => {
  try {
    const { data: responseData } = await axios.post(`${baseURL}/users/signin`, {
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
    console.error('[Login Failed]:', error)
    const { message } = error.response.data
    return { success: false, message }
  }
}

// 註冊
export const signUp = async ({ name, email, password, passwordCheck }) => {
  try {
    const { data } = await axios.post(`${baseURL}/users`, {
      name,
      email,
      password,
      passwordCheck
    })
    const { status, message } = data

    if (status === 'success') {
      return { success: true, message }
    }

    return data
  } catch (error) {
    const { message } = error.response.data
    console.error('[Register Failed]: ', error)
    return { success: false, message }
  }
}
