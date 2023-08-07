import axios from 'axios'

const baseURL = 'https://trail-finder-project-final-zkqznr2c5a-de.a.run.app/api'

// 取得所有已發布文章
export const getAllPost = async () => {
  try {
    const { data } = await axios.get(`${baseURL}/posts`)
    if (data) {
      return { status: data.status, posts: data.data }
    }
  } catch (error) {
    console.error('[Get All Post Failed]:', error)
    const { message } = error.response.data
    return { success: false, message }
  }
}
