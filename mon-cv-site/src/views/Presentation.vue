<script setup>
import { ref, onMounted } from 'vue'

// variables réactives pour contrôler l'affichage
const showTitle = ref(false)
const showText = ref(false)

onMounted(() => {
  // au montage du composant, on déclenche les apparitions avec un délai
  setTimeout(() => {
    showTitle.value = true
  }, 500)

  setTimeout(() => {
    showText.value = true
  }, 1000)
})
</script>

<template>
  <div class="Présentation">
    <!-- On utilise v-if et <transition> pour animer -->
    <transition name="fade">
      <h1 v-if="showTitle">Hello world !</h1>
    </transition>
    <transition name="fade">
      <p v-if="showText" class="ParagraphePrésentation">
        Bonjour je suis, Maël LLADO
      </p>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active {
  transition: all 1s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}
.fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}

p {
  color: #3C3C3C;
}
article {
  padding-bottom: 1000px;
}
</style>
