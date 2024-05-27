<script setup lang="ts">
import { useSizeStore } from '@/helper/widthHandler';
import { ref } from 'vue';
const props = defineProps({
  class: { type: String, default: '' },
  xl: Number,
  lg: Number,
  md: Number,
  sm: Number,
  color: { type: Number, default: -1 },
  hover: { type: Number },
  width: { type: Number, default: 24 },
  xs: { type: Number, default: 1 }, // font default is smaller one , so xs ,sm , md, lg, xl
})
const hover = ref(false)
const size = useSizeStore()
</script>
<template>
<Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  @mouseover="hover = true" @mouseleave="hover = false" 
  class="svgapp" :class="[props.class,
  hover && props.hover !== undefined ? `fillapp-color-${props.hover}` : `fillapp-color-${props.color}`]" 
  :style="{'transform': 'scale(' + size.chooseCorrectUp(xl,lg,md,sm,xs) + ')', 'width' : width + 'px'}">
        <slot></slot>
    </Stack>
</template>