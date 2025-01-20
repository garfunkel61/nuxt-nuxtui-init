<template>
  <div class="min-h-screen h-full bg-gray-50 dark:bg-gray-800 flex flex-col">
    <Nav />
    <main class="flex-1 pt-10 pb-10">
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
