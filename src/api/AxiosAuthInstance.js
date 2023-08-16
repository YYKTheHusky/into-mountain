import axios from 'axios'

const baseURL = 'https://trail-finder-project-final-zkqznr2c5a-de.a.run.app'
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
