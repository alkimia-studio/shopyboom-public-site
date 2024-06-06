<script setup lang="ts">
const props = defineProps({
    text: { type: String, required: true }
})
</script>
<template>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="407" height="200" viewBox="0 0 407 200">
  <defs>
    <filter id="Rectangle_246" x="0" y="0" width="407" height="200" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="22.5" result="blur"/>
      <feFlood flood-opacity="0.349"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Rectangle_246)">
    <rect id="Rectangle_246-2" data-name="Rectangle 246" width="272" height="65" rx="32.5" transform="translate(67.5 64.5)" fill="#333"/>
  </g>
  <text class="font-1 bold" id="Title_PLATFORM:MOBILE_TAG:H4_" data-name="Title [PLATFORM:MOBILE][TAG:H4]" transform="translate(133.5 81.5)" fill="#fffcf6" font-size="24" font-weight="800"><tspan x="0" y="25">{{ text }}</tspan></text>
  <path id="Icon_awesome-paint-brush" data-name="Icon awesome-paint-brush" d="M10.112,18.73a6.128,6.128,0,0,0-5.885,4.378.924.924,0,0,1-.883.6c-.673,0-2.752-1.675-3.345-2.08C0,26.618,2.3,31,7.75,31c4.593,0,7.75-2.65,7.75-7.277a5.246,5.246,0,0,0-.059-.553L10.112,18.73ZM27.724,0a3.7,3.7,0,0,0-2.435,1C12.913,12.052,11.625,12.312,11.625,15.566a5.605,5.605,0,0,0,.529,2.343l3.864,3.22a5.571,5.571,0,0,0,1.356.183c3.761,0,5.94-2.753,12.785-15.528A6.23,6.23,0,0,0,31,3,3.153,3.153,0,0,0,27.724,0Z" transform="translate(89.001 81.5)" fill="#fff"/>
</svg>
</template>