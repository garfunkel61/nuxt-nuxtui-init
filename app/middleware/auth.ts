export default defineNuxtRouteMiddleware(async (to) => {
  const user = useSupabaseUser();
  const { auth } = useSupabaseClient();

  // Force refresh session if exists
  try {
    const {
      data: { session },
      error,
    } = await auth.getSession();
    if (error) throw error;

    if (!session) {
      // Redirect to login if no session
      return navigateTo("/auth/login");
    }
  } catch (error) {
    // Handle any errors (session expired, invalid, etc)
    return navigateTo("/auth/login");
  }
});
