<template>
  <div
    class="bg-white dark:bg-gray-900 py-4 px-12 shadow flex items-center justify-between relative lg:static"
  >
    <svg
      class="h-12 fill-surface-700 dark:fill-surface-200"
      viewBox="0 0 30 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20.7207 6.18211L14.9944 3.11148L3.46855 9.28678L0.579749 7.73444L14.9944 0L23.6242 4.62977L20.7207 6.18211ZM14.9996 12.3574L26.5182 6.1821L29.4216 7.73443L14.9996 15.4621L6.37724 10.8391L9.27337 9.28677L14.9996 12.3574ZM2.89613 16.572L0 15.0196V24.2656L14.4147 32V28.8953L2.89613 22.7132V16.572ZM11.5185 18.09L0 11.9147V8.81001L14.4147 16.5376V25.7904L11.5185 24.2312V18.09ZM24.2086 15.0194V11.9147L15.5788 16.5377V31.9998L18.475 30.4474V18.09L24.2086 15.0194ZM27.0969 22.7129V10.3623L30.0004 8.81V24.2653L21.3706 28.895V25.7904L27.0969 22.7129Z"
      />
    </svg>
    <UButton
      icon="i-heroicons-bars-3"
      color="gray"
      variant="ghost"
      class="block lg:hidden"
      @click="isOpen = !isOpen"
    />
    <div
      :class="[
        'items-center grow justify-between lg:flex absolute lg:static w-full bg-white dark:bg-gray-900 left-0 top-full px-12 lg:px-0 z-50 shadow lg:shadow-none',
        isOpen ? 'flex' : 'hidden',
      ]"
    >
      <section />
      <ul
        class="list-none p-0 m-0 flex lg:items-center select-none flex-col lg:flex-row gap-2"
      >
        <li v-for="(item, index) in navItems" :key="index">
          <NuxtLink :to="item.to">
            <UButton
              :icon="item.icon"
              :label="item.label"
              color="gray"
              variant="ghost"
              class="w-full lg:w-auto"
            />
          </NuxtLink>
        </li>
      </ul>
      <div
        class="flex justify-between lg:block border-t lg:border-t-0 border-gray-200 dark:border-gray-800 py-4 lg:py-0 mt-4 lg:mt-0 gap-4"
      >
        <UButton label="Login" color="gray" variant="ghost" />
        <UButton label="Register" color="gray" />
      </div>
    </div>
  </div>
</template>

<script setup>
const isOpen = ref(false);

const navItems = [
  { to: "/", label: "Home", icon: "i-heroicons-home" },
  { to: "/blog", label: "Blog", icon: "i-heroicons-book-open" },
  { to: "/projects", label: "Projects", icon: "i-heroicons-code-bracket" },
  { to: "/about", label: "About", icon: "i-heroicons-information-circle" },
];
</script>
