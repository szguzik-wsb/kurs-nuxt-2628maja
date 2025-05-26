<template>
      <!-- Listing Results -->
    <main class="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-4 gap-6">
      <!-- Filters -->
      <aside class="bg-white p-4 rounded shadow-md md:col-span-1">
        <h3 class="text-lg font-bold mb-4">Filtry</h3>
        <div class="mb-4">
          <h4 class="font-semibold mb-2">Kategorie</h4>
          <ul class="text-sm text-gray-700 space-y-1">
            <li><a href="#" class="hover:underline">Dom i Ogród</a></li>
            <li><a href="#" class="hover:underline">Sypialnia</a></li>
            <li><a href="#" class="hover:underline">Materace</a></li>
            <li><a href="#" class="hover:underline">Łóżka</a></li>
          </ul>
        </div>
        <div class="mb-4">
          <h4 class="font-semibold mb-2">Dostawa</h4>
          <label class="block text-sm"><input type="checkbox" class="mr-2" />Darmowa dostawa</label>
          <label class="block text-sm"><input type="checkbox" class="mr-2" />Dostawa do wtorku</label>
        </div>
        <div class="mb-4">
          <h4 class="font-semibold mb-2">Stan</h4>
          <label class="block text-sm"><input type="checkbox" class="mr-2" />Nowe</label>
          <label class="block text-sm"><input type="checkbox" class="mr-2" />Używane</label>
        </div>
        <div>
          <h4 class="font-semibold mb-2">Cena</h4>
          <div class="flex items-center gap-2">
            <input type="number" placeholder="od" class="w-1/2 px-2 py-1 border rounded text-sm" />
            <input type="number" placeholder="do" class="w-1/2 px-2 py-1 border rounded text-sm" />
          </div>
        </div>
      </aside>

      <!-- Product Listings -->
      <section class="md:col-span-3">
        <h2 class="text-2xl font-bold mb-6">Wyniki wyszukiwania dla: "materac 140x200"</h2>
        <div class="grid gap-6">
          <NuxtLink to="/product"  class="bg-white p-4 flex flex-col md:flex-row gap-4 shadow-md">
            <img src="https://picsum.photos/200/140" alt="Produkt" class="w-full md:w-48 h-auto object-cover" />
            <div class="flex-1">
              <h3 class="text-lg font-semibold">Materac kieszeniowy 140x200</h3>
              <p class="text-sm text-gray-600 mb-2">Wygodny, ekologiczny materac z pokrowcem, idealny do sypialni</p>
              <p class="text-green-700 font-bold text-lg">499,00 zł</p>
              <button class="mt-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 font-semibold">Dodaj do koszyka</button>
            </div>
        </NuxtLink>
          <div class="bg-white p-4 flex flex-col md:flex-row gap-4 shadow-md">
            <img src="https://picsum.photos/200/141" alt="Produkt" class="w-full md:w-48 h-auto object-cover" />
            <div class="flex-1">
              <h3 class="text-lg font-semibold">Materac kokosowy H3 140x200</h3>
              <p class="text-sm text-gray-600 mb-2">Ekologiczny z naturalną warstwą kokosu. Wspiera zdrowy kręgosłup</p>
              <p class="text-green-700 font-bold text-lg">615,00 zł</p>
              <button class="mt-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 font-semibold">Dodaj do koszyka</button>
            </div>
          </div>
          <div class="bg-white p-4 flex flex-col md:flex-row gap-4 shadow-md">
            <img src="https://picsum.photos/200/142" alt="Produkt" class="w-full md:w-48 h-auto object-cover" />
            <div class="flex-1">
              <h3 class="text-lg font-semibold">Materac piankowy premium 140x200</h3>
              <p class="text-sm text-gray-600 mb-2">Luksusowy materac z warstwą pianki memory i wentylacją</p>
              <p class="text-green-700 font-bold text-lg">745,00 zł</p>
              <button class="mt-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 font-semibold">Dodaj do koszyka</button>
            </div>
          </div>
        </div>
      </section>
    </main>
</template>

<script lang="ts" setup>

</script>

<style>

</style>