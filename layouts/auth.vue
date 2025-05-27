<template>
  <div class="min-h-screen bg-gray-100 flex flex-col">
    <!-- Pasek z logo -->
      <div class="bg-green-600 px-4 py-4 flex justify-center">
        <NuxtLink to="/">
          <img src="/images/logo.png" alt="Green Allegro" class="h-8 w-auto" />
        </NuxtLink>
      </div>

    <!-- Sekcja na treść slotu -->
    <div class="flex-1 flex items-center justify-center px-4">
      <div class="w-full max-w-7xl">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>