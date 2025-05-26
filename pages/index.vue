<template>
  <!-- Hero Section -->
  <section class="bg-green-200 py-12">
    <div class="max-w-7xl mx-auto px-4 text-center">
      <h2 class="text-3xl md:text-5xl font-bold mb-4">
        Zielone zakupy, lepszy świat
      </h2>
      <p class="text-lg md:text-xl mb-6">
        Oferujemy produkty eco, lokalne i zrównoważone. Zacznij zmieniać świat
        już dziś!
      </p>
      <NuxtLink
        to="/listing"
        class="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 transition"
        >Przeglądaj produkty</NuxtLink
      >
    </div>
  </section>
  <!-- Popularne Produkty -->
  <section class="py-12">
    <div class="max-w-7xl mx-auto px-4">
      <h3 class="text-2xl font-bold mb-6 text-center">Popularne produkty</h3>
      <div
        class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <div class="bg-white shadow-md overflow-hidden">
          <img
            src="https://picsum.photos/id/103/300/200"
            alt="Produkt 1"
            class="w-full h-48 object-cover"
          />
          <div class="p-4">
            <h4 class="font-bold text-lg mb-2">Eko Torba</h4>
            <p class="text-sm text-gray-600 mb-2">
              Torba z materiałów biodegradowalnych
            </p>
            <span class="text-green-600 font-semibold">39,99 zł</span>
          </div>
        </div>
        <div class="bg-white shadow-md overflow-hidden">
          <img
            src="https://picsum.photos/id/104/300/200"
            alt="Produkt 2"
            class="w-full h-48 object-cover"
          />
          <div class="p-4">
            <h4 class="font-bold text-lg mb-2">Kubek Bambusowy</h4>
            <p class="text-sm text-gray-600 mb-2">
              Wielorazowy kubek z bambusa
            </p>
            <span class="text-green-600 font-semibold">29,90 zł</span>
          </div>
        </div>
        <div class="bg-white shadow-md overflow-hidden">
          <img
            src="https://picsum.photos/id/106/300/200"
            alt="Produkt 3"
            class="w-full h-48 object-cover"
          />
          <div class="p-4">
            <h4 class="font-bold text-lg mb-2">Zestaw Zero Waste</h4>
            <p class="text-sm text-gray-600 mb-2">
              Podstawowy zestaw do życia bez odpadów
            </p>
            <span class="text-green-600 font-semibold">89,00 zł</span>
          </div>
        </div>
        <div class="bg-white shadow-md overflow-hidden">
          <img
            src="https://picsum.photos/id/108/300/200"
            alt="Produkt 4"
            class="w-full h-48 object-cover"
          />
          <div class="p-4">
            <h4 class="font-bold text-lg mb-2">Naturalne Świece</h4>
            <p class="text-sm text-gray-600 mb-2">
              Sojowe świece bez sztucznych dodatków
            </p>
            <span class="text-green-600 font-semibold">59,50 zł</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Sekcja "Wnętrze w pięknym stylu" -->
  <section class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4">
      <h3 class="text-2xl font-bold mb-6">Wnętrze w pięknym stylu</h3>
      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
      >
        <div class="text-center">
          <img
            src="https://picsum.photos/id/200/200/200"
            alt="Produkt"
            class="mx-auto mb-2"
          />
          <p class="text-green-700 font-semibold">75,00 zł</p>
          <p class="text-sm text-gray-600">Pufa welurowa otwierana</p>
        </div>
        <div class="text-center">
          <img
            src="https://picsum.photos/id/201/200/200"
            alt="Produkt"
            class="mx-auto mb-2"
          />
          <p class="text-green-700 font-semibold">28,99 zł</p>
          <p class="text-sm text-gray-600">Świeczka zapachowa Kwiaty Bzu</p>
        </div>
        <div class="text-center">
          <img
            src="https://picsum.photos/id/202/200/200"
            alt="Produkt"
            class="mx-auto mb-2"
          />
          <p class="text-green-700 font-semibold">215,99 zł</p>
          <p class="text-sm text-gray-600">Lustro LED łazienkowe</p>
        </div>
        <div class="text-center">
          <img
            src="https://picsum.photos/id/203/200/200"
            alt="Produkt"
            class="mx-auto mb-2"
          />
          <p class="text-green-700 font-semibold">33,99 zł</p>
          <p class="text-sm text-gray-600">Świeczka "Świeże Pranie"</p>
        </div>
        <div class="text-center">
          <img
            src="https://picsum.photos/id/204/200/200"
            alt="Produkt"
            class="mx-auto mb-2"
          />
          <p class="text-green-700 font-semibold">109,00 zł</p>
          <p class="text-sm text-gray-600">Stolik nocny loft</p>
        </div>
        <div class="text-center">
          <img
            src="https://picsum.photos/id/204/200/200"
            alt="Produkt"
            class="mx-auto mb-2"
          />
          <p class="text-green-700 font-semibold">20,89 zł</p>
          <p class="text-sm text-gray-600">Budzik LED z termometrem</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup></script>
