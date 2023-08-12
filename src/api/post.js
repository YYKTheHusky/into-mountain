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

// 取得一篇自己的文章，用來編輯
export const getPostForEdit = async (postId) => {
  try {
    const { data } = await axiosAuthInstance.get(`/posts/users/${postId}`)
    if (data) {
      return { postData: data.data }
    }
  } catch (error) {
    console.error('[Get Post For Edit Failed]:', error)
    const { message } = error.response.data
    return { message }
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

// 發布一篇文章
export const publishPost = async ({
  title,
  category,
  description,
  image,
  difficulty,
  recommend
}) => {
  try {
    const formData = new FormData()
    formData.append('title', title)
    formData.append('category', category)
    formData.append('description', description)
    formData.append('image', image)
    formData.append('difficulty', difficulty)
    formData.append('recommend', recommend)

    const { data } = await axiosAuthInstance.post(`/posts`, formData)

    if (data) {
      return { success: true, postId: data.data.postId }
    }
  } catch (error) {
    console.error('[Publish Post Failed]:', error)
    return { success: false }
  }
}

// 編輯一篇文章
export const editPost = async ({
  reviewID,
  title,
  category,
  description,
  image,
  difficulty,
  recommend
}) => {
  try {
    const formData = new FormData()
    formData.append('title', title)
    formData.append('category', category)
    formData.append('description', description)
    formData.append('image', image)
    formData.append('difficulty', difficulty)
    formData.append('recommend', recommend)

    const { data } = await axiosAuthInstance.put(`/posts/${reviewID}`, formData)
    if (data) {
      return { success: true }
    }
  } catch (error) {
    console.error('[Edit Post Failed]:', error)
    return { success: false }
  }
}

// 刪除指定post
export const deletePost = async (postId) => {
  try {
    const response = await axiosAuthInstance.delete(`/posts/${postId}`)
    if (response) {
      return { success: true }
    }
  } catch (error) {
    console.error('[Delete Post Failed]:', error)
    return { success: false }
  }
}

// 搜尋心得
export const searchPostByKeyword = async (keyword) => {
  try {
    const { data } = await axiosInstance.get(
      `/posts/search/?keyword=${keyword}`
    )
    if (data) {
      return { success: true, posts: data.data }
    }
  } catch (error) {
    console.error('[Search Post Failed]:', error)
    return { success: false }
  }
}

// 取得最新前N筆資料
export const getTopPosts = async (limit) => {
  try {
    const { data } = await axiosInstance.get(
      `/posts?sort=createdAt&limit=${limit}`
    )
    if (data) {
      return { success: true, posts: data.data }
    }
  } catch (error) {
    console.error('[Get All Post Failed]:', error)
    const { message } = error.response.data
    return { success: false, message }
  }
}
