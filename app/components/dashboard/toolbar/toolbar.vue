<template>
  <div class="flex items-center gap-4">
    <UDropdown :items="dropdownItems">
      <UButton color="gray" variant="soft">
        Projects
        <template #trailing>
          <UIcon name="i-heroicons-chevron-down" />
        </template>
      </UButton>
    </UDropdown>
    <UDropdown :items="dropdownItems">
      <UButton color="gray" variant="soft">
        Issues
        <template #trailing>
          <UIcon name="i-heroicons-chevron-down" />
        </template>
      </UButton>
    </UDropdown>
    <UDropdown :items="dropdownItems">
      <UButton color="gray" variant="soft">
        Bugs
        <template #trailing>
          <UIcon name="i-heroicons-chevron-down" />
        </template>
      </UButton>
    </UDropdown>
    <UDropdown :items="dropdownItems">
      <UButton color="gray" variant="soft">
        Comments
        <template #trailing>
          <UIcon name="i-heroicons-chevron-down" />
        </template>
      </UButton>
    </UDropdown>
  </div>
</template>

<script setup lang="ts">
const dropdownItems = [
  [
    {
      label: "Profile",
      icon: "i-heroicons-user",
      to: "/dashboard/profile",
      description: "Manage your profile",
    },
    {
      label: "Settings",
      icon: "i-heroicons-cog-6-tooth",
      to: "/dashboard/settings",
      description: "Configure your preferences",
    },
  ],
];
</script>
