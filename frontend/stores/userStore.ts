import { defineStore } from "pinia";
import type { User } from "project-types";

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
})