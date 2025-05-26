<template>
 <!-- Produkt Page -->
    <main class="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6">
        <!-- Galeria zdjęć -->
        <div class="md:col-span-2">
            <div class="swiper productSwiper w-full min-w-0">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src="https://picsum.photos/600/400" alt="Produkt" class="w-full" />
                    </div>
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>
            <div class="grid grid-cols-4 gap-2 mt-4">
                <img src="https://picsum.photos/100/100" class="cursor-pointer border" />
                <img src="https://picsum.photos/101/100" class="cursor-pointer border" />
                <img src="https://picsum.photos/102/100" class="cursor-pointer border" />
                <img src="https://picsum.photos/103/100" class="cursor-pointer border" />
            </div>
        </div>

        <!-- Szczegóły produktu -->
        <div class="bg-white p-6 rounded shadow-md">
            <h1 class="text-2xl font-bold mb-2">Materac 140x200 kieszeniowy premium</h1>
            <p class="text-green-700 font-bold text-2xl mb-4">499,00 zł</p>

            <p class="text-sm text-gray-600 mb-4">Ekologiczny materac z pokrowcem, 7 stref twardości, wysokość 20cm</p>

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
            <NuxtLink to="/cart" class="block text-center w-full bg-green-600 hover:bg-green-700 text-white py-3 font-bold">
            DODAJ DO KOSZYKA
            </NuxtLink>

        </div>
    </main>
</template>

<script lang="ts" setup>

</script>

<style>

</style>