import { defineStore } from "pinia";
import type { User } from "project-types";
import axios from 'utils/axios'

export const useUserStore = defineStore('userStore', {
  state: (): {
    access_token: string,
    user: User
  } => {
    return {
      access_token: '',
      user: {
        id: 0,
        username: '',
        createdAt: '',
        updatedAt: ''
      }
    }
  },
  actions: {
    isAuthenticated(): Promise<boolean> {
      return axios.get(`/auth/check?token=${this.access_token}`).then(val => val.data.authorized)
    }
  },
})