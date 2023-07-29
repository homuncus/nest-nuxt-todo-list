import axios from 'utils/axios'
import { useUserStore } from 'stores/userStore'

const userStore = useUserStore()

export async function attempt(username: string, password: string, options?: { patchState: boolean } = { patchState: true }) {
  const { data } = await axios.post('/auth/login', { username, password })
  if (options) {
    if (options.patchState)
      userStore.$patch({ access_token: `bearer ${data.access_token}` })
  }
  return data
}