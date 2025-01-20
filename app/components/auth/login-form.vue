<template>
  <UCard class="w-full max-w-md mt-10">
    <template #header>
      <h1 class="text-xl font-semibold">Sign in to your account</h1>
    </template>

    <form @submit.prevent="handleSubmit" class="p-4">
      <div class="space-y-4">
        <UAlert
          v-if="error"
          color="red"
          variant="soft"
          :title="error"
          class="mb-4"
        />
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
          :disabled="!isValid"
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
const error = ref<string | null>(null);

const form = reactive({
  email: "",
  password: "",
  remember: false,
});

// Basic form validation
const isValid = computed(() => {
  return form.email && form.password.length >= 6;
});

const client = useSupabaseClient();
const user = useSupabaseUser();
const router = useRouter();

const handleSubmit = async () => {
  if (!isValid.value) {
    error.value = "Please fill in all fields correctly";
    return;
  }

  loading.value = true;
  error.value = null;

  try {
    const { error: authError } = await client.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    });

    if (authError) throw authError;

    // If remember me is not checked, set session to expire in 1 day
    if (!form.remember) {
      const { error: sessionError } = await client.auth.setSession({
        access_token: (
          await client.auth.getSession()
        ).data.session?.access_token!,
        refresh_token: (
          await client.auth.getSession()
        ).data.session?.refresh_token!,
        // expires_in: 86400, // 24 hours in seconds
      });
      if (sessionError) throw sessionError;
    }

    await navigateTo("/dashboard");
  } catch (err: any) {
    error.value = err?.message || "An error occurred during sign in";
  } finally {
    loading.value = false;
  }
};

// Redirect if already logged in
watchEffect(() => {
  if (user.value) {
    navigateTo("/dashboard");
  }
});
</script>
