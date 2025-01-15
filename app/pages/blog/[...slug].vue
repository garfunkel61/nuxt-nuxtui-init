<template>
  <div
    class="bg-surface-0 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20 mt-10"
  >
    <ContentDoc>
      <template #default="{ doc }">
        <div class="max-w-4xl mx-auto">
          <!-- Metadata section -->
          <div class="mb-8">
            <!-- Top row with date/author and back link -->
            <div class="flex items-center justify-between mb-2">
              <div class="text-surface-600 dark:text-surface-200 text-sm">
                <span>Published </span>
                <span class="font-bold">{{ doc.date || "April 6, 202X" }}</span>
                <span> by </span>
                <span class="font-bold">{{
                  doc.author || "Claire Williams"
                }}</span>
              </div>

              <NuxtLink
                to="/blog"
                class="flex items-center gap-2 text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
              >
                <span>Back to Blog</span>
                <i class="pi pi-arrow-right" />
              </NuxtLink>
            </div>

            <!-- Tags row -->
            <div class="flex items-center gap-2">
              <Tag value="New" />
              <Tag value="Technology" severity="success" />
              <Tag value="Education" severity="warn" />
            </div>
          </div>

          <!-- Content section -->
          <ContentRenderer
            :value="doc"
            class="prose dark:prose-invert max-w-none"
          />
        </div>
      </template>

      <template #not-found>
        <div class="flex flex-col items-center justify-center py-20">
          <i
            class="pi pi-exclamation-circle text-6xl text-surface-500 dark:text-surface-400 mb-6"
          />
          <h1
            class="text-4xl font-bold text-surface-900 dark:text-surface-0 mb-4"
          >
            Blog Post Not Found
          </h1>
          <p class="text-surface-600 dark:text-surface-200 text-lg mb-8">
            The blog post you're looking for doesn't exist or has been moved.
          </p>
          <NuxtLink
            to="/blog"
            class="p-button flex items-center gap-2 bg-primary hover:bg-primary-600 text-white px-6 py-3 rounded-md transition-colors"
          >
            <i class="pi pi-arrow-left" />
            <span>Back to Blog</span>
          </NuxtLink>
        </div>
      </template>
    </ContentDoc>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
</script>
