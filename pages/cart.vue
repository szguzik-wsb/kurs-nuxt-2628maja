<template>
  <!-- Koszyk -->
  <main class="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6">
    <!-- Lista produktów -->
    <section class="md:col-span-2">
      <h2 class="text-2xl font-bold mb-6">Twój koszyk</h2>

      <div class="space-y-6">
        <CartItem
          v-for="item in cart.items"
          :key="item.id"
          :product="item"
          @update:quantity="updateQuantity"
        />

        <div
          v-if="cart.items.length === 0"
          class="text-center py-20 text-gray-500 text-lg"
        >
          <span
            class="material-symbols-outlined text-5xl mb-4 text-gray-300 block"
            >remove_shopping_cart</span
          >
          <p class="font-semibold">Twój koszyk jest pusty</p>
          <NuxtLink
            to="/"
            class="text-green-600 font-medium hover:underline mt-2 inline-block"
          >
            Wróć do zakupów
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Podsumowanie -->
    <aside class="bg-white p-6 rounded shadow-md">
      <h3 class="text-xl font-bold mb-4">Podsumowanie</h3>
      <div class="mb-2 flex justify-between">
        <span>Wartość produktów:</span>
        <span>{{ cart.totalPrice.toFixed(2) }} zł</span>
      </div>
      <div class="mb-2 flex justify-between">
        <span>Dostawa:</span>
        <span class="text-green-700">0,00 zł</span>
      </div>
      <hr class="my-4" />
      <div class="mb-4 flex justify-between font-bold text-lg">
        <span>Razem:</span>
        <span>{{ cart.totalPrice.toFixed(2) }} zł</span>
      </div>
      <button
        class="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 mb-2"
      >
        DOSTAWA I PŁATNOŚĆ
      </button>
      <NuxtLink to="/" class="text-green-600 hover:underline block text-center">
        Kontynuuj zakupy
      </NuxtLink>
    </aside>
  </main>
</template>

<script setup lang="ts">
import { useCartStore } from "@/stores/cart";
import CartItem from "@/components/CartItem.vue";

const cart = useCartStore();

// Aktualizacja ilości w Pinia
const updateQuantity = (newQty: number, productId: number) => {
  const item = cart.items.find((p) => p.id === productId);
  if (!item) return;

  if (newQty > item.quantity) {
    cart.addToCart(item);
  } else {
    cart.removeOneFromCart(productId);
  }
};
</script>
