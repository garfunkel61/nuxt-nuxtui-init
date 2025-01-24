<template>
  <AuthConfirmBox />
</template>

<script setup lang="ts">
definePageMeta({
  layout: "auth",
});

// Get access to route object
const route = useRoute();

console.log("route", route.query);
</script>
