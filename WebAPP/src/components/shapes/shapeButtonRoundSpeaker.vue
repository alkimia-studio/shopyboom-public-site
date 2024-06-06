<script setup lang="ts">
const props = defineProps({
    text: { type: String, required: true }
})
</script>
<template>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="516" height="200" viewBox="0 0 516 200">
  <defs>
    <filter id="Rectangle_246" x="0" y="0" width="516" height="200" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="22.5" result="blur"/>
      <feFlood flood-opacity="0.349"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Rectangle_246-2)">
    <rect id="Rectangle_246-2" data-name="Rectangle 246" width="381" height="65" rx="32.5" transform="translate(67.5 64.5)" fill="#333"/>
  </g>
  <text class="font-1 bold" id="Title_PLATFORM:MOBILE_TAG:H4_" data-name="Title [PLATFORM:MOBILE][TAG:H4]" transform="translate(165.5 81.5)" fill="#fffcf6" font-size="24" font-weight="800"><tspan x="0" y="25">{{ text }}</tspan></text>
  <g id="Icon_ionic-md-megaphone" data-name="Icon ionic-md-megaphone" transform="translate(95.361 72.867)">
    <path id="Path_118" data-name="Path 118" d="M27.671,10.083,25.242,12.5a8.556,8.556,0,0,1,0,12.114l2.429,2.429a12,12,0,0,0,0-16.962Z" transform="translate(11.395 2.209)" fill="#fffcf6"/>
    <path id="Path_119" data-name="Path 119" d="M30.9,6.961,28.512,9.348a15.233,15.233,0,0,1,0,21.515L30.9,33.251a18.584,18.584,0,0,0,0-26.29Z" transform="translate(13.015 0.662)" fill="#fffcf6"/>
    <path id="Path_120" data-name="Path 120" d="M32.536,16.572V5.625H29.171l-10.1,8.413H5.615L2.25,15.72V27.5l3.365,1.683,8.413,13.46h5.048l-3.155-13.46h3.155l10.1,6.73h3.365V24.964a3.984,3.984,0,0,0,3.365-4.2A3.984,3.984,0,0,0,32.536,16.572Z" transform="translate(0 0)" fill="#fffcf6"/>
  </g>
</svg>



</template>