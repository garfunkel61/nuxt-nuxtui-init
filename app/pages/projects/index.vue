<template>
  <div>
    <h1 class="text-2xl font-bold text-center">Projects</h1>
    <ProjectsList />
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});
</script>
