<script setup lang="ts">
import { useSizeStore } from '@/helper/widthHandler';
import { Cordinate } from '@/helper/model';

const props = defineProps({
  class: { type: String, default: '' },
  container: Boolean,
  xlw: Number,
  lgw: Number,
  mdw: Number,
  smw: Number,
  xsw: { type: Number, required: true },
  xlc: Cordinate,
  lgc: Cordinate,
  mdc: Cordinate,
  smc: Cordinate,
  xsc: { type: Cordinate, default: new Cordinate(0, 0) },
  stick: { type: String as () => 'left' | 'right' | 'center', default: 'left' },
})
const size = useSizeStore()
</script>
<template>
    <div v-if="props.container" class="shape container">
      <slot></slot>
    </div>
    <div v-else class="height-inherit shape" :style="{
      'transform': 'translate(' +
       'calc('+ (props.stick === 'center' ? -50 : 0) +'% + (' + size.chooseCorrectUp(xlc?.x, lgc?.x, mdc?.x, smc?.x, xsc.x) + 'px)),' +
        size.chooseCorrectUp(xlc?.y, lgc?.y, mdc?.y, smc?.y, xsc.y) + 'px)',
      'width': size.chooseCorrectUp(xlw, lgw, mdw, smw, xsw) + 'px'
    }" :class="[props.stick,props.class]" >
      <slot></slot>
    </div>
</template>