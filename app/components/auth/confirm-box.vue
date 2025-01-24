<template>
  <UCard>
    <template #header>
      <h3 class="text-xl font-semibold">Email Confirmation</h3>
    </template>

    <div class="space-y-4">
      <div class="text-center">
        <UIcon
          name="i-heroicons-check-circle"
          class="h-12 w-12 text-green-500 mx-auto"
        />
        <p class="mt-2 text-green-600">
          Your email has been successfully confirmed!
        </p>
      </div>
    </div>

    <template #footer>
      <UButton to="/auth/login" block color="primary">
        Proceed to Login
      </UButton>
    </template>
  </UCard>
</template>

<script setup lang="ts">
// No need for useRoute since we're showing only success state
</script>
