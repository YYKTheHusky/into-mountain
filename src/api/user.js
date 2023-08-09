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

// 取得特定使用者所有Posts
export const getUserPosts = async (id) => {
  try {
    const data = await axiosInstance.get(`/users/${id}/posts`)
    if (data) {
      return data.data.data.post
    }
  } catch (error) {
    console.error('[Get User Posts Failed]:', error)
    const { message } = error.response.data
    return { success: false, message }
  }
}

// 取得特定使用者所有收藏的心得
export const getUserFavoritePost = async (id) => {
  try {
    const data = await axiosInstance.get(`/users/${id}/favorites/post`)
    if (data) {
      return data.data.data.favoritePost
    }
  } catch (error) {
    console.error('[Get User Posts Failed]:', error)
    const { message } = error.response.data
    return { success: false, message }
  }
}
