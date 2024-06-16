<script setup lang="ts">
import { useScrollStore } from '@/helper/scrollHandler'
import { isNotEmpty } from '@/helper/validation';
import { onBeforeMount, ref } from 'vue';

const scroll = useScrollStore()
const props = defineProps({
  when: { type: String as () => 'scroll' | 'loop' , default: "scroll"},
  class: { type: String, default: '' },
  scrollPage: { type: String },
  scrollPart: { type: String },
  scrollComp: { type: String }
})
const classes = ref('');
onBeforeMount(()=>{
  if(props.when === 'scroll' && props.scrollPage !== undefined && 
  props.scrollPart !== undefined && props.scrollComp !== undefined){
    const data = scroll.scrollData[props.scrollPage][props.scrollPart][props.scrollComp];
    if(isNotEmpty(data.utb))
      scroll.register({xl: data.xly , lg: data.lgy, md: data.mdy, sm: data.smy, xs:  data.xsy }, ()=> { classes.value = data.utb } , "utb", data.onetime);
    if(isNotEmpty(data.btu))
      scroll.register({xl: data.xly , lg: data.lgy, md: data.mdy, sm: data.smy, xs:  data.xsy }, ()=> { classes.value = data.btu } , "btu", data.onetime);
  }
})
</script>
<template>
  <div :class="[classes,props.class, { 'anim-loop' : props.when === 'loop' }]" class="anim">
    <slot></slot>
  </div>
</template>