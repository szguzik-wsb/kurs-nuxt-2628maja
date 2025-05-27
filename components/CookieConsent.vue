<template>
  <div
    v-if="isMounted"
    class="fixed bottom-0 left-0 w-full bg-white border-t-[2px] border-green-600 border-solid text-base p-6 shadow-xl z-[99999] transform transition-transform duration-500 ease-out"
    :class="visible ? 'translate-y-0' : 'translate-y-full'"
  >
    <div
      class="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
    >
      <div class="flex items-start gap-3">
        <span class="material-symbols-outlined text-green-600 text-4xl mt-1"
          >cookie</span
        >
        <p class="text-gray-800 leading-relaxed text-base">
          Korzystając z naszej strony wyrażasz zgodę na wykorzystywanie plików
          cookie w celu poprawy jakości usług, analizy ruchu i personalizacji
          reklam. Więcej informacji znajdziesz w naszej polityce prywatności.
        </p>
      </div>
      <button
        @click="acceptCookies"
        class="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 text-base rounded-none"
      >
        Akceptuję
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Czy komponent w ogóle ma być renderowany
const isMounted = ref(false);
// Czy pasek jest pokazany animacyjnie
const visible = ref(false);

onMounted(() => {
  const accepted = localStorage.getItem("cookiesAccepted");

  if (accepted !== "true") {
    // opóźniamy pojawienie się, by animacja zadziałała
    isMounted.value = true;
    setTimeout(() => {
      visible.value = true;
    }, 50);
  }
});

const acceptCookies = () => {
  localStorage.setItem("cookiesAccepted", "true");
  visible.value = false;
  setTimeout(() => {
    isMounted.value = false;
  }, 500);
};
</script>

<style scoped>
.material-symbols-outlined {
  font-variation-settings:
    "FILL" 1,
    "wght" 600,
    "GRAD" 0,
    "opsz" 24;
}
</style>
