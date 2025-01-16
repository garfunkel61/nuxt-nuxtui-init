<template>
  <UContainer class="bg-surface-50 dark:bg-surface-950 p-6">
    <div class="max-w-[60rem] mx-auto flex flex-col gap-8">
      <USkeleton v-if="pending" class="h-32" :ui="{ rounded: 'rounded-lg' }" />

      <UAlert
        v-else-if="error"
        title="Error"
        description="Something went wrong... Try again!"
        color="red"
      />

      <div v-else class="flex" v-for="project in data" :key="project.id">
        <div class="flex flex-col items-center">
          <UAvatar
            :icon="'i-heroicons-code-bracket'"
            size="lg"
            class="bg-gray-500 text-surface-0 dark:text-surface-900"
          />
          <div class="h-full bg-gray-500/60 w-[2px] min-h-16" />
        </div>

        <UCard class="ml-8 flex-auto">
          <template #header>
            <div class="flex items-center justify-between">
              <UBadge :label="project.name" size="lg" />
              <p class="text-surface-500 dark:text-surface-300 text-sm">
                {{ project.created_at }}
              </p>
            </div>
          </template>

          <p class="leading-normal text-surface-700 dark:text-surface-100">
            {{ project.description }}
          </p>

          <template #footer>
            <div class="flex items-center gap-6">
              <UButton
                variant="ghost"
                color="gray"
                :icon="'i-heroicons-heart'"
                :label="project.stargazers_count.toString()"
              />
              <UButton
                variant="ghost"
                color="gray"
                :icon="'i-heroicons-chat-bubble-left-right'"
                :label="project.forks_count.toString()"
              />
              <UButton
                variant="ghost"
                color="gray"
                :icon="'i-heroicons-eye'"
                :label="project.watchers_count.toString()"
              />
            </div>
          </template>
        </UCard>
      </div>
    </div>
  </UContainer>
</template>

<script setup>
const { data, pending, error } = await useFetch(
  "https://api.github.com/users/garfunkel61/repos"
);
</script>
