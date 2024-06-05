<script setup lang="ts">
import { useSizeStore, sizeType } from '@/helper/widthHandler'

const props = defineProps({
  class: { type: String, default: '' },
  src: { type: String, required: true },
  opacity: { type: Number, default: 1 }
})
const size = useSizeStore()
</script>
<template>
  <div :class="props.class" class="banner1 width-100p">
    <div
      class="banner1-image width-100p position-absolute"
      :style="{ backgroundImage: `url(${props.src})` , 'opacity': props.opacity}"
    ></div>
    <div class="position-relative">
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"s>
        <slot></slot>
      </Stack>
    </div>
  </div>
</template>
