<template>
  <div class="min-h-screen h-full bg-white dark:bg-gray-950 flex flex-col">
    <Nav />
    <UNotifications />
    <main
      class="flex-1 flex items-start justify-center pt-10 bg-gray-50 dark:bg-gray-800"
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
