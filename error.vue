<script setup lang="ts">
import AuthLayout from '~/layouts/auth.vue'

const props = defineProps({
  error: Object
})

const title = computed(() => {
  switch (props.error?.statusCode) {
    case 404:
      return 'Nie znaleziono strony'
    case 500:
      return 'Błąd serwera'
    case 403:
      return 'Brak dostępu'
    default:
      return 'Coś poszło nie tak'
  }
})

const description = computed(() => props.error?.message || 'Spróbuj ponownie później.')
</script>

<template>
  <AuthLayout>
    <div class="flex justify-center py-12">
      <div class="bg-white shadow-xl p-8 rounded max-w-lg w-full text-center">
        <span class="material-symbols-outlined text-red-600 text-6xl mb-4">error</span>
        <h1 class="text-3xl font-bold text-green-700 mb-2">
          {{ error?.statusCode }} – {{ title }}
        </h1>
        <p class="text-gray-600 mb-6">{{ description }}</p>
        <NuxtLink to="/" class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded">
          Powrót na stronę główną
        </NuxtLink>
      </div>
    </div>
  </AuthLayout>
</template>
