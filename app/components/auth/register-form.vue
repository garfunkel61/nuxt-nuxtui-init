<template>
  <UCard class="w-full max-w-md mt-10">
    <template #header>
      <h1 class="text-xl font-semibold">Create an account</h1>
    </template>

    <form @submit.prevent="handleSubmit" class="p-4">
      <div class="space-y-4">
        <UFormGroup label="Full name" required>
          <UInput
            v-model="form.name"
            placeholder="Enter your full name"
            :ui="{ base: 'w-full' }"
          />
        </UFormGroup>

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
            placeholder="Create a password"
            :ui="{ base: 'w-full' }"
          />
        </UFormGroup>

        <UFormGroup label="Confirm password" required>
          <UInput
            v-model="form.confirmPassword"
            type="password"
            placeholder="Confirm your password"
            :ui="{ base: 'w-full' }"
          />
        </UFormGroup>

        <UButton
          type="submit"
          color="primary"
          variant="solid"
          :loading="loading"
          block
        >
          Create account
        </UButton>
      </div>
    </form>

    <template #footer>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        Already have an account?
        <NuxtLink
          to="/auth/login"
          class="font-medium text-primary-500 hover:text-primary-600 dark:text-primary-400"
        >
          Sign in
        </NuxtLink>
      </p>
    </template>
  </UCard>
</template>

<script setup lang="ts">
interface RegisterForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const loading = ref(false);
const form = reactive<RegisterForm>({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
});

async function handleSubmit() {
  loading.value = true;
  try {
    // Add your registration logic here
    console.log("Form submitted:", form);
  } catch (error) {
    console.error("Registration error:", error);
  } finally {
    loading.value = false;
  }
}

// Add meta tags for SEO
useHead({
  title: "Register - Create an account",
  meta: [
    { name: "description", content: "Create a new account to get started" },
  ],
});
</script>
