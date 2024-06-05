<script setup lang="ts">
const props = defineProps({
    text: { type: String, required: true }
})
</script>
<template>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="407" height="200" viewBox="0 0 407 200">
    <defs>
      <filter id="Rectangle_230" x="0" y="0" width="407" height="200" filterUnits="userSpaceOnUse">
        <feOffset dy="3" input="SourceAlpha"/>
        <feGaussianBlur stdDeviation="22.5" result="blur"/>
        <feFlood flood-opacity="0.349"/>
        <feComposite operator="in" in2="blur"/>
        <feComposite in="SourceGraphic"/>
      </filter>
    </defs>
    <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Rectangle_230)">
      <rect id="Rectangle_230-2" data-name="Rectangle 230" width="272" height="65" rx="32.5" transform="translate(67.5 64.5)" fill="#333"/>
    </g>
    <path id="Icon_material-timer" data-name="Icon material-timer" d="M22.5,1.5h-9v3h9ZM16.5,21h3V12h-3Zm12.045-9.915,2.13-2.13A16.573,16.573,0,0,0,28.56,6.84L26.43,8.97a13.5,13.5,0,1,0,2.115,2.115ZM18,30A10.5,10.5,0,1,1,28.5,19.5,10.492,10.492,0,0,1,18,30Z" transform="translate(84.5 78.75)" fill="#fffcf6"/>
    <text class="font-1" id="Title_PLATFORM:MOBILE_TAG:H4_" data-name="Title [PLATFORM:MOBILE][TAG:H4]" transform="translate(133.5 81.5)" fill="#fffcf6" font-size="24"><tspan x="0" y="26">{{ props.text }}</tspan></text>
  </svg>
</template>