<script setup lang="ts">
import { useSizeStore } from '@/helper/widthHandler';
import { Cordinate } from '@/helper/model';

const props = defineProps({
  class: { type: String, default: '' },
  xlh: Number,
  lgh: Number,
  mdh: Number,
  smh: Number,
  xsh: { type: Number, required: true },
})
const size = useSizeStore()
</script>
<template>
    <div class="shape container" :style="{'min-height': size.chooseCorrectUp(xlh, lgh, mdh, smh, xsh) + 'px' }">
      <slot></slot>
    </div>
</template>