<script setup>
import Header from './composentes/Header.vue';
</script>

<template>
  <div class="Conteneur">
    <Header />
    <router-view />
  </div>
</template>
<style>
body {
  width: 100%;
  width: 100%;
  background-color: #F9F6F1;
  color: #3C3C3C;
  font-family: 'Work Sans', sans-serif;
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

body.night {
  background: #1D1A1A;
  color: #ffffff;
  transition: background-color 0.5s ease, color 0.5s ease;
}
body.day {
  background: #F9F6F1;
  color: #111111;
  transition: background-color 0.5s ease, color 0.5s ease;
}
body.night p {
  color: #D9D9D9; /* ou une autre couleur spéciale */
}
body.day p {
  color: #222; /* ou autre */
}
</style>
