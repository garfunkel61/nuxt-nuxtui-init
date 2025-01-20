<template>
  <div
    class="bg-surface-0 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20 mt-10"
  >
    <UPage>
      <UContainer>
        <UBlogList orientation="vertical">
          <UBlogPost
            v-for="post in posts"
            :key="post._path"
            :title="post.title"
            :description="post.description"
            :to="post._path"
            orientation="horizontal"
          >
            <template #footer>
              <div class="flex items-center gap-3">
                <UAvatar
                  src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-1.png"
                  size="sm"
                />
                <div>
                  <p class="text-sm font-medium text-gray-900 dark:text-white">
                    {{ post.author }}
                  </p>
                  <div
                    class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400"
                  >
                    <UIcon name="i-heroicons-calendar" />
                    <span>{{ post.date }}</span>
                  </div>
                </div>
              </div>
            </template>
          </UBlogPost>
        </UBlogList>
      </UContainer>
    </UPage>
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
