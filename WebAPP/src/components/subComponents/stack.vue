<script setup lang="ts">
import { onBeforeMount, onBeforeUpdate, onMounted, ref } from 'vue'
const defaultDirection = 'column'
const defaultJustifyContent = 'flex-start'
const defaultAlignItems = 'flex-start'
const props = defineProps({
  direction: { type: String, default: defaultDirection },
  justifyContent: { type: String, default: defaultJustifyContent },
  alignItems: { type: String, default: defaultAlignItems },
  class: { type: String, default: '' }
})
const directionPossibleValues = ['column', 'row', 'column-reverse', 'row-reverse']
const justifyContentPossibleValues = [
  'flex-start',
  'center',
  'flex-end',
  'space-between',
  'space-around',
  'space-evenly'
]
const alignItemsPossibleValues = ['flex-start', 'center', 'flex-end', 'stretch', 'baseline']
const classes = ref<string[]>([])
const updateStack = () => {
  let direction = props.direction,
    justifyContent = props.justifyContent,
    alignItems = props.alignItems

  classes.value = []

  if (directionPossibleValues.includes(props.direction)) {
    direction = props.direction
  }

  if (justifyContentPossibleValues.includes(props.justifyContent)) {
    justifyContent = props.justifyContent
  }

  if (alignItemsPossibleValues.includes(props.alignItems)) {
    alignItems = props.alignItems
  }

  classes.value.push(`flex-direction-${direction}`)
  classes.value.push(`justify-content-${justifyContent}`)
  classes.value.push(`align-items-${alignItems}`)
  classes.value = classes.value.concat(props.class.split(' '))
}

onBeforeUpdate(updateStack)
onBeforeMount(updateStack)
</script>
<template>
  <div class="stack" :class="classes">
    <slot></slot>
  </div>
</template>
