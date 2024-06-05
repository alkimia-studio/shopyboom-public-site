<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="default-theme">
    <Header></Header>
    <RouterView />
    <notifications position="bottom right"  />
    <!-- <Footer></Footer> -->
  </div>
</template>
