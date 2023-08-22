import axios from 'axios'
const baseURL = 'https://trail-finder-project-final-zkqznr2c5a-de.a.run.app/api'

// 追蹤用戶
export const followUser = async (userId) => {
  try {
    const response = await axios.post(`${baseURL}/followships`, { userId })
    if (response) {
      return { success: true }
    }
  } catch (error) {
    console.error('[Follow User Failed]: ', error)
    return { success: false }
  }
}

// 取消追蹤
export const unFollowUser = async (id) => {
  try {
    const response = await axios.delete(`${baseURL}/followships/${id}`)
    if (response) {
      return { success: true }
    }
  } catch (error) {
    console.error('[UnFollow User Failed]: ', error)
    return { success: false }
  }
}
