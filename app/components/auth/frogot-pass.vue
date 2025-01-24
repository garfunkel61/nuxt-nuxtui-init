<template>
  <UCard class="w-full max-w-md mt-10">
    <template #header>
      <h1 class="text-xl font-semibold">Forgot Password</h1>
      <p class="text-gray-500 dark:text-gray-400 mt-2">
        Enter your email address and we'll send you a link to reset your
        password.
      </p>
    </template>

    <UForm :state="formState" @submit="onSubmit" class="p-4">
      <UFormGroup label="Email" name="email">
        <UInput
          v-model="formState.email"
          type="email"
          placeholder="Enter your email"
          icon="i-heroicons-envelope"
          autocomplete="email"
        />
      </UFormGroup>

      <div class="mt-4">
        <UButton type="submit" block :loading="pending">
          Send Reset Link
        </UButton>
      </div>
    </UForm>

    <template #footer>
      <NuxtLink
        to="/auth/login"
        class="text-sm font-medium text-primary-500 hover:text-primary-600 dark:text-primary-400"
      >
        Back to Login
      </NuxtLink>
    </template>
  </UCard>
</template>

<script setup lang="ts">
const formState = ref({
  email: "",
});

const pending = ref(false);
const supabase = useSupabaseClient();
const toast = useToast();

async function onSubmit() {
  pending.value = true;
  try {
    const { error } = await supabase.auth.resetPasswordForEmail(
      formState.value.email,
      {
        redirectTo: `${window.location.origin}/auth/reset-password`,
      }
    );

    if (error) throw error;

    toast.add({
      title: "Success",
      description:
        "If an account exists with this email, you will receive password reset instructions.",
      color: "green",
    });
  } catch (error) {
    toast.add({
      title: "Error",
      description: "Something went wrong. Please try again.",
      color: "red",
    });
  } finally {
    pending.value = false;
  }
}

useHead({
  title: "Forgot Password",
  meta: [{ name: "description", content: "Reset your password" }],
});
</script>
