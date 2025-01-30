<template>
  <UDashboardLayout>
    <DashboardSidebarsSidebar
      :is-collapsable="true"
      initialCollaps="false"
      side="left"
    />
    <UDashboardPanel grow>
      <UDashboardNavbar>
        <template #left>
          <DashboardToolbar />
        </template>
        <template #right>
          <DashboardToolbarSide />
        </template>
      </UDashboardNavbar>
      <slot />
    </UDashboardPanel>
  </UDashboardLayout>
</template>

<script setup lang="ts"></script>

<style lang="postcss">
body {
  font-family: "Inter";
}
body {
  @apply dark:bg-gray-900 bg-white;
}
</style>
