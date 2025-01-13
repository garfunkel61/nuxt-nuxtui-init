<template>
  <div
    class="min-h-screen h-full bg-surface-50 dark:bg-surface-950 flex flex-col"
  >
    <Nav />
    <main class="flex-1">
      <slot />
    </main>
    <Footer />
  </div>
</template>
