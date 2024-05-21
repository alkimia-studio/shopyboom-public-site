<script setup lang="ts">
const route = useRoute()

// When accessing /posts/1, route.params.id will be 1
console.log(route.params)
</script>
<template>
    <div>
      <h1>1</h1>
      <AppAlert>
        This is an auto-imported component
      </AppAlert>
    </div>
  </template>