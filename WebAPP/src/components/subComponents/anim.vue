<script setup lang="ts">
import { useScrollStore } from '@/helper/scrollHandler'
import { isNotEmpty } from '@/helper/validation';
import { onBeforeMount, ref } from 'vue';

const scroll=  useScrollStore()
const props = defineProps({
  class: { type: String, default: '' },
  page: { type: String, required: true },
  part: { type: String, required: true },
  comp: { type: String, required: true }
})
const classes = ref('');
onBeforeMount(()=>{
  const data = scroll.scrollData[props.page][props.part][props.comp];
  if(isNotEmpty(data.utb))
    scroll.register({xl: data.xly , lg: data.lgy, md: data.mdy, sm: data.smy, xs:  data.xsy }, ()=> { classes.value = data.utb } , "utb", data.onetime);
  if(isNotEmpty(data.btu))
    scroll.register({xl: data.xly , lg: data.lgy, md: data.mdy, sm: data.smy, xs:  data.xsy }, ()=> { classes.value = data.btu } , "btu", data.onetime);
})
</script>
<template>
  <div :class="[classes,props.class]" class="anim">
    <slot></slot>
  </div>
</template>