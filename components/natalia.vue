<template>
<div>
<input class="input" 
v-model="name" 
placeholder="Wpisz swoje imię" 
/>

<p v-if="name">Cześć, {{ name }}!</p>
<p v-show="name">Cześć, {{ name }}!</p>

</div>
</template>
 
<script lang="ts" setup>
const name = ref('')
</script>
 
<style scoped>
.input {
  padding: 8px;
  margin-bottom: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
 
p {
  font-weight: bold;
}
</style>