<template>
  <header class="bg-green-600 text-white p-4 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <NuxtLink to="/">
          <img src="/images/logo.png" alt="Green Allegro" class="h-10 w-auto" />
        </NuxtLink>

        <!-- Desktop search bar -->
        <div
          class="desktop-search hidden md:flex flex-1 max-w-2xl bg-white rounded overflow-hidden"
        >
          <input
            type="text"
            placeholder="Czego szukasz?"
            class="w-full px-4 py-3 text-black focus:outline-none"
          />
          <select
            class="bg-white text-black px-4 py-3 border-l border-gray-300 focus:outline-none"
          >
            <option>Wszystkie kategorie</option>
            <option>Dom</option>
            <option>Elektronika</option>
          </select>
          <button
            class="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3"
          >
            SZUKAJ
          </button>
        </div>

        <nav class="space-x-4 hidden md:flex items-center">
          <NuxtLink to="/" class="hover:underline">
            <span class="material-symbols-outlined">home</span>
          </NuxtLink>
          <a href="#" class="hover:underline">
            <span class="material-symbols-outlined scale-x-[-1]"
              >local_shipping</span
            >
          </a>
          <a href="#" class="hover:underline">
            <span class="material-symbols-outlined">notifications</span>
          </a>
          <NuxtLink to="/cart" class="relative hover:underline">
  <span class="material-symbols-outlined">shopping_bag</span>

  <client-only>
    <span
      v-if="cart.totalItems > 0"
      class="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold shadow"
    >
      {{ cart.totalItems }}
    </span>
  </client-only>
</NuxtLink>
          <!-- Ikona konta / logowania -->
          <NuxtLink to="/login" class="hover:underline">
            <span class="material-symbols-outlined">account_circle</span>
          </NuxtLink>
        </nav>

        <!-- Hamburger for mobile -->
        <div class="md:hidden">
          <button
            @click="toggleMenu"
            class="text-white text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      <!-- Mobile search bar -->
      <div class="custom-mobile-search block md:hidden mt-4">
        <div class="flex flex-col w-full bg-white">
          <input
            type="text"
            placeholder="Czego szukasz?"
            class="w-full px-4 py-3 text-black focus:outline-none"
          />
          <select
            class="bg-white text-black px-4 py-3 border-t border-gray-300 focus:outline-none appearance-none"
          >
            <option>Wszystkie kategorie</option>
            <option>Dom</option>
            <option>Elektronika</option>
          </select>
          <button
            class="bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-3 w-full"
          >
            SZUKAJ
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div
      :class="[
        'md:hidden overflow-hidden transition-all duration-300 bg-green-700',
        isMenuOpen ? 'max-h-screen' : 'max-h-0',
      ]"
    >
      <div class="px-4 pt-4 pb-2">
        <a href="#" class="block py-2 text-white hover:underline">Home</a>
        <a href="#" class="block py-2 text-white hover:underline">Kategorie</a>
        <a href="#" class="block py-2 text-white hover:underline">Promocje</a>
        <a href="#" class="block py-2 text-white hover:underline">Kontakt</a>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
const cart = useCartStore();
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style></style>
