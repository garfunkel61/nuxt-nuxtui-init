<template>
  <UCard class="w-full max-w-md mt-10">
    <template #header>
      <h1 class="text-xl font-semibold">Create an account</h1>
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

        <UFormGroup label="Password" required :error="errors.password">
          <UInput
            v-model="form.password"
            type="password"
            placeholder="Create a password"
            :ui="{ base: 'w-full' }"
          />
        </UFormGroup>

        <UFormGroup
          label="Confirm password"
          required
          :error="errors.confirmPassword"
        >
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
import { useRouter } from "vue-router";

interface RegisterForm {
  email: string;
  password: string;
  confirmPassword: string;
}

const loading = ref(false);
const form = reactive<RegisterForm>({
  email: "",
  password: "",
  confirmPassword: "",
});

const errors = reactive({
  password: "",
  confirmPassword: "",
});

function validateForm(): boolean {
  errors.password = "";
  errors.confirmPassword = "";

  if (form.password.length < 6) {
    errors.password = "Password must be at least 6 characters long";
    return false;
  }

  if (form.password !== form.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
    return false;
  }

  return true;
}

const client = useSupabaseClient();
const router = useRouter();

async function handleSubmit() {
  if (!validateForm()) return;

  loading.value = true;
  try {
    const { error } = await client.auth.signUp({
      email: form.email,
      password: form.password,
    });

    if (error) {
      useToast().add({
        title: "Error",
        description: error.message,
        color: "red",
      });
      return;
    }

    router.push("/auth/login");
    useToast().add({
      title: "Success",
      description: "Please check your email to confirm your account",
      color: "green",
    });
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
