<script setup lang="ts">
const props = defineProps({
    text: { type: String, required: true },
    font: { type: Number, required: true },
    color: { type: Number, required: true }
})
</script>
<template>
    <svg xmlns="http://www.w3.org/2000/svg" width="183" height="62" viewBox="0 0 183 62">
        <text id="Title_PLATFORM:MOBILE_TAG:H4_" :class="[`font-${props.font}`,`fillapp-color-${props.color}`]" font-size="42" data-name="Title [PLATFORM:MOBILE][TAG:H4]" font-weight="800"><tspan x="0" y="44">{{ text }}</tspan></text>
    </svg>
</template>
  