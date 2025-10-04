<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function goHome(lang) {
  router.push(`/${lang}/home`)
}
</script>

<template>
  <button @click="goHome('fr')">Français</button>
  <button @click="goHome('en')">English</button>
</template>

<style>
#app {
  .Header {
    display: none;
  }

}
.LangagePage {

}
</style>
