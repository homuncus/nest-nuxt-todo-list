import { defineStore } from "pinia";

const useUserStore = defineStore('userStore', {
  state: () => {
    return {
      access_token: '',
      user: {}
    }
  }
})