import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Toast from 'utils/sweetAlertConfig'

export const NavigateFunctionComponent = () => {
  const navigate = useNavigate()
  const [ran, setRan] = useState(false)

  const SetupInterceptors = ({ navigate }) => {
    axios.interceptors.request.use(
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

    axios.interceptors.response.use(
      function (response) {
        return response
      },
      function (error) {
        if (error.response.status === 401) {
          navigate('/login')
        } else {
          Toast.fire({
            icon: 'error',
            title: '操作時遇到一點問題!'
          })
        }
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
