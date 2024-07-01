import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useSizeStore } from '@/helper/widthHandler'

type scrollFunctionType = {
  xly?: number
  lgy?: number
  mdy?: number
  smy?: number
  xsy?: number
  func: Function
  direction: 'utb' | 'btu' | 'both'
}
type scrollAutoFunctionType = {
  y: number,
  func: Function
  direction: 'utb' | 'btu' | 'both'
}
export const useScrollStore = defineStore('scroll', () => {
  const size = useSizeStore()
  const scrollY = ref(window.scrollY)
  const print = ref(false)
  const scrollList = ref<scrollFunctionType[]>([])
  const scrollAutoList = ref<scrollAutoFunctionType[]>([])
  const enablePrint = () => (print.value = true)
  window.addEventListener('scroll', () => {
    handleScroll()
  })
  const checkScrollDo = (y: number | undefined, scrollRealY: number, direction: 'utb' | 'btu' | 'both', scrollUpToBottom: boolean) => 
    y !== undefined &&
  ((direction === 'utb' && scrollUpToBottom && y >= scrollY.value && y <= scrollRealY) ||
    (direction === 'btu' &&
      !scrollUpToBottom &&
      y <= scrollY.value &&
      y >= scrollRealY) ||
    (direction === 'both' &&
      ((y >= scrollY.value && y <= scrollRealY) || (y <= scrollY.value && y >= scrollRealY))))

  const handleScroll = () => {
    const scrollRealY = window.scrollY
    if (print.value) console.log(scrollRealY)
    const scrollUpToBottom = scrollRealY > scrollY.value
    scrollList.value.forEach((item) => {
      const y = size.chooseCorrect(item.xly, item.lgy, item.mdy, item.smy, item.xsy)
      if (checkScrollDo(y,scrollRealY,item.direction,scrollUpToBottom)) {
        item.func()
      }
    })
    scrollAutoList.value.forEach((item) => {
      if (checkScrollDo(item.y,scrollRealY,item.direction,scrollUpToBottom)) {
        item.func()
      }
    })
    scrollY.value = window.scrollY
  }
  const getOffsetTop = (e: HTMLElement) : number => e ? (e.offsetTop + getOffsetTop(e.offsetParent as HTMLElement)) : 0;

  const register = (
    y: { xl?: number; lg?: number; md?: number; sm?: number; xs?: number },
    func: Function,
    direction: 'utb' | 'btu' | 'both' = 'utb') =>
    scrollList.value.push({
      xly: y.xl, lgy: y.lg, mdy: y.md, smy: y.sm, xsy: y.xs, func: func, direction: direction
    })
    const registerAuto = (elem: HTMLElement, offsetY: number, func: Function, direction: 'utb' | 'btu' | 'both' = 'utb' ) => {
      scrollAutoList.value.push({
          y: getOffsetTop(elem) - window.innerHeight + offsetY,
          func: func,
          direction: direction
      })
    }
  return {  registerAuto, enablePrint, register }
})
