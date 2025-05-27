<script setup>
definePageMeta({
  layout: 'auth'
})

import { ref } from 'vue'

const loginForm = ref({ email: '', password: '' })
const registerForm = ref({ email: '', password: '', name: '' })

const loginLoading = ref(false)
const registerLoading = ref(false)

const handleLogin = async () => {
  loginLoading.value = true
  console.log(JSON.stringify(loginForm.value, null, 2))
  await new Promise((res) => setTimeout(res, 2000))
  loginLoading.value = false
}

const handleRegister = async () => {
  registerLoading.value = true
  console.log(JSON.stringify(registerForm.value, null, 2))
  await new Promise((res) => setTimeout(res, 2000))
  registerLoading.value = false
}
</script>

<template>
  <div class="min-h-screen bg-green-50 flex items-center justify-center px-4">
    <div class="bg-white shadow-xl rounded-lg grid md:grid-cols-2 w-full max-w-4xl overflow-hidden">
      
      <!-- Logowanie -->
      <div class="p-8 flex flex-col gap-4">
        <h2 class="text-xl font-bold text-green-700 flex items-center gap-2">
          <span class="material-symbols-outlined">login</span>
          Zaloguj się
        </h2>
        <input
          v-model="loginForm.email"
          type="email"
          placeholder="Email"
          class="border px-4 py-2 rounded w-full text-sm"
        />
        <input
          v-model="loginForm.password"
          type="password"
          placeholder="Hasło"
          class="border px-4 py-2 rounded w-full text-sm"
        />
        <button
          @click="handleLogin"
          :disabled="loginLoading"
          class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded flex justify-center items-center gap-2"
        >
          <span v-if="loginLoading" class="material-symbols-outlined animate-spin">progress_activity</span>
          <span>{{ loginLoading ? 'Logowanie...' : 'Zaloguj się' }}</span>
        </button>
      </div>

      <!-- Rejestracja -->
      <div class="p-8 flex flex-col gap-4 bg-green-50">
        <h2 class="text-xl font-bold text-green-700 flex items-center gap-2">
          <span class="material-symbols-outlined">person_add</span>
          Zarejestruj się
        </h2>
        <input
          v-model="registerForm.name"
          type="text"
          placeholder="Imię i nazwisko"
          class="border px-4 py-2 rounded w-full text-sm"
        />
        <input
          v-model="registerForm.email"
          type="email"
          placeholder="Email"
          class="border px-4 py-2 rounded w-full text-sm"
        />
        <input
          v-model="registerForm.password"
          type="password"
          placeholder="Hasło"
          class="border px-4 py-2 rounded w-full text-sm"
        />
        <button
          @click="handleRegister"
          :disabled="registerLoading"
          class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded flex justify-center items-center gap-2"
        >
          <span v-if="registerLoading" class="material-symbols-outlined animate-spin">progress_activity</span>
          <span>{{ registerLoading ? 'Rejestracja...' : 'Zarejestruj się' }}</span>
        </button>
      </div>
    </div>
  </div>
</template>
