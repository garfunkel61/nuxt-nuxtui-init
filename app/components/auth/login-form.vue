<template>
  <UCard class="w-full max-w-md mt-10">
    <template #header>
      <h1 class="text-xl font-semibold">Sign in to your account</h1>
    </template>

    <form @submit.prevent="handleSubmit" class="p-4">
      <div class="space-y-4">
        <UFormGroup label="Email address" required>
          <UInput
            v-model="form.email"
            type="email"
            placeholder="Enter your email"
            :ui="{ base: 'w-full' }"
          />
        </UFormGroup>

        <UFormGroup label="Password" required>
          <UInput
            v-model="form.password"
            type="password"
            placeholder="Enter your password"
            :ui="{ base: 'w-full' }"
          />
        </UFormGroup>

        <div class="flex items-center justify-between">
          <UCheckbox v-model="form.remember" label="Remember me" />
          <NuxtLink
            to="/auth/forgot-password"
            class="text-sm font-medium text-primary-500 hover:text-primary-600 dark:text-primary-400"
          >
            Forgot password?
          </NuxtLink>
        </div>

        <UButton
          type="submit"
          color="primary"
          variant="solid"
          :loading="loading"
          block
        >
          Sign in
        </UButton>
      </div>
    </form>

    <template #footer>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        Don't have an account?
        <NuxtLink
          to="/auth/register"
          class="font-medium text-primary-500 hover:text-primary-600 dark:text-primary-400"
        >
          Create account
        </NuxtLink>
      </p>
    </template>
  </UCard>
</template>

<script setup lang="ts">
const loading = ref(false);
const form = reactive({
  email: "",
  password: "",
  remember: false,
});

const handleSubmit = async () => {
  loading.value = true;
  try {
    // Add your login logic here
    await navigateTo("/dashboard");
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
};
</script>
