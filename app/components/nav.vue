<template>
  <UHeader :links="navItems">
    <template #logo>
      <ClientOnly>
        <UButton to="/" variant="ghost" class="p-0">
          <svg
            class="h-12 fill-gray-700 dark:fill-gray-200"
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
        </UButton>
      </ClientOnly>
    </template>
    <template #right>
      <UButton
        v-if="!isLoggedIn"
        to="/auth/login"
        variant="ghost"
        class="font-medium"
      >
        Login
      </UButton>
      <UButton v-if="!isLoggedIn" to="/auth/register" color="primary">
        Register
      </UButton>
      <UButton
        v-if="isLoggedIn"
        @click="logout"
        variant="ghost"
        color="primary"
        class="font-medium"
      >
        Logout
      </UButton>
    </template>
  </UHeader>
</template>

<script setup>
import { useAuthStore } from "@/components/auth/use-auth";

const navItems = [
  {
    label: "Home",
    to: "/",
    icon: "heroicons:home",
    variant: "ghost",
    class: "font-medium",
    activeClass: "text-primary-500 dark:text-primary-400",
    inactiveClass:
      "text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400",
  },
  {
    label: "Dashboard",
    to: "/dashboard",
    icon: "heroicons:squares-2x2",
    variant: "ghost",
    class: "font-medium",
  },
  {
    label: "Projects",
    to: "/projects",
    icon: "heroicons:squares-2x2",
    variant: "ghost",
    class: "font-medium",
  },
  {
    label: "Blog",
    to: "/blog",
    icon: "heroicons:pencil-square",
    variant: "ghost",
    class: "font-medium",
  },
  {
    label: "About",
    to: "/about",
    icon: "heroicons:information-circle",
    variant: "ghost",
    class: "font-medium",
    activeClass: "text-primary-500 dark:text-primary-400",
    inactiveClass:
      "text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400",
  },
];

const authStore = useAuthStore();
// Use storeToRefs to maintain reactivity
const { isLoggedIn } = storeToRefs(authStore);
const { logout } = authStore;
</script>
