<script setup lang="ts">
import { useSizeStore } from '@/helper/widthHandler';
import { ref } from 'vue';
const props = defineProps({
  class: { type: String, default: '' },
  color: { type: Number, default: -1 },
  hover: { type: Number },
  xlw: Number,
  lgw: Number,
  mdw: Number,
  smw: Number,
  xsw: { type: Number, default: 48 }, // font default is smaller one , so xs ,sm , md, lg, xl
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
  :style="{'width' : size.chooseCorrectUp(xlw,lgw,mdw,smw,xsw) + 'px'}">
        <slot></slot>
    </Stack>
</template>