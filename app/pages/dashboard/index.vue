<template>
  <div>
    <DashboardDeckToolbar />
    <DashboardDeck />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
  middleware: ["auth"],
});
</script>
