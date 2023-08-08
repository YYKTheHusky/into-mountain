import axiosAuthInstance from 'api/AxiosAuthInstance.js'

// 追蹤用戶
export const followUser = async (userId) => {
  try {
    const response = await axiosAuthInstance.post(`/followships`, { userId })
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
    const response = await axiosAuthInstance.delete(`/followships/${id}`)
    if (response) {
      return { success: true }
    }
  } catch (error) {
    console.error('[UnFollow User Failed]: ', error)
    return { success: false }
  }
}
