<template>
  <UDropdown
    v-if="!calapsed"
    mode="hover"
    :items="items"
    :ui="{
      width: 'w-full',
      item: { disabled: 'cursor-text select-text text-xs' },
    }"
    :popper="{ strategy: 'absolute', placement: 'top' }"
    class="w-full"
  >
    <template #default="{ open }">
      <UButton
        color="gray"
        variant="soft"
        :label="user?.email"
        class="text-xs w-full"
        :class="[open && 'bg-gray-50 dark:bg-gray-800 text-xs']"
      >
        <template #leading>
          <UAvatar icon="i-heroicons-user" size="xs" />
        </template>

        <template #trailing>
          <UIcon name="i-heroicons-ellipsis-vertical" class="text-xs" />
        </template>
      </UButton>
    </template>

    <template #account>
      <div class="text-left">
        <p>Signed in as</p>
        <p class="truncate font-medium dark:text-white text-xs">
          {{ user?.email }}
        </p>
      </div>
    </template>
  </UDropdown>
  <div class="flex justify-center">
    <UTooltip v-if="calapsed" text="Logout">
      <UButton
        color="gray"
        variant="soft"
        icon="i-line-md:log-out"
        @click="logout()"
      />
    </UTooltip>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/components/auth/use-auth";

defineProps<{
  calapsed?: boolean;
}>();

const authStore = useAuthStore();
const { logout, user } = authStore;

const items = computed(() => [
  [
    {
      slot: "account",
      label: "",
      disabled: true,
    },
  ],
  [
    {
      label: "Log out",
      color: "gray",
      icon: "i-line-md:log-out",
      click: () => logout(),
    },
  ],
]);
</script>
