<script setup lang="ts">
import { type PropType, type ButtonHTMLAttributes, ref } from 'vue'
const props = defineProps({
  class: { type: String, default: '' },
  type: { type: String as PropType<ButtonHTMLAttributes['type']>, default: 'button' },
  click: { type: Function },
  href: { type: String },
  background: { type: Number },
  border: { type: Number },
  hoverBackground: { type: Number },
  color: { type: Number },
  hoverColor: { type: Number }
})
const hover = ref(false)
const onClick = () => {
  if (props.click !== undefined) {
    props.click()
  }
}
</script>
<template>
  <a v-if="props.href" :href="props.href" class="cursor-pointer width-inherit">
    <button @mouseover="hover = true" @mouseleave="hover = false" class="button1" :class="[
      ...props.class.split(' '),
      `borderapp-color-${props.border}`,
      hover && props.hoverBackground !== undefined
        ? `backgroundapp-color-${props.hoverBackground}`
        : `backgroundapp-color-${props.background}`,
      hover && props.hoverColor !== undefined
        ? `textapp-color-${props.hoverColor}`
        : `textapp-color-${props.color}`
    ]" :type="props.type" @click="() => {
          onClick()
        }
        ">
      <Stack direction="row" justifyContent="center" alignItems="center">
        <slot></slot>
      </Stack>
    </button>
  </a>
  <button @mouseover="hover = true" @mouseleave="hover = false" class="button1" v-else :class="[
    ...props.class.split(' '),
    `borderapp-color-${props.border}`,
    hover && props.hoverBackground !== undefined
      ? `backgroundapp-color-${props.hoverBackground}`
      : `backgroundapp-color-${props.background}`,
    hover && props.hoverColor !== undefined
      ? `textapp-color-${props.hoverColor}`
      : `textapp-color-${props.color}`
  ]" :type="props.type" @click="() => {
        onClick()
      }
      ">
    <Stack direction="row" justifyContent="center" alignItems="center">
      <slot></slot>
    </Stack>
  </button>
</template>
