<script setup lang="ts">
import AstronautJSON from '@/helper/anim.json'
import AstronautJSON2 from '@/helper/anim2.json'
</script>
<template>
    <Vue3Lottie class="mt30" :animationData="AstronautJSON" :height="2016" :width="1920" />
    <Vue3Lottie class="mt30" :animationData="AstronautJSON2" :height="2016" :width="1920" />
</template>