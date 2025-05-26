<template>
  <div>
    <button class="inc" @click="increments">
      Kliknięto {{ count }} 
    </button>

    <button class="inc" @click="showHideUsers">
      Uzytkownicy
    </button>


    <ul v-if="showuser">
      <li>Szymon</li>
      <li>Kasia</li>
      <li>Konrad</li>
      <li>Natalia</li>
    </ul>

  </div>
</template>

<script lang="ts" setup>
const count = ref(0)
const showuser = ref(false)

const increments = () => {
  count.value++
}

const showHideUsers = () => {
  showuser.value = !showuser.value
}

</script>

<style scoped>
.inc {
  padding: 10px 10px 10px 10px;
  background-color: aqua;
  border: unset;
  cursor: pointer;
  font-size: 15px;
}
</style>