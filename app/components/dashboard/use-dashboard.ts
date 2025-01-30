import { defineStore } from "pinia";

export const useDashboardStore = defineStore("dashboard", () => {
  const open = ref(false);
  const rightPanelWidth = computed(() => (open.value ? 400 : 0));

  return {
    open,
    rightPanelWidth,
  };
});
