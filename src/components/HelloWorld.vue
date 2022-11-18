<script setup lang="ts">
import { ref, reactive } from 'vue'

defineProps<{ msg: string }>()

const ping = ref("")

const echo = () => {
    alert(ping.value.toUpperCase())
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <input type="text" v-model="ping">
    <button type="button" @click="echo()">shout</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
