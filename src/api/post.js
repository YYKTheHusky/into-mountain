import axiosInstance from 'api/AxiosInstance.js'

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
