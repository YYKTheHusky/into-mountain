import axiosInstance from 'api/AxiosInstance.js'
import axiosAuthInstance from 'api/AxiosAuthInstance.js'

// 取得所有已發布文章
export const getAllPost = async () => {
  try {
    const { data } = await axiosInstance.get(`/posts`)
    if (data) {
      return { status: data.status, posts: data.data }
    }
  } catch (error) {
    console.error('[Get All Post Failed]:', error)
    const { message } = error.response.data
    return { success: false, message }
  }
}

// 取得指定一篇文章
export const getOnePost = async (postId) => {
  try {
    const { data } = await axiosInstance.get(`/posts/${postId}`)
    if (data) {
      return { status: data.status, postData: data.data }
    }
  } catch (error) {
    console.error('[Get Single Post Failed]:', error)
    const { message } = error.response.data
    return { success: false, message }
  }
}

// 按讚文章
export const likePost = async (postId) => {
  try {
    const response = await axiosAuthInstance.post(`/posts/likes`, { postId })
    if (response) {
      return { success: true }
    }
  } catch (error) {
    console.error('[Like Post Failed]:', error)
    return { success: false }
  }
}

// 取消讚文章
export const dislikePost = async (postId) => {
  try {
    const response = await axiosAuthInstance.delete(`/posts/likes/${postId}`)
    if (response) {
      return { success: true }
    }
  } catch (error) {
    console.error('[Dislike Post Failed]:', error)
    return { success: false }
  }
}

// 收藏文章
export const collectPost = async (postId) => {
  try {
    const response = await axiosAuthInstance.post(`/posts/collects`, {
      postId
    })
    if (response) {
      return { success: true }
    }
  } catch (error) {
    console.error('[Collect Post Failed]:', error)
    return { success: false }
  }
}

// 取消收藏文章
export const discollectPost = async (postId) => {
  try {
    const response = await axiosAuthInstance.delete(`/posts/collects/${postId}`)
    if (response) {
      return { success: true }
    }
  } catch (error) {
    console.error('[Discollect Post Failed]:', error)
    return { success: false }
  }
}
