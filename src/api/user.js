import axios from 'axios'
import axiosInstance from 'api/AxiosInstance.js'
const baseURL = 'https://trail-finder-ov2vgkaf5a-uc.a.run.app/api'

// 取得特定使用者資料
export const getUserData = async (id) => {
  try {
    const data = await axiosInstance.get(`/users/${id}`)
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

// 取得特定使用者所有Posts (含草稿)
export const getUserAllPosts = async () => {
  try {
    const data = await axios.get(`${baseURL}/posts/all`)
    if (data) {
      return data.data.data
    }
  } catch (error) {
    console.error('[Get User All Posts Failed]:', error)
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
    console.error('[Get User Favorite Posts Failed]:', error)
    const { message } = error.response.data
    return { success: false, message }
  }
}

// 取得特定使用者所有收藏的登山路徑
export const getUserFavoriteTrail = async (id) => {
  try {
    const data = await axiosInstance.get(`/users/${id}/favorites/trail`)
    if (data) {
      return data.data.data.favoriteTrail
    }
  } catch (error) {
    console.error('[Get User Favorite Trails Failed]:', error)
    const { message } = error.response.data
    return { success: false, message }
  }
}

// 取得特定使用者跟隨中的人
export const getUserFollowing = async (id) => {
  try {
    const data = await axiosInstance.get(`/users/${id}/followings`)
    if (data) {
      return data.data.data.followings
    }
  } catch (error) {
    console.error('[Get User Posts Failed]:', error)
    const { message } = error.response.data
    return { success: false, message }
  }
}

// 取得特定使用者的追隨者
export const getUserFollowers = async (id) => {
  try {
    const data = await axiosInstance.get(`/users/${id}/followers`)
    if (data) {
      return data.data.data.followers
    }
  } catch (error) {
    console.error('[Get User Posts Failed]:', error)
    const { message } = error.response.data
    return { success: false, message }
  }
}

// 取得特定使用者的所有通知
export const getUserNotifications = async (id) => {
  try {
    const data = await axiosInstance.get(`/users/${id}/notifications`)
    if (data) {
      return data.data.data
    }
  } catch (error) {
    console.error('[Get User Notifications Failed]:', error)
    const { message } = error.response.data
    return { success: false, message }
  }
}

// 將特定使用者的特定通知標示為「已讀」
export const isReadNotification = async (id) => {
  try {
    const res = await axios.put(`${baseURL}/users/notifications/${id}`)
    if (res) {
      return res
    }
  } catch (error) {
    console.error('[Read Notification Failed]:', error)
    const { message } = error.response.data
    return { success: false, message }
  }
}

// 編輯使用者個人資料
export const editUserData = async ({ data }) => {
  const id = localStorage.getItem('currentUserId')
  const formData = new FormData()
  formData.append('name', data.name)
  formData.append('email', data.email)
  formData.append('introduction', data.introduction)
  formData.append('password', data.password)
  if (data.avatar) {
    const avatarFile = new File([data.avatar], 'data.avatar.name')
    formData.append('avatar', avatarFile)
    const reader = new FileReader()
    reader.readAsDataURL(data.avatar)
  }

  try {
    const res = await axios.put(`${baseURL}/users/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    if (res) {
      return res.data
    }
  } catch (error) {
    console.error('[Edit User Data Failed]:', error)
    const { message } = error.response.data
    return { success: false, message }
  }
}

// 刪除指定post
export const deletePost = async (postId) => {
  try {
    const response = await axios.delete(`${baseURL}/posts/${postId}`)
    if (response) {
      return { success: true }
    }
  } catch (error) {
    console.error('[Delete Post Failed]:', error)
    return { success: false }
  }
}
