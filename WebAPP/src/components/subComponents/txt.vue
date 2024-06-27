<script setup lang="ts">
import { onBeforeMount, onBeforeUpdate, ref } from 'vue'
const props = defineProps({
  class: { type: String, default: '' },
  font: { type: Number, required: true },
  color: { type: Number, required: true },
  lineHeight: { type: [Number, String], default: 'normal' },
  hover: { type: Number },
  textAlign: { type: String as () => 'left' | 'right' | 'center' | 'justify', default: 'left' },
  tag: { type: String as () => 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span', default: 'left' },
  bold: Boolean,
  uppercase: Boolean,
  underline: Boolean,
  xl: Number,
  lg: Number,
  md: Number,
  sm: Number,
  xs: { type: Number, default: 16 }, // font default is smaller one , so xs ,sm , md, lg, xl
  href: String
})
const hover = ref(false)
const classes = ref<String[]>()
const txtChange = () => {
  classes.value = props.class.split(' ')
  classes.value.push(`font-${props.font}`)
  if (props.bold) classes.value.push(`bold`)
  if (props.uppercase) classes.value.push(`uppercase`)
  if (props.underline) classes.value.push(`underline`)
  if (props.xl !== undefined) classes.value.push(`xlarge-font-size-${props.xl}`)
  if (props.lg !== undefined) classes.value.push(`large-font-size-${props.lg}`)
  if (props.md !== undefined) classes.value.push(`medium-font-size-${props.md}`)
  if (props.sm !== undefined) classes.value.push(`small-font-size-${props.sm}`)
  if (props.xs !== undefined) classes.value.push(`xsmall-font-size-${props.xs}`)
  classes.value.push(`font-size-${props.xs}`)
  classes.value.push(`text-align-${props.textAlign}`)
  classes.value.push(`line-height-${props.lineHeight}`)
}
onBeforeMount(txtChange)
onBeforeUpdate(txtChange)
</script>
<template>
  <span
    class="txt"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    v-if="props.href === undefined && props.tag === 'span'"
    :class="[
      classes,
      hover && props.hover !== undefined
        ? `textapp-color-${props.hover}`
        : `textapp-color-${props.color}`
    ]"
  >
    <slot></slot>
  </span>
  <h1
    class="txt"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    v-else-if="props.href === undefined && props.tag === 'h1'"
    :class="[
      classes,
      hover && props.hover !== undefined
        ? `textapp-color-${props.hover}`
        : `textapp-color-${props.color}`
    ]"
  >
    <slot></slot>
  </h1>
  <h2
    class="txt"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    v-else-if="props.href === undefined && props.tag === 'h2'"
    :class="[
      classes,
      hover && props.hover !== undefined
        ? `textapp-color-${props.hover}`
        : `textapp-color-${props.color}`
    ]"
  >
    <slot></slot>
  </h2>
  <h3
    class="txt"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    v-else-if="props.href === undefined && props.tag === 'h3'"
    :class="[
      classes,
      hover && props.hover !== undefined
        ? `textapp-color-${props.hover}`
        : `textapp-color-${props.color}`
    ]"
  >
    <slot></slot>
  </h3>
  <h4
    class="txt"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    v-else-if="props.href === undefined && props.tag === 'h4'"
    :class="[
      classes,
      hover && props.hover !== undefined
        ? `textapp-color-${props.hover}`
        : `textapp-color-${props.color}`
    ]"
  >
    <slot></slot>
  </h4>
  <h5
    class="txt"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    v-else-if="props.href === undefined && props.tag === 'h5'"
    :class="[
      classes,
      hover && props.hover !== undefined
        ? `textapp-color-${props.hover}`
        : `textapp-color-${props.color}`
    ]"
  >
    <slot></slot>
  </h5>
  <h6
    class="txt"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    v-else-if="props.href === undefined && props.tag === 'h6'"
    :class="[
      classes,
      hover && props.hover !== undefined
        ? `textapp-color-${props.hover}`
        : `textapp-color-${props.color}`
    ]"
  >
    <slot></slot>
  </h6>
  <a
    class="txt"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    v-else
    :class="[
      classes,
      hover && props.hover !== undefined
        ? `textapp-color-${props.hover}`
        : `textapp-color-${props.color}`
    ]"
    :href="props.href"
  >
  <slot></slot>
  </a>
</template>
