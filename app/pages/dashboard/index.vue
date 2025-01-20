<template>
  <div>
    <h1 class="text-2xl font-bold text-center">Dashboard</h1>
    <DashboardList v-if="true" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});
</script>
