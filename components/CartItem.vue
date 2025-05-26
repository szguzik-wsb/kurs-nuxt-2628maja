<template>
  <div
    class="bg-white p-4 rounded shadow flex flex-col md:flex-row justify-between items-center gap-4"
  >
    <img :src="product.image" class="rounded border" alt="Produkt" />
    <div class="flex-1">
      <h3 class="font-bold">{{ product.title }}</h3>
      <p class="text-sm text-gray-500">{{ product.description }}</p>
    </div>
    <div class="flex items-center gap-2 min-w-[96px] justify-center">
      <button
        class="bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded cursor-pointer"
        @click="decrement"
      >
        <span class="material-symbols-outlined">remove</span>
      </button>
      <span class="w-6 text-center">{{ product.quantity }}</span>
      <button
        class="bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded cursor-pointer"
        @click="increment"
      >
        <span class="material-symbols-outlined">add</span>
      </button>
    </div>
    <p class="text-green-700 font-bold whitespace-nowrap w-[100px] text-right">
      {{ (product.price * product.quantity).toFixed(2) }} zł
    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  product: { type: Object, required: true },
});
const emit = defineEmits(["update:quantity"]);

const increment = () => {
  emit("update:quantity", props.product.quantity + 1, props.product.id);
};
const decrement = () => {
  if (props.product.quantity > 1) {
    emit("update:quantity", props.product.quantity - 1, props.product.id);
  }
};
</script>

<style scoped>
.material-symbols-outlined {
  font-variation-settings:
    "FILL" 1,
    "wght" 400,
    "GRAD" 0,
    "opsz" 24;
  font-size: 20px;
  line-height: 1;
  display: inline-block;
  vertical-align: middle;
}
</style>
