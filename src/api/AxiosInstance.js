import axios from 'axios'
const baseURL = 'https://trail-finder-d60e010ea135.herokuapp.com/api'
const axiosInstance = axios.create({ baseURL })

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    console.error(error)
    return Promise.reject(error)
  }
)

// window.location.href 無法用於gh-page
// axiosInstance.interceptors.response.use(
//   function (response) {
//     return response
//   },
//   function (error) {
//     if (error.response) {
//       if (error.response.status === 401) {
//         // window.location.href = '/login'
//       }
//     }
//     return Promise.reject(error)
//   }
// )

export default axiosInstance
