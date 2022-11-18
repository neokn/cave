<script setup lang="ts">
import { ref, reactive } from 'vue'

defineProps<{ msg: string }>()

const echo = ref("")

const yelling = () => {
    fetch(`http://echo.zuplo.io/?echo=${echo.value}`)
        .then((response) => response.json())
        .then((data) => alert(data.query.echo))
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <input type="text" v-model="echo">
    <button type="button" @click="yelling()">yelling</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
input {
    padding: 5px 12px;
    font-size: 14px;
    line-height: 20px;
    color: #24292e;
    vertical-align: middle;
    background-color: #ffffff;
    background-repeat: no-repeat;
    background-position: right 8px center;
    border: 1px solid #e1e4e8;
    border-radius: 6px;
    outline: none;
    box-shadow: rgba(225, 228, 232, 0.2) 0px 1px 0px 0px inset;

}
input:focus{
    border-color: #0366d6;
    outline: none;
    box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
}
</style>
