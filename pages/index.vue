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

  <div v-if="pending">Ładowanie...</div>
  <div v-else-if="error">Błąd: {{ error.message }}</div>
  <template v-else>
    <!-- Popularne Produkty -->
    <section class="py-12">
      <div class="max-w-7xl mx-auto px-4">
        <h3 class="text-2xl font-bold mb-6 text-center">Popularne produkty</h3>

        <div
          class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          <NuxtLink
            v-for="product in popularProducts"
            :key="product.id"
            :to="`/product/${product.id}`"
            class="bg-white shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              :src="product.image"
              :alt="product.title"
              class="w-full h-48 object-cover"
            />
            <div class="p-4">
              <h4 class="font-bold text-lg mb-2">{{ product.title }}</h4>
              <p class="text-sm text-gray-600 mb-2">
                {{ product.description }}
              </p>
              <span class="text-green-600 font-semibold"
                >{{ product.price.toFixed(2) }} zł</span
              >
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

<!-- Sekcja "Wnętrze w pięknym stylu" -->
<section class="py-12 bg-white">
  <!-- Kontener główny -->
  <div class="max-w-7xl mx-auto px-4">
    <!-- Nagłówek -->
    <h3 class="text-2xl font-bold mb-6 text-center">Wnętrze w pięknym stylu</h3>

    <!-- Siatka produktów -->
    <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <!-- Karta produktu -->
      <div
        v-for="product in decorProducts"
        :key="product.id"
        class="bg-white shadow-md overflow-hidden flex flex-col transition hover:shadow-lg"
      >
        <!-- Klikalna sekcja prowadząca do strony produktu -->
        <NuxtLink :to="`/product/${product.id}`">
          <img
            :src="product.image"
            :alt="product.title"
            class="w-full h-48 object-cover"
          />
          <div class="p-4">
            <h4 class="font-bold text-lg mb-1">{{ product.title }}</h4>
            <p class="text-sm text-gray-600 mb-2">{{ product.description }}</p>
            <span class="text-green-700 font-semibold">{{ product.price.toFixed(2) }} zł</span>
          </div>
        </NuxtLink>

        <!-- Przycisk dodawania do koszyka -->
        <div class="px-4 pb-4 mt-auto">
          <button
            @click="addToCart(product)"
            class="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 transition cursor-pointer"
          >
            Dodaj do koszyka
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

  </template>
</template>
<script setup>
const cart = useCartStore();
const {
  data: products,
  pending,
  error,
} = await useFetch("/api/products", {
  server: true, // domyślnie tak, ale jawnie podkreślamy
  lazy: false, // od razu, nie leniwie
});

// Zweryfikowane, dopiero gdy products jest gotowe
const popularProducts = computed(() =>
  Array.isArray(products.value) ? products.value.slice(0, 4) : [],
);
const decorProducts = computed(() =>
  Array.isArray(products.value) ? products.value.slice(4, 12) : [],
);

const addToCart = (product) => {
  cart.addToCart({
    id: product.id,
    title: product.title,
    price: product.price,
    image: product.image,
  });
};
</script>
