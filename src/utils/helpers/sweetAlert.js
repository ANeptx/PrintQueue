import Swal from 'sweetalert2'
import i18n from '../../plugins/i18n'

const alertSetTimer = (position, title, timer) => {
  Swal.fire({
    position: position || 'center',
    icon: 'success',
    title: title || i18n.t('history.titleAfterOk'),
    showConfirmButton: false,
    timer: timer || 1500
  })
  //   Swal.fire({
  //     position: 'center',
  //     icon: 'success',
  //     title: i18n.t('history.titleAfterOk'),
  //     showConfirmButton: false,
  //     timer: 1500
  //   })
}

export { alertSetTimer }
