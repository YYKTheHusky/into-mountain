import axios from 'axios'

const baseURL = 'https://trail-finder-project-us-zkqznr2c5a-uc.a.run.app/api/'
const axiosAuthInstance = axios.create({ baseURL })

axiosAuthInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (!token) {
      window.location.href = '/login'
    } else {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    console.error(error)
  }
)

export default axiosAuthInstance
