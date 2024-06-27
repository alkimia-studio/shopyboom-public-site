<script setup lang="ts">
import { useScrollStore } from '@/helper/scrollHandler'
import { isNotEmpty, isPositiveNumber } from '@/helper/validation'
import { computed, onBeforeMount, onMounted, ref } from 'vue'
enum animTypeEnum {in,out}
const scroll = useScrollStore()
const props = defineProps({
  class: { type: String, default: '' },
  when: { type: String as () => 'scroll' | 'hover' | 'pageload', default: 'scroll' },
  in: { type: String, default: '' },
  out: { type: String, default: '' },
  count: { type: [Number, String], default: 'inf' },
  delay: { type: [Number, String], default: '0' },
  autoScrollOffset: { type: [Number,String], default: 0 },
})
const animClasses = ref<string[]>([])
const countPassed = ref(0)
const autoScrollOffsetNumber = computed(()=> typeof(props.autoScrollOffset) === "string" ? +props.autoScrollOffset as number : props.autoScrollOffset as number)
const doAnimCount = (animType: animTypeEnum): boolean => {
  if (props.count === 'inf') return true
  const cnt =
    typeof props.count === 'number'
      ? (props.count as number)
      : isPositiveNumber(props.count)
        ? +props.count
        : 0
  if (props.count !== 'inf' && countPassed.value <= cnt) {
    if (!(isNotEmpty(props.out) && animType === animTypeEnum.in)) {
      countPassed.value = countPassed.value + 1
    }
    return true
  }
  return false
}
const doAnim = (animType: animTypeEnum) => {
  if (doAnimCount(animType)) {
    switch (animType) {
      case animTypeEnum.in:
        animClasses.value = animClasses.value.filter((x) => x !== props.out)
        if (animClasses.value.find((x) => x === props.in) === undefined)
          animClasses.value.push(props.in)
        break
      case animTypeEnum.out:
        animClasses.value = animClasses.value.filter((x) => x !== props.in)
        if (animClasses.value.find((x) => x === props.out) === undefined)
          animClasses.value.push(props.out)
    }
  }
}
onBeforeMount(() => {
  if (props.when === 'pageload') {
    if (props.count === 'inf') animClasses.value.push('anim-loop')
    doAnim(animTypeEnum.in)
  }
  if (props.in.startsWith('animate__') || props.out.startsWith('animate__')) {
    animClasses.value.push('animate__animated')
  }
})
const animElement = ref()
onMounted(()=>{
  if(props.when === 'scroll'){
    const elem = animElement.value as HTMLElement
    if (isNotEmpty(props.in))
      scroll.registerAuto(elem,autoScrollOffsetNumber.value,() => {doAnim(animTypeEnum.in)},'utb')
    if (isNotEmpty(props.out))
      scroll.registerAuto(elem,autoScrollOffsetNumber.value,() => {doAnim(animTypeEnum.out)},'btu')
  }
})
</script>
<template>
  <div ref="animElement"
    @mouseover="props.when === 'hover' ? doAnim(animTypeEnum.in) : null"
    @mouseleave="props.when === 'hover' ? doAnim(animTypeEnum.out) : null"
    :style="[
      props.when === 'pageload' && props.count !== 'inf'
        ? { animationIterationCount: props.count }
        : '',
      { animationDelay: `${props.delay ?? 0}ms` }
    ]"
    :class="[props.class, animClasses]"
    class="anim">
    <slot></slot>
  </div>
</template>
