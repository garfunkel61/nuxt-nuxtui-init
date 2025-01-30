<template>
  <UDashboardPanel
    :style="{
      width: `${dashboardStore.rightPanelWidth}px`,
      borderWidth: dashboardStore.open ? undefined : 0,
      borderRightWidth: 0,
      transition: 'all 0.3s ease-in-out',
    }"
    :width="400"
    position="right"
    :class="dashboardStore.open ? 'border-l' : ''"
  >
    <UDashboardNavbar>
      <template #left>
        <h1 class="font-bold">AI Panel</h1>
      </template>
      <template #right>
        <UButton
          icon="i-heroicons-x-mark"
          color="gray"
          variant="ghost"
          @click="dashboardStore.open = false"
        />
      </template>
    </UDashboardNavbar>
    <div class="p-4">AI Panel content goes here</div>
  </UDashboardPanel>
</template>

<script setup lang="ts">
import { useDashboardStore } from "@/components/dashboard/use-dashboard";

const dashboardStore = useDashboardStore();
</script>
