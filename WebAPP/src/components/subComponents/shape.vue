<script setup lang="ts">
import { useSizeStore } from '@/helper/widthHandler'
import { useShapeStore } from '@/helper/shapeHandler'
const shapeStore = useShapeStore()

const props = defineProps({
  class: { type: String, default: '' },
  page: { type: String, required: true },
  part: { type: String, required: true },
  shapeName: { type: String, required: true },
  stickV: { type: String as () => 'left' | 'right' | 'center', default: 'left' },
  stickH: { type: String as () => 'top' | 'bottom' | 'center', default: 'top' }
})
const size = useSizeStore()
</script>
<template>
  <div
    class="height-inherit shape"
    :style="{
      transform:
        'translate(' +
        'calc(' +
        (props.stickV === 'center' ? -50 : 0) +
        '% + (' +
        size.chooseCorrectUp(
          shapeStore.shapes[props.page][props.part][props.shapeName].xl.x,
          shapeStore.shapes[props.page][props.part][props.shapeName].lg.x,
          shapeStore.shapes[props.page][props.part][props.shapeName].md.x,
          shapeStore.shapes[props.page][props.part][props.shapeName].sm.x,
          shapeStore.shapes[props.page][props.part][props.shapeName].xs.x
        ) +
        'px)),' +
        'calc(' +
        (props.stickH === 'center' ? -50 : 0) +
        '% + (' +
        size.chooseCorrectUp(
          shapeStore.shapes[props.page][props.part][props.shapeName].xl.y,
          shapeStore.shapes[props.page][props.part][props.shapeName].lg.y,
          shapeStore.shapes[props.page][props.part][props.shapeName].md.y,
          shapeStore.shapes[props.page][props.part][props.shapeName].sm.y,
          shapeStore.shapes[props.page][props.part][props.shapeName].xs.y
        ) +
        'px))',
      width:
        size.chooseCorrectUp(
          shapeStore.shapes[props.page][props.part][props.shapeName].xl.w,
          shapeStore.shapes[props.page][props.part][props.shapeName].lg.w,
          shapeStore.shapes[props.page][props.part][props.shapeName].md.w,
          shapeStore.shapes[props.page][props.part][props.shapeName].sm.w,
          shapeStore.shapes[props.page][props.part][props.shapeName].xs.w
        ) + 'px'
    }"
    :class="[
      props.stickV === 'center' ? 'center-left' : props.stickV,
      props.stickH === 'center' ? 'center-top' : props.stickH,
      props.class
    ]"
  >
    <slot></slot>
  </div>
</template>
