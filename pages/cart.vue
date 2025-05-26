<template>
  <!-- Koszyk -->
  <main class="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6">
    <!-- Lista produktów -->
    <section class="md:col-span-2">
      <h2 class="text-2xl font-bold mb-6">Twój koszyk</h2>

      <div class="space-y-6">
        <CartItem
          v-for="item in cartItems"
          :key="item.id"
          :product="item"
          @update:quantity="(val, id) => updateQuantity(id, val)"
        />
      </div>
    </section>

    <!-- Podsumowanie -->
    <aside class="bg-white p-6 rounded shadow-md">
      <h3 class="text-xl font-bold mb-4">Podsumowanie</h3>
      <div class="mb-2 flex justify-between">
        <span>Wartość produktów:</span>
        <span>{{ totalPrice.toFixed(2) }} zł</span>
      </div>
      <div class="mb-2 flex justify-between">
        <span>Dostawa:</span>
        <span class="text-green-700">0,00 zł</span>
      </div>
      <hr class="my-4" />
      <div class="mb-4 flex justify-between font-bold text-lg">
        <span>Razem:</span>
        <span>{{ totalPrice.toFixed(2) }} zł</span>
      </div>
      <button
        class="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 mb-2"
      >
        DOSTAWA I PŁATNOŚĆ
      </button>
      <a href="#" class="text-green-600 hover:underline block text-center"
        >Kontynuuj zakupy</a
      >
    </aside>
  </main>
</template>

<script lang="ts" setup>
const cartItems = ref([
  {
    id: 1,
    title: "Materac 140x200 kieszeniowy BLANCO",
    description: "7 stref, średnio twardy, pokrowiec zdejmowany",
    price: 475.0,
    quantity: 1,
    image: "https://picsum.photos/120/80",
  },
  {
    id: 2,
    title: "Poduszka ortopedyczna profilowana",
    description: "Pianka memory 40x30 cm",
    price: 69.0,
    quantity: 2,
    image: "https://picsum.photos/121/80",
  },
  {
    id: 3,
    title: "Kołdra całoroczna z włókien kukurydzy",
    description: "Rozmiar: 160x200 cm",
    price: 199.0,
    quantity: 1,
    image: "https://picsum.photos/122/80",
  },
]);

function updateQuantity(id: number, newQuantity: number) {
  const item = cartItems.value.find((p) => p.id === id);
  if (item) item.quantity = newQuantity;
}

const totalPrice = computed(() => {
  return cartItems.value.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
});
</script>

<style scoped></style>
