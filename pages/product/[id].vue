<template>
  <!-- Produkt Page -->
  <main class="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6">
    <!-- Galeria zdjęć -->
    <div v-if="pending">Ładowanie produktu...</div>
    <div v-else-if="error || !product">Nie znaleziono produktu.</div>
    <template v-else>
      <div class="md:col-span-2">
        <div
          class="swiper productSwiper w-full min-w-0 cursor-pointer"
          @click="openModal"
        >
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img :src="activeImageFull" alt="Produkt" class="w-full" />
            </div>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
        <div class="grid grid-cols-4 gap-2 mt-4">
          <img
            v-for="img in images"
            :key="img.small"
            :src="img.small"
            class="cursor-pointer border"
            @click.stop="setActive(img)"
          />
        </div>
      </div>

      <!-- Szczegóły produktu -->
      <div class="bg-white p-6 rounded shadow-md">
        <h1 class="text-2xl font-bold mb-2">
          {{ product.title }}
        </h1>
        <p class="text-green-700 font-bold text-2xl mb-4">{{ product.price.toFixed(2) }} zł</p>

        <p class="text-sm text-gray-600 mb-4">
          Ekologiczny materac z pokrowcem, 7 stref twardości, wysokość 20cm
        </p>

        <div class="grid grid-cols-2 gap-2 mb-4">
          <div>
            <label class="block text-sm font-semibold mb-1">Szerokość</label>
            <select class="w-full border px-2 py-1">
              <option>90 cm</option>
              <option selected>140 cm</option>
              <option>160 cm</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-semibold mb-1">Długość</label>
            <select class="w-full border px-2 py-1">
              <option selected>200 cm</option>
              <option>220 cm</option>
            </select>
          </div>
        </div>
        <button 
          @click="addToCart(product)"
          class="block text-center w-full bg-green-600 hover:bg-green-700 text-white py-3 font-bold"
        >
          DODAJ DO KOSZYKA
        </button>
      </div>
    </template>
  </main>

  <!-- Modal ze zdjęciem -->
  <div
    v-if="isModalOpen"
    class="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
    @click.self="closeModal"
  >
    <div
      class="relative bg-transparent max-w-3xl max-h-[75vh] flex items-center justify-center"
    >
      <img
        :src="activeImageFull"
        class="max-w-full max-h-[75vh] rounded shadow-lg"
      />
      <button
        @click="closeModal"
        class="absolute top-2 right-2 text-white text-3xl cursor-pointer"
      >
        <span class="material-symbols-outlined">close</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const cart = useCartStore();
const productId = route.params.id;

const {
  data: product,
  error,
  pending,
} = await useFetch(`/api/products/${productId}`);

const images = [
  {
    small: "https://picsum.photos/100/100?image=1",
    full: "https://picsum.photos/600/400?image=1",
  },
  {
    small: "https://picsum.photos/100/100?image=2",
    full: "https://picsum.photos/600/400?image=2",
  },
  {
    small: "https://picsum.photos/100/100?image=3",
    full: "https://picsum.photos/600/400?image=3",
  },
  {
    small: "https://picsum.photos/100/100?image=4",
    full: "https://picsum.photos/600/400?image=4",
  },
];

const addToCart = (product: any) => {
  cart.addToCart({
    id: product.id,
    title: product.title,
    price: product.price,
    image: product.image,
  });
};

const activeImageFull = ref(images[0].full);
const isModalOpen = ref(false);

function setActive(img: { small: string; full: string }) {
  activeImageFull.value = img.full;
}

function openModal() {
  isModalOpen.value = true;
}

function closeModal() {
  isModalOpen.value = false;
}
</script>

<style scoped>
.swiper-button-next,
.swiper-button-prev {
  color: white;
}
</style>
