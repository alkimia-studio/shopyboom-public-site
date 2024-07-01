import { ref } from 'vue'
import { defineStore } from 'pinia'
import shapeLastData from '@/helper/shapeLastData.json'

export const useShapeStore = defineStore('shape', () => {
  const shapes = ref()
  const changeLocOffset1 = 100;
  const init = () => {
    shapes.value = shapeLastData
  }
  const changeLoc = (dir: "y"| "x", page: string, part: string, shape: string, plus: boolean = true, offset: number = changeLocOffset1) => {
    const sizes = ['xl','lg','md','sm','xs']
    if(plus) for (const size of sizes) shapes.value[page][part][shape][size][dir] += offset
    else for (const size of sizes) shapes.value[page][part][shape][size][dir] -= offset
  } 
  init()
  return { shapes, changeLoc }
})
