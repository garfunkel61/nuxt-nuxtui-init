<template>
  <UCard class="w-full max-w-md mx-auto">
    <UForm
      :validate="validate"
      :state="formState"
      @submit="onSubmit"
      class="space-y-4"
    >
      <UFormGroup label="New Password" name="password">
        <UInput
          v-model="formState.password"
          type="password"
          placeholder="Enter your new password"
          autocomplete="new-password"
        />
      </UFormGroup>

      <UFormGroup label="Confirm Password" name="confirmPassword">
        <UInput
          v-model="formState.confirmPassword"
          type="password"
          placeholder="Confirm your new password"
          autocomplete="new-password"
        />
      </UFormGroup>

      <div class="mt-6">
        <UButton type="submit" block color="primary" :loading="pending">
          Reset Password
        </UButton>
      </div>
    </UForm>
  </UCard>
</template>

<script setup lang="ts">
const formState = ref({
  password: "",
  confirmPassword: "",
});

const pending = ref(false);
const router = useRouter();
const { code } = useRoute().query;
const toast = useToast();

const validate = (state: typeof formState.value) => {
  const errors = [];

  if (!state.password) {
    errors.push({
      path: "password",
      message: "Password is required",
    });
  } else if (state.password.length < 6) {
    errors.push({
      path: "password",
      message: "Password must be at least 6 characters",
    });
  }

  if (state.password !== state.confirmPassword) {
    errors.push({
      path: "confirmPassword",
      message: "Passwords do not match",
    });
  }

  return errors;
};

const onSubmit = async () => {
  if (!code) {
    toast.add({
      title: "Error",
      description: "Invalid reset password link",
      color: "red",
    });
    return;
  }

  try {
    pending.value = true;
    const client = useSupabaseClient();

    // Use the code to verify and reset the password
    const { error } = await client.auth.updateUser({
      password: formState.value.password,
    });

    if (error) throw error;

    toast.add({
      title: "Success",
      description: "Password has been reset successfully",
      color: "green",
    });

    // Redirect to login page
    router.push("/auth/login");
  } catch (error: any) {
    toast.add({
      title: "Error",
      description: error.message || "Failed to reset password",
      color: "red",
    });
  } finally {
    pending.value = false;
  }
};
</script>
