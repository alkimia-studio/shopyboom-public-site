import { ref } from 'vue'
import { defineStore } from 'pinia'
import shapeinitData from '@/helper/shapeinitData.json'

export const useShapeStore = defineStore('shape', () => {
  const shapes = ref()
  const init = () => {
    shapes.value = shapeinitData
  }
  init()
  return { shapes }
})
