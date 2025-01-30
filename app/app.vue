<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active,
.layout-enter-active,
.layout-leave-active {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-enter-from,
.page-leave-to,
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.iconify.i-line-md\:menu-unfold-right {
  background-color: theme("colors.gray.500") !important;
}
</style>
