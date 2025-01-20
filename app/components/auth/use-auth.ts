import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
  const user = useSupabaseUser();
  const supabase = useSupabaseClient();

  const isLoggedIn = computed(() => !!user.value);

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    user.value = null;
    navigateTo("/");
  };

  return {
    user,
    isLoggedIn,
    logout,
  };
});
