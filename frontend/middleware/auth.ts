import { useUserStore } from "stores/userStore"

const userStore = useUserStore()

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (!await userStore.isAuthenticated()) {
    return navigateTo('/login')
  }
})