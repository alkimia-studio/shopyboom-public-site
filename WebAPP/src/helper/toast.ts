import { useNotification } from '@kyvg/vue3-notification'
const { notify } = useNotification()
export function info(msg: string, title: string = 'Info') {
  notify({
    type: 'info',
    title: title,
    text: msg
  })
}
export function error(msg: string, title: string = 'Error') {
  notify({
    type: 'error',
    title: title,
    text: msg
  })
}
export function success(msg: string, title: string = 'Success') {
  notify({
    type: 'success',
    title: title,
    text: msg
  })
}
