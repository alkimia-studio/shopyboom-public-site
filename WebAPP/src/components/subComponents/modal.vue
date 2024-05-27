<script setup lang="ts">
import { type StyleValue, onBeforeMount, onBeforeUpdate, ref } from 'vue'
const props = defineProps({
  class: { type: String, default: '' },
  open: Boolean,
  backgroundColor: { type: Number, required: true },
  borderColor: { type: Number, required: true },
  border: { type: Number, default: 2 },
  width: { type: Number, default: 50 },
  position: { type: String as () => 'top' | 'bottom' | 'center', default: 'center' },
  locationHorizontally: { type: Number, default: 0 }
})
const classes = ref<String[]>([])
const contentStyle = ref<StyleValue>()
const updateModel = () => {
  classes.value = []
  classes.value.push('modalapp-position-' + props.position)
  classes.value.push('backgroundapp-color-' + props.backgroundColor)
  classes.value.push('borderapp-color-' + props.borderColor)
  let topValue = '',
    bottomValue = ''
  switch (props.position) {
    case 'center':
      topValue = `calc(50% + ${props.locationHorizontally}px)`
      break
    case 'top':
      topValue = `${props.locationHorizontally}px`
      break
    case 'bottom':
      bottomValue = `${props.locationHorizontally}px`
      break
  }
  contentStyle.value = {
    width: `${props.width}%`,
    top: topValue,
    bottom: bottomValue,
    border: `${props.border}px solid`
  }
}
onBeforeMount(updateModel)
onBeforeUpdate(updateModel)
</script>
<template>
  <div class="modalapp" :class="[...props.class.split(' '), props.open ? 'open' : '']">
    <div class="modalapp-content" :class="classes" :style="contentStyle">
      <slot></slot>
    </div>
  </div>
</template>
