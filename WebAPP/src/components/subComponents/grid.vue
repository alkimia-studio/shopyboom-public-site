<script setup lang="ts">
import { onBeforeMount, onBeforeUpdate, ref } from 'vue'
const props = defineProps({
  container: Boolean,
  class: { type: String, default: '' },
  gap: { type: Number, default: 4 },
  xl: Number,
  lg: Number,
  md: Number,
  sm: Number,
  xs: Number,
  direction: { type: String as () => 'rtl' | 'ltr', default: 'ltr' }
})
const containerClasses = ref([''])
const itemClasses = ref<string[]>([])
const updateGrid = () => {
  containerClasses.value = ['grid', `direction-${props.direction}`]

  if (props.container && props.gap !== undefined)
    containerClasses.value.push(`grid-gap-${props.gap}`)

  itemClasses.value = []
  if (props.xl !== undefined && props.xl >= 1 && props.xl <= 20) {
    props.container
      ? containerClasses.value.push(`xlarge-grid-cols-${props.xl}`)
      : itemClasses.value.push(`xlarge-grid-column-${props.xl}`)
  }
  if (props.lg !== undefined && props.lg >= 1 && props.lg <= 20) {
    props.container
      ? containerClasses.value.push(`large-grid-cols-${props.lg}`)
      : itemClasses.value.push(`large-grid-column-${props.lg}`)
  }
  if (props.md !== undefined && props.md >= 1 && props.md <= 20) {
    props.container
      ? containerClasses.value.push(`medium-grid-cols-${props.md}`)
      : itemClasses.value.push(`medium-grid-column-${props.md}`)
  }
  if (props.sm !== undefined && props.sm >= 1 && props.sm <= 20) {
    props.container
      ? containerClasses.value.push(`small-grid-cols-${props.sm}`)
      : itemClasses.value.push(`small-grid-column-${props.sm}`)
  }
  if (props.xs !== undefined && props.xs >= 1 && props.xs <= 20) {
    props.container
      ? containerClasses.value.push(`xsmall-grid-cols-${props.xs}`)
      : itemClasses.value.push(`xsmall-grid-column-${props.xs}`)
  }
  containerClasses.value = containerClasses.value.concat(props.class.split(' '))
  itemClasses.value = itemClasses.value.concat(props.class.split(' '))
}
onBeforeMount(updateGrid)
onBeforeUpdate(updateGrid)
</script>
<template>
  <div v-if="container" :class="containerClasses">
    <slot></slot>
  </div>
  <div v-else :class="itemClasses">
    <slot></slot>
  </div>
</template>
