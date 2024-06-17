import { ref } from 'vue'
import { defineStore } from 'pinia'

const xsw = 480,
  smw = 568,
  mdw = 768,
  lgw = 1024,
  xlw = 1200

export enum sizeType {
  xl = 'xl',
  lg = 'lg',
  md = 'md',
  sm = 'sm',
  xs = 'xs',
  unk = 'unknown'
}

export const useSizeStore = defineStore('size', () => {
  const size = ref(sizeType.lg)
  const sizePX = ref<number>(window.innerWidth);
  window.addEventListener('resize', () => {
    updateSize()
  })
  updateSize()
  function deviceSize(): sizeType {
    const width = window.innerWidth
    if (width <= xsw && width >= 0) {
      return sizeType.xs
    } else if (width < smw && width >= xsw) {
      return sizeType.xs
    } else if (width < mdw && width >= smw) {
      return sizeType.sm
    } else if (width < lgw && width >= mdw) {
      return sizeType.md
    } else if (width < xlw && width >= lgw) {
      return sizeType.lg
    } else if (width >= xlw) {
      return sizeType.xl
    } else {
      return sizeType.unk
    }
  }
  function chooseCorrect(xl: number | undefined, lg: number | undefined, md: number | undefined, sm: number | undefined, xs: number | undefined) : number | undefined {
    switch (size.value) {
      case sizeType.xl: return xl
      case sizeType.lg: return lg
      case sizeType.md: return md
      case sizeType.sm: return sm
      case sizeType.xs: return xs
      default: return undefined
    }
  }
  function chooseCorrectUp(xl: number | undefined, lg: number | undefined, md: number | undefined, sm: number | undefined, xs: number) : number{
    let result : number = xs
    if(biggerThan(sizeType.lg)){
      xl !== undefined ? result = xl :
      lg !== undefined ? result = lg :
      md !== undefined ? result = md :
      sm !== undefined ? result = sm :
      result = xs
    } 
    else if(biggerThan(sizeType.md)){
      lg !== undefined ? result = lg :
      md !== undefined ? result = md :
      sm !== undefined ? result = sm :
      result = xs
    }
    else if(biggerThan(sizeType.sm)){
      md !== undefined ? result = md :
      sm !== undefined ? result = sm :
      result = xs
    }
    else if(biggerThan(sizeType.xs)){
      sm !== undefined ? result = sm :
      result = xs
    }
    else {
      result = xs
    }
    return result
  }
  function biggerThan(param: sizeType): Boolean {
    switch (param) {
      case sizeType.lg:
        return biggerThanLG(size.value)
      case sizeType.md:
        return biggerThanMD(size.value)
      case sizeType.sm:
        return biggerThanSM(size.value)
      case sizeType.xs:
        return biggerThanXS(size.value)
      default:
        throw new Error('error in biggerThan parameter')
    }
  }
  function biggerThanXS(param: sizeType): Boolean {
    return (
      param === sizeType.sm ||
      param === sizeType.md ||
      param === sizeType.lg ||
      param === sizeType.xl
    )
  }
  function biggerThanSM(param: sizeType): Boolean {
    return param === sizeType.md || param === sizeType.lg || param === sizeType.xl
  }
  function biggerThanMD(param: sizeType): Boolean {
    return param === sizeType.lg || param === sizeType.xl
  }
  function biggerThanLG(param: sizeType): Boolean {
    return param === sizeType.xl
  }
  function updateSize(): void {
    size.value = deviceSize()
    sizePX.value = window.innerWidth
  }
  return { biggerThan , chooseCorrectUp , chooseCorrect }
})
