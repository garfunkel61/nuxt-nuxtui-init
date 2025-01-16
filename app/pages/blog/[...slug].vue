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
              <p class="text-surface-600 dark:text-surface-200 text-sm">
                <span>Published </span>
                <span class="font-bold">{{ doc.date || "April 6, 202X" }}</span>
                <span> by </span>
                <span class="font-bold">{{
                  doc.author || "Claire Williams"
                }}</span>
              </p>

              <NuxtLink
                to="/blog"
                class="flex items-center gap-2 text-primary hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
              >
                <span>Back to Blog</span>
                <Icon name="heroicons:arrow-right" />
              </NuxtLink>
            </div>

            <!-- Tags row -->
            <div class="flex items-center gap-2">
              <UBadge color="primary" variant="solid">New</UBadge>
              <UBadge color="green" variant="solid">Technology</UBadge>
              <UBadge color="yellow" variant="solid">Education</UBadge>
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
          <Icon
            name="heroicons:exclamation-circle"
            class="text-6xl text-surface-500 dark:text-surface-400 mb-6"
          />
          <h1
            class="text-4xl font-bold text-surface-900 dark:text-surface-0 mb-4"
          >
            Blog Post Not Found
          </h1>
          <p class="text-surface-600 dark:text-surface-200 text-lg mb-8">
            The blog post you're looking for doesn't exist or has been moved.
          </p>
          <UButton
            to="/blog"
            icon="i-heroicons-arrow-left"
            color="primary"
            variant="solid"
          >
            Back to Blog
          </UButton>
        </div>
      </template>
    </ContentDoc>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
</script>
