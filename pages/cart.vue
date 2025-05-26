<template>
<!-- Koszyk -->
  <main class="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6">
    <!-- Lista produktów -->
    <section class="md:col-span-2">
      <h2 class="text-2xl font-bold mb-6">Twój koszyk</h2>

      <div class="space-y-6">
        <!-- Produkt -->
        <div class="bg-white p-4 rounded shadow flex flex-col md:flex-row justify-between items-center gap-4">
          <img src="https://picsum.photos/120/80" class="rounded border" alt="Produkt" />
          <div class="flex-1">
            <h3 class="font-bold">Materac 140x200 kieszeniowy BLANCO</h3>
            <p class="text-sm text-gray-500">7 stref, średnio twardy, pokrowiec zdejmowany</p>
          </div>
          <div class="flex items-center gap-2">
            <button class="px-3 py-1 border">-</button>
            <span>1</span>
            <button class="px-3 py-1 border">+</button>
          </div>
          <p class="text-green-700 font-bold">475,00 zł</p>
        </div>

        <div class="bg-white p-4 rounded shadow flex flex-col md:flex-row justify-between items-center gap-4">
          <img src="https://picsum.photos/121/80" class="rounded border" alt="Produkt" />
          <div class="flex-1">
            <h3 class="font-bold">Poduszka ortopedyczna profilowana</h3>
            <p class="text-sm text-gray-500">Pianka memory 40x30 cm</p>
          </div>
          <div class="flex items-center gap-2">
            <button class="px-3 py-1 border">-</button>
            <span>2</span>
            <button class="px-3 py-1 border">+</button>
          </div>
          <p class="text-green-700 font-bold">138,00 zł</p>
        </div>

        <div class="bg-white p-4 rounded shadow flex flex-col md:flex-row justify-between items-center gap-4">
          <img src="https://picsum.photos/122/80" class="rounded border" alt="Produkt" />
          <div class="flex-1">
            <h3 class="font-bold">Kołdra całoroczna z włókien kukurydzy</h3>
            <p class="text-sm text-gray-500">Rozmiar: 160x200 cm</p>
          </div>
          <div class="flex items-center gap-2">
            <button class="px-3 py-1 border">-</button>
            <span>1</span>
            <button class="px-3 py-1 border">+</button>
          </div>
          <p class="text-green-700 font-bold">199,00 zł</p>
        </div>
      </div>
    </section>

    <!-- Podsumowanie -->
    <aside class="bg-white p-6 rounded shadow-md">
      <h3 class="text-xl font-bold mb-4">Podsumowanie</h3>
      <div class="mb-2 flex justify-between">
        <span>Wartość produktów:</span>
        <span>812,00 zł</span>
      </div>
      <div class="mb-2 flex justify-between">
        <span>Dostawa:</span>
        <span class="text-green-700">0,00 zł</span>
      </div>
      <hr class="my-4">
      <div class="mb-4 flex justify-between font-bold text-lg">
        <span>Razem:</span>
        <span>812,00 zł</span>
      </div>
      <button class="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 mb-2">DOSTAWA I PŁATNOŚĆ</button>
      <a href="#" class="text-green-600 hover:underline block text-center">Kontynuuj zakupy</a>
    </aside>
  </main>
</template>

<script lang="ts" setup>

</script>

<style>

</style>