import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

interface User {
  username: string;
  image?: string;
}

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null);

  const isAuthenticated = computed(() => user.value !== null);

  function login(username: string, image?: string) {
    user.value = { username, image };
  }

  function logout() {
    user.value = null;
  }

  return { user, isAuthenticated, login, logout };
});
