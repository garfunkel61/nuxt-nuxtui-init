<template>
  <div class="bg-surface-50 dark:bg-surface-950 p-6">
    <div class="max-w-[60rem] mx-auto flex flex-col gap-8">
      <div v-if="pending">Loading...</div>
      <div v-else-if="error">Something went wrong... Try again!</div>
      <div v-else class="flex" v-for="project in data" :key="project.id">
        <div class="flex flex-col items-center">
          <span
            class="bg-gray-500 text-surface-0 dark:text-surface-900 flex items-center justify-center rounded-full w-10 h-10 py-2"
          >
            <i class="pi pi-code leading-none !text-xl" />
          </span>
          <div class="h-full bg-gray-500/60 w-[2px] min-h-16" />
        </div>
        <div
          class="ml-8 bg-surface-0 dark:bg-surface-900 shadow rounded-border p-4 flex-auto"
        >
          <div class="mb-4">
            <span
              class="text-surface-900 dark:text-surface-0 font-medium inline-block mr-4"
              >{{ project.name }}</span
            >
            <span class="text-surface-500 dark:text-surface-300 text-sm">{{
              project.created_at
            }}</span>
          </div>
          <div
            class="leading-normal text-surface-700 dark:text-surface-100 mb-4"
          >
            {{ project.description }}
          </div>
          <div
            class="text-surface-500 dark:text-surface-300 flex items-center gap-6"
          >
            <button class="flex items-center gap-1">
              <i class="pi pi-heart" />
              <span class="mr-4">{{ project.stargazers_count }}</span>
            </button>
            <button class="flex items-center gap-1">
              <i class="pi pi-comment" />
              <span class="mr-4">{{ project.forks_count }}</span>
            </button>

            <button class="flex items-center gap-1">
              <i class="pi pi-eye" />
              <span>{{ project.watchers_count }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data } = await useFetch(
  "https://api.github.com/users/garfunkel61/repos"
);

console.log(data);
</script>
