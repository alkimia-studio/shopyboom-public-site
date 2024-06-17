<script setup lang="ts">
import { useScrollStore } from '@/helper/scrollHandler'
import { isNotEmpty, isPositiveNumber } from '@/helper/validation';
import { triggerAsyncId } from 'async_hooks';
import { count } from 'console';
import { onBeforeMount, ref } from 'vue';
enum animTypeEnum { in, out }
const scroll = useScrollStore()
const props = defineProps({
  class: { type: String, default: '' },
  when: { type: String as () => 'scroll' | 'hover' | 'pageload' , default: "scroll"},
  in: { type: String, default: '' },
  out: { type: String, default: '' },
  count: { type: [Number, String ] , default: 'inf' },
  scrollXl: Number,
  scrollLg: Number,
  scrollMd: Number,
  scrollSm: Number,
  scrollXs: Number,
})
const animClasses = ref<string[]>([]);
const countPassed = ref(0)
const doAnimCount = (animType: animTypeEnum) : boolean => {
  if(props.count === 'inf') return true
  const cnt = typeof(props.count) === 'number' ? props.count as number :
  isPositiveNumber(props.count) ? +props.count : 0
  if(props.count !== 'inf' && countPassed.value <= cnt){
    if(!(isNotEmpty(props.out) && animType === animTypeEnum.in)){
      countPassed.value = countPassed.value + 1
    }
    return true
  }
  return false
}
onBeforeMount(()=>{
  if(props.when === 'pageload'){
    animClasses.value.push('anim-loop')
    doAnim(animTypeEnum.in)
  }
  if(props.in.startsWith('animate__') || props.out.startsWith('animate__')){
    animClasses.value.push('animate__animated')
  }
})

const doAnim = (animType: animTypeEnum) => {
  if(doAnimCount(animType)){
    switch (animType) {
      case animTypeEnum.in:
        animClasses.value = animClasses.value.filter(x=> x !== props.out)
        if(animClasses.value.find(x=> x === props.in) === undefined)
          animClasses.value.push(props.in)
        break;
      case animTypeEnum.out:
        animClasses.value = animClasses.value.filter(x=> x !== props.in)
        if(animClasses.value.find(x=> x === props.out) === undefined)
          animClasses.value.push(props.out)
    }
  }
}
onBeforeMount(()=>{
  if(props.when === 'scroll'){
    if(isNotEmpty(props.in))
      scroll.register({xl: props.scrollXl , lg: props.scrollLg, md: props.scrollMd, sm: props.scrollSm, xs:  props.scrollXs }, ()=> { doAnim(animTypeEnum.in) } , "utb");
    if(isNotEmpty(props.out))
      scroll.register({xl: props.scrollXl , lg: props.scrollLg, md: props.scrollMd, sm: props.scrollSm, xs:  props.scrollXs }, ()=> { doAnim(animTypeEnum.out) } , "btu");
  }
})
</script>
<template>
  <div @mouseover="doAnim(animTypeEnum.in)" @mouseleave="doAnim(animTypeEnum.out)" :class="[props.class,animClasses]" class="anim">
    <slot></slot>
  </div>
</template>