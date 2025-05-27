<template>
  <main class="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-4 gap-6">
    <!-- Panel filtrów -->
    <aside
      class="hidden md:block sticky top-[84px] h-fit bg-white p-4 rounded shadow-md"
    >
      <h3 class="text-lg font-bold mb-4">Filtry</h3>
      <div class="mb-4">
        <h4 class="font-semibold mb-2">Kategorie</h4>
        <ul class="text-sm text-gray-700 space-y-1">
          <li>
            <label class="flex items-center space-x-2">
              <input type="checkbox" @change="toggleCategory('Eko Dom')" />
              <span>Eko Dom</span>
            </label>
          </li>
          <li>
            <label class="flex items-center space-x-2">
              <input type="checkbox" @change="toggleCategory('Sypialnia')" />
              <span>Sypialnia</span>
            </label>
          </li>
          <li>
            <label class="flex items-center space-x-2">
              <input type="checkbox" @change="toggleCategory('Ogród')" />
              <span>Ogród</span>
            </label>
          </li>
          <li>
            <label class="flex items-center space-x-2">
              <input type="checkbox" @change="toggleCategory('Zero Waste')" />
              <span>Zero Waste</span>
            </label>
          </li>
        </ul>
      </div>
      <div class="mb-4">
        <h4 class="font-semibold mb-2">Dostawa</h4>
        <label class="block text-sm"
          ><input type="checkbox" class="mr-2" />Darmowa dostawa</label
        >
        <label class="block text-sm"
          ><input type="checkbox" class="mr-2" />Dostawa do wtorku</label
        >
      </div>
      <div class="mb-4">
        <h4 class="font-semibold mb-2">Stan</h4>
        <label class="block text-sm"
          ><input type="checkbox" class="mr-2" />Nowe</label
        >
        <label class="block text-sm"
          ><input type="checkbox" class="mr-2" />Używane</label
        >
      </div>
      <div>
        <h4 class="font-semibold mb-2">Cena</h4>
        <div class="flex items-center gap-2">
          <input
            type="number"
            placeholder="od"
            class="w-1/2 px-2 py-1 border rounded text-sm"
          />
          <input
            type="number"
            placeholder="do"
            class="w-1/2 px-2 py-1 border rounded text-sm"
          />
        </div>
      </div>
    </aside>

    <!-- Sekcja z produktami -->
    <section class="md:col-span-3">
      <h2 class="text-2xl font-bold mb-6">
        Lista produktów
      </h2>
      <div class="grid gap-6">
        <div v-if="pending">Ładowanie...</div>
        <div v-else-if="error">Błąd: {{ error.message }}</div>
        <template v-else>
          <NuxtLink
            v-for="product in visibleProducts"
            :key="product.id"
            to="/product"
            class="bg-white p-4 flex flex-col md:flex-row gap-4 shadow-md"
          >
            <img
              :src="product.image"
              alt="Produkt"
              class="w-full md:w-48 h-auto object-cover"
            />
            <div class="flex-1">
              <h3 class="text-lg font-semibold">
                {{ product.title }} | {{ product.categories.join(", ") }}
              </h3>
              <p class="text-sm text-gray-600 mb-2">
                {{ product.description }}
              </p>
              <p class="text-green-700 font-bold text-lg">
                {{ product.price.toFixed(2) }} zł
              </p>
              <button
                class="mt-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 
                font-semibold"
              >
                Dodaj do koszyka
              </button>
            </div>
          </NuxtLink>

          <!-- Element sentinel dla IntersectionObservera -->
          <div ref="loadMoreRef" class="h-8"></div>
        </template>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const { data: allProducts, pending, error } = await useFetch("/api/products");
const limit = 20;
const displayed = ref(limit);
const selectedCategories = ref<string[]>([]);

const toggleCategory = (category: string) => {
  const index = selectedCategories.value.indexOf(category);
  if (index > -1) {
    selectedCategories.value.splice(index, 1);
  } else {
    selectedCategories.value.push(category);
  }
};

const filteredProducts = computed(() => {
  if (!selectedCategories.value.length) return allProducts.value || [];
  return (allProducts.value || []).filter((product: any) =>
    selectedCategories.value.some((cat) => product.categories.includes(cat)),
  );
});

const visibleProducts = computed(() =>
  filteredProducts.value.slice(0, displayed.value),
);

const loadMoreRef = ref<HTMLElement | null>(null);
onMounted(() => {
  if (!loadMoreRef.value) return;

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        displayed.value += limit;
      }
    },
    { threshold: 1.0 },
  );
  observer.observe(loadMoreRef.value);
});
</script>

<style scoped>
/* Można dodać np. animację dla ładowania później */
</style>
