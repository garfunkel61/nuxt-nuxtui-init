<template>
  <div
    class="bg-surface-0 mt-10 dark:bg-surface-900 px-6 py-20 md:px-12 lg:px-20"
  >
    <UContainer>
      <p
        class="font-bold text-3xl lg:text-5xl mb-4"
        color="gray-900 dark:gray-100"
      >
        Articles
      </p>
      <p
        class="text-lg lg:text-xl leading-normal mb-12"
        color="gray-600 dark:gray-400"
      >
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </p>
    </UContainer>

    <UContainer>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-4 xl:gap-12">
        <UCard v-for="post in posts" :key="post._path" class="w-full">
          <template #header>
            <div class="h-[3px] w-full bg-blue-500" />
          </template>

          <NuxtLink
            :to="post._path"
            class="text-blue-600 dark:text-blue-400 font-medium my-2 text-xl hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
          >
            {{ post.title }}
          </NuxtLink>

          <p
            class="font-medium leading-normal text-xl"
            color="gray-900 dark:gray-100"
          >
            {{ post.description }}
          </p>

          <template #footer>
            <div class="flex items-start gap-2">
              <UAvatar
                src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-1.png"
                size="lg"
              />
              <div>
                <p
                  class="text-sm font-bold mb-1"
                  color="gray-900 dark:gray-100"
                >
                  {{ post.author }}
                </p>
                <div
                  class="text-sm flex items-center text-gray-700 dark:text-gray-200 gap-2"
                >
                  <UIcon name="i-heroicons-calendar" />
                  <span>{{ post.date }}</span>
                </div>
              </div>
            </div>
          </template>
        </UCard>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const { data: posts } = await useAsyncData("posts", () =>
  queryContent("blog")
    .only(["title", "description", "author", "date", "_path"])
    .sort({ date: -1 })
    .find()
);
</script>
