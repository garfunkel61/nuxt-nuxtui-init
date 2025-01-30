<template>
  <UTooltip text="Open AI tool">
    <UButton
      icon="line-md:compass-loop"
      color="gray"
      variant="soft"
      @click="dashboardStore.open = !dashboardStore.open"
    />
  </UTooltip>
</template>

<script setup lang="ts">
import { useDashboardStore } from "@/components/dashboard/use-dashboard";

const dashboardStore = useDashboardStore();
</script>
