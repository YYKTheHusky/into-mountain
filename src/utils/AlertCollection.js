import Swal from 'sweetalert2'

const Toast = Swal.mixin({
  toast: true,
  position: 'top',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true
})

export const WebsiteError = () => {
  Toast.fire({
    icon: 'info',
    title: '網站遇到一點問題!'
  })
}
