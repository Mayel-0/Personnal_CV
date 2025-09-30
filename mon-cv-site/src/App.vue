<script setup>
import Header from './composentes/Header.vue';
</script>

<template>
  <div class="Conteneur">
    <Header />
    <router-view />
  </div>
</template>
<style SCSS>
body {
  width: 100%;
  width: 100%;
  background-color: #F9F6F1;
  color: #3C3C3C;
  font-family: 'Roboto', sans-serif;
  padding: 0px;
  margin: 0px;

  .Conteneur{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   /* background-color: red; */
  }
}
</style>
