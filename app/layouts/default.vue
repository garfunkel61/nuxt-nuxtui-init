<template>
  <div
    class="min-h-screen h-full w-full bg-gray-50 dark:bg-gray-800 flex flex-col"
  >
    <Nav />
    <UNotifications />
    <main
      class="flex-1 pt-8 pb-8 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
// Link to Google Fonts
useHead({
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter&display=swap",
      crossorigin: "",
    },
  ],
});
</script>

<style lang="postcss">
body {
  font-family: "Inter";
}
body {
  @apply dark:bg-gray-900 bg-white;
}
</style>
