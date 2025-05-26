<template>
     <header class="bg-green-600 text-white p-4">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <NuxtLink to="/"><h1 class="text-2xl font-bold whitespace-nowrap">Green Allegro</h1></NuxtLink>

          <!-- Desktop search bar -->
          <div class="desktop-search hidden md:flex flex-1 max-w-2xl bg-white rounded overflow-hidden">
            <input type="text" placeholder="Czego szukasz?" class="w-full px-4 py-3 text-black focus:outline-none" />
            <select class="bg-white text-black px-4 py-3 border-l border-gray-300 focus:outline-none">
              <option>Wszystkie kategorie</option>
              <option>Dom</option>
              <option>Elektronika</option>
            </select>
            <button class="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3">SZUKAJ</button>
          </div>

          <nav class="space-x-4 hidden md:flex">
            <NuxtLink to="/" class="hover:underline">Home</NuxtLink>
            <a href="#" class="hover:underline">Kategorie</a>
            <a href="#" class="hover:underline">Promocje</a>
            <a href="#" class="hover:underline">Kontakt</a>
          </nav>

          <!-- Hamburger for mobile -->
          <div class="md:hidden">
            <button id="mobile-menu-button" class="text-white text-2xl focus:outline-none">☰</button>
          </div>
        </div>

        <!-- Mobile search bar + special for max-1100px -->
        <div class="custom-mobile-search hidden mt-4">
          <div class="flex flex-col w-full bg-white">
            <input type="text" placeholder="Czego szukasz?" class="w-full px-4 py-3 text-black focus:outline-none" />
            <select class="bg-white text-black px-4 py-3 border-t border-gray-300 focus:outline-none appearance-none">
              <option>Wszystkie kategorie</option>
              <option>Dom</option>
              <option>Elektronika</option>
            </select>
            <button class="bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-3 w-full">SZUKAJ</button>
          </div>
        </div>
      </div>

      <!-- Mobile menu -->
      <div id="mobile-menu" class="md:hidden max-h-0 overflow-hidden transition-all duration-300 bg-green-700">
        <div class="px-4 pt-4 pb-2">
          <a href="#" class="block py-2 text-white hover:underline">Home</a>
          <a href="#" class="block py-2 text-white hover:underline">Kategorie</a>
          <a href="#" class="block py-2 text-white hover:underline">Promocje</a>
          <a href="#" class="block py-2 text-white hover:underline">Kontakt</a>
        </div>
      </div>
    </header>

 <NuxtPage />

    <!-- Footer -->
    <footer class="bg-green-600 text-white py-6 mt-12">
        <div class="max-w-7xl mx-auto px-4 text-center">
            <p>&copy; 2025 Green Allegro. Wszystkie prawa zastrzeżone.</p>
        </div>
    </footer>
</template>
<script setup>
useHead({
  bodyAttrs: {
    class: 'bg-green-50 text-gray-800 font-sans'
  }
})

</script>
