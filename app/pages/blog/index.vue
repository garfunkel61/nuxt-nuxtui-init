<template>
  <div
    class="bg-surface-0 mt-10 dark:bg-surface-900 px-6 py-20 md:px-12 lg:px-20"
  >
    <div
      class="font-bold text-3xl lg:text-5xl text-surface-900 dark:text-surface-0 mb-4"
    >
      Articles
    </div>
    <div
      class="text-surface-600 dark:text-surface-400 text-lg lg:text-xl leading-normal mb-12"
    >
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-4 xl:gap-12">
      <div class="w-full" v-for="post in posts" :key="post._path">
        <div class="h-[3px] w-full bg-blue-500" />
        <NuxtLink
          :to="post._path"
          class="text-blue-600 dark:text-blue-400 font-medium my-2 text-xl hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
        >
          {{ post.title }}
        </NuxtLink>
        <div
          class="text-surface-900 dark:text-surface-0 font-medium leading-normal text-xl"
        >
          {{ post.description }}
        </div>
        <div class="flex items-start gap-2">
          <Avatar
            image="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-1.png"
            shape="circle"
            size="large"
          />
          <div>
            <div
              class="text-sm font-bold text-surface-900 dark:text-surface-0 mb-1"
            >
              {{ post.author }}
            </div>
            <div
              class="text-sm flex items-center text-surface-700 dark:text-surface-200 gap-2"
            >
              <i class="pi pi-calendar text-sm" />
              <span>{{ post.date }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
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
