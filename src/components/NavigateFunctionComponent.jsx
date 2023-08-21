import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const NavigateFunctionComponent = () => {
  const navigate = useNavigate()
  const [ran, setRan] = useState(false)

  const SetupInterceptors = ({ navigate }) => {
    axios.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('token')
        if (!token) {
          navigate('/login')
        } else {
          config.headers.Authorization = `Bearer ${token}`
        }
        return config
      },
      (error) => {
        console.error(error)
        return Promise.reject(error)
      }
    )
  }

  if (!ran) {
    SetupInterceptors({ navigate })
    setRan(true)
  }
  return <></>
}
