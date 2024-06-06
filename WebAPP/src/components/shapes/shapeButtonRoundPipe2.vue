<script setup lang="ts">
const props = defineProps({
    text: { type: String, required: true }
})
</script>
<template>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="538" height="200" viewBox="0 0 538 200">
  <defs>
    <filter id="Rectangle_238" x="0" y="0" width="538" height="200" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="22.5" result="blur"/>
      <feFlood flood-opacity="0.349"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Rectangle_239)">
    <rect id="Rectangle_239-2" data-name="Rectangle 238" width="403" height="65" rx="32.5" transform="translate(67.5 64.5)" fill="#333"/>
  </g>
  <text class="font-1" id="Title_PLATFORM:MOBILE_TAG:H4_" data-name="Title [PLATFORM:MOBILE][TAG:H4]" transform="translate(133.5 81.5)" fill="#fffcf6" font-size="24" ><tspan x="0" y="26">{{ props.text }}</tspan></text>
  <path id="Icon_awesome-magic" data-name="Icon awesome-magic" d="M13.235,5.672l.945-1.891,1.891-.945L14.18,1.891,13.235,0l-.945,1.891L10.4,2.836l1.891.945ZM4.727,9.453,6.3,6.3,9.453,4.727,6.3,3.151,4.727,0,3.151,3.151,0,4.727,3.151,6.3Zm20.8,7.563-1.575,3.151L20.8,21.743l3.151,1.576,1.575,3.151L27.1,23.318l3.151-1.576L27.1,20.167ZM29.7,5.567,24.683.554a1.889,1.889,0,0,0-2.674,0L.554,22.01a1.89,1.89,0,0,0,0,2.674L5.567,29.7a1.891,1.891,0,0,0,2.674,0L29.7,8.24A1.889,1.889,0,0,0,29.7,5.567Zm-8.459,6.454L18.23,9.013,23.346,3.9,26.354,6.9l-5.117,5.117Z" transform="translate(89 81.5)" fill="#fffcf6"/>
</svg>
</template>