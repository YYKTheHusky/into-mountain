import axiosInstance from 'api/AxiosInstance.js'
import axiosAuthInstance from 'api/AxiosAuthInstance.js'

// 取得所有路徑
export const getAllTrails = async () => {
  try {
    const { data } = await axiosInstance.get(`/trails`)
    if (data) {
      return { success: true, trails: data.data }
    }
  } catch (error) {
    console.error('[Get All Post Failed]:', error)
    return { success: false }
  }
}

// 取得指定一條路徑
export const getOneTrail = async (trailId) => {
  try {
    const { data } = await axiosInstance.get(`/trails/${trailId}`)
    if (data) {
      return { success: true, trailData: data.data }
    }
  } catch (error) {
    console.error('[Get Single Post Failed]:', error)
    return { success: false }
  }
}

// 收藏一條路徑
export const addFavoriteTrail = async (trailId) => {
  try {
    const { data } = await axiosAuthInstance.post(`/trails/favorites`, {
      trailId
    })
    if (data) {
      return { success: true }
    }
  } catch (error) {
    console.error('[Add Favorite Trail Failed]:', error)
    return { success: false }
  }
}

// 取消收藏一條路徑
export const deleteFavoriteTrail = async (trailId) => {
  try {
    const { data } = await axiosAuthInstance.delete(
      `/trails/favorites/${trailId}`
    )
    if (data) {
      return { success: true }
    }
  } catch (error) {
    console.error('[Delete Favorite Trail Failed]:', error)
    return { success: false }
  }
}

// 搜尋路線
export const searchTrailByKeyword = async (keyword) => {
  try {
    const { data } = await axiosInstance.get(
      `/trails/search/?keyword=${keyword}`
    )
    if (data) {
      return { success: true, trails: data.data }
    }
  } catch (error) {
    console.error('[Search Trail Failed]:', error)
    return { success: false }
  }
}
