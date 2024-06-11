import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useSizeStore } from '@/helper/widthHandler'
import scrollDataJson from '@/helper/scroll.json'

type scrollFunctionType = {
    xly?: number,
    lgy?: number,
    mdy?: number,
    smy?: number,
    xsy: number,
    func: Function,
    direction: "utb" | "btu" | "both",
    oneTime: { is: boolean, done: boolean },
}
export const useScrollStore = defineStore('scroll', () => {
    const size = useSizeStore();
    const scrollY = ref(window.scrollY)
    const print = ref(false)
    const scrollList = ref<scrollFunctionType[]>([])
    const scrollData = ref()
    scrollData.value = scrollDataJson
    const enablePrint = () => print.value = true
    window.addEventListener('scroll',()=> {handleScroll()});
    const handleScroll = () => { 
        const scrollRealY = window.scrollY
        if(print.value) console.log(scrollRealY)
        const scrollUpToBottom = scrollRealY > scrollY.value
        scrollList.value.forEach((item)=>{
            const y = size.chooseCorrectUp(item.xly,item.lgy,item.mdy,item.smy,item.xsy);
            if((!item.oneTime.is || !item.oneTime.done) && ((item.direction === 'utb' && scrollUpToBottom && 
                y >= scrollY.value && y <= scrollRealY) ||
            (item.direction === 'btu' && !scrollUpToBottom && 
                y <= scrollY.value && y >= scrollRealY) ||
            (item.direction === 'both' && 
                ((y >= scrollY.value && y <= scrollRealY) || 
                ( y <= scrollY.value && y >= scrollRealY))))){
                    if(item.oneTime.is) item.oneTime.done = true;
                    item.func()
                }
        })
        scrollY.value = window.scrollY;
    }
    const register = (y: {xl?: number, lg?: number, md?: number, sm?: number, xs: number}, func: Function, direction: "utb" | "btu" | "both" = "utb", oneTime: boolean = true) => 
        scrollList.value.push({xly: y.xl,lgy: y.lg, mdy: y.md, smy: y.sm, xsy: y.xs, func: func, direction: direction, oneTime: { is: oneTime , done: false }})

    return { register, enablePrint, scrollData }
})