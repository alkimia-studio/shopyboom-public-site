import data from '@/helper/data.json'
import { ref } from 'vue'
import { defineStore } from 'pinia'
export const useSliderPeople = defineStore('sliderPeople', () => {
  const enableId = ref(1)
  const items = ref(data.people.items)
  changeEverySeconds(15)
  function changeEverySeconds(seconds: number = 15) {
    setInterval(() => {
      items.value.forEach((x) => (x.disabled = true))
      const elemIndex = items.value.findIndex((x) => x.id === enableId.value)
      items.value[elemIndex].disabled = false
      if (enableId.value === data.people.items.length) {
        enableId.value = 1
      } else {
        enableId.value = enableId.value + 1
      }
    }, seconds * 1000)
  }
  function getSliderPeoples() {
    return items.value
  }
  return { getSliderPeoples }
})
