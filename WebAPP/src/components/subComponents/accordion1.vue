<script setup lang="ts">
import { ref } from 'vue'
import { PlusIcon, MinusIcon } from '@heroicons/vue/24/solid'
const props = defineProps({
  class: { type: String, default: '' },
  title: { type: String },
  active: { type: Boolean, default: false },
})
const active = ref(props.active)
const toogleActive = () => (active.value = !active.value)
</script>
<template>
  <Anim auto-scroll-offset="50" when="scroll" in="animate__fadeInUp  opacity-1" out="" count="1" class="opacity-0">
    <div class="accordion1 width-100p">
        <div class="accordion1-title hr1">
          <Stack
            @click="toogleActive"
            direction="row"
            justifyContent="space-between"
            alignItems="center">
            <Txt bold :font="1" :color="1" :xs="22">{{ title }}</Txt>
            <Appsvg v-if="!active" class="fillapp-color-1" :mdw="30" :lgw="50">
              <PlusIcon class="cursor-pointer" />
            </Appsvg>
            <Appsvg v-else class="fillapp-color-1" :mdw="30" :lgw="50">
              <MinusIcon class="cursor-pointer" />
            </Appsvg>
          </Stack>
        </div>
      <div class="accordion1-content mt8 pt2" :class="active ? 'active pb4' : ''">
        <slot></slot>
      </div>
    </div>
  </Anim>
</template>
