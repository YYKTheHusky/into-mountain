import axiosInstance from 'api/AxiosInstance.js'
// import axiosAuthInstance from 'api/AxiosAuthInstance.js'

// 取得所有路徑
export const getAllTrails = async () => {
  try {
    const { data } = await axiosInstance.get(`/trails`)
    if (data) {
      return { trails: data.data }
    }
  } catch (error) {
    console.error('[Get All Post Failed]:', error)
    return { success: false }
  }
}
