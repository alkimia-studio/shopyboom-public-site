<script setup lang="ts">
import { useSizeStore, sizeType } from '@/helper/widthHandler'

const props = defineProps({
  class: { type: String, default: '' },
  src: { type: String, required: true }
})
const size = useSizeStore()
</script>
<template>
  <div :class="props.class" class="banner1 width-100p backgroundapp-color-11">
    <div
      class="banner1-image width-100p position-absolute"
      :style="{ backgroundImage: `url(${props.src})` }"
    ></div>
    <div class="position-relative">
      <Stack
        :class="
          size.biggerThan(sizeType.md) ? 'pt40' : size.biggerThan(sizeType.sm) ? 'pt30' : size.biggerThan(sizeType.xs) ? 'pt35' : 'pt25'
        "
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <slot></slot>
      </Stack>
    </div>
  </div>
</template>
