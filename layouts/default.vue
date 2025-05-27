<template>
  <TopBarInfo />
  <TopBar />
  <slot />
  <Footer />
</template>

<script setup>
useHead({
  bodyAttrs: {
    class: "bg-green-50 text-gray-800 font-sans",
  },
});
</script>
