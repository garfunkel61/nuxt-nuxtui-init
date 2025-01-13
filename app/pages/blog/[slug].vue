<template>
  <div>
    <h1>Blog post: {{ slug }}</h1>
  </div>
</template>

<script setup lang="ts">
const { slug } = useRoute().params;
</script>
