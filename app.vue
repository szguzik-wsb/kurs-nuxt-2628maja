<template>
  <TopBar />
  <NuxtPage />
  <CookieConsent />
  <Footer />
</template>

<script setup>
import { ref } from "vue";

useHead({
  bodyAttrs: {
    class: "bg-green-50 text-gray-800 font-sans",
  },
});

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
