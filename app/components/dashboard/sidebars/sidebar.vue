<template>
  <UDashboardPanel
    :style="{
      width: `${leftPanelWidth}px`,
      transition: 'width 0.3s ease-in-out',
    }"
    collapsible
    :side="side"
    :resizable="{ min: isCollapsed ? 80 : 80, max: isCollapsed ? 80 : 400 }"
  >
    <UDashboardNavbar>
      <template #left v-if="isWideScreen">
        <ClientOnly v-if="!isCollapsed">
          <svg
            class="h-12 fill-gray-700 dark:fill-gray-200"
            viewBox="0 0 30 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="logo-brand"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.7207 6.18211L14.9944 3.11148L3.46855 9.28678L0.579749 7.73444L14.9944 0L23.6242 4.62977L20.7207 6.18211ZM14.9996 12.3574L26.5182 6.1821L29.4216 7.73443L14.9996 15.4621L6.37724 10.8391L9.27337 9.28677L14.9996 12.3574ZM2.89613 16.572L0 15.0196V24.2656L14.4147 32V28.8953L2.89613 22.7132V16.572ZM11.5185 18.09L0 11.9147V8.81001L14.4147 16.5376V25.7904L11.5185 24.2312V18.09ZM24.2086 15.0194V11.9147L15.5788 16.5377V31.9998L18.475 30.4474V18.09L24.2086 15.0194ZM27.0969 22.7129V10.3623L30.0004 8.81V24.2653L21.3706 28.895V25.7904L27.0969 22.7129Z"
            />
          </svg>
        </ClientOnly>
      </template>

      <template #right v-if="isCollapsable && isWideScreen">
        <UButton
          v-if="!isCollapsed"
          color="gray"
          variant="soft"
          :icon="
            side === 'left'
              ? 'i-line-md:menu-unfold-left'
              : 'i-line-md:menu-unfold-right'
          "
          @click="isCollapsed = !isCollapsed"
        />
      </template>
      <template #center v-if="isCollapsable && isWideScreen">
        <UButton
          v-if="isCollapsed"
          color="gray"
          variant="soft"
          :icon="
            side === 'left'
              ? 'i-line-md:menu-unfold-right'
              : 'i-line-md:menu-unfold-left'
          "
          @click="isCollapsed = !isCollapsed"
        />
      </template>
      <template #toggle>
        <UDashboardNavbarToggle
          icon="i-line-md:menu-unfold-left"
          class="text-gray-500 hover:text-gray-500"
        />
      </template>
    </UDashboardNavbar>
    <UDashboardSidebar
      :ui="{
        footer: 'flex justify-center',
      }"
    >
      <template #header v-if="!isCollapsed">
        <!-- Place anything you like here -->
        <UDashboardSearchButton />
      </template>
      <UDashboardSidebarLinks v-if="!isCollapsed" />
      <template #footer>
        <!-- Place anything you like here -->
        <DashboardSidebarsUser :calapsed="isCollapsed" />
      </template>
    </UDashboardSidebar>
  </UDashboardPanel>
</template>

<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";

const props = withDefaults(
  defineProps<{
    isCollapsable?: boolean;
    initialCollapse?: boolean;
    side?: "left" | "right";
  }>(),
  {
    isCollapsable: false,
    initialCollapse: false,
    side: "left",
  }
);
const isCollapsed = ref(props.initialCollapse);
const leftPanelWidth = computed(() => (isCollapsed.value ? 80 : 300));
const { width } = useWindowSize();
const isWideScreen = computed(() => width.value >= 1024);

// Simplified watch that only handles manual collapse state
watch(
  width,
  (newWidth) => {
    if (newWidth >= 1024 && props.isCollapsable) {
      isCollapsed.value = false;
    }
  },
  { immediate: true }
);
</script>

<style scoped>
:deep(.dashboard-panel) {
  transition: width 0.3s ease-in-out;
}

/* Using classes */
:deep(.logo-brand) {
  fill: theme("colors.primary.500");
}

/* Dark mode variations */
.dark :deep(.logo-brand) {
  fill: theme("colors.white");
}
</style>
