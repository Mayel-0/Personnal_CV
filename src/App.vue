<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import Header from '../src/components/Header.vue'
import Footer from '../src/components/Footer.vue'

const route = useRoute()

const isContactOpen = ref(false)
const animationOut = ref(false)
const projetout = ref(false)
const isPresentationOpen = ref(false)

function toggleContact() {
  isContactOpen.value = !isContactOpen.value
  console.log('ce value is', isContactOpen.value)
}

function toggleProject() {
  animationOut.value = true
  console.log('animationOut', animationOut.value)
}

function toggleAcceuil() {
 projetout.value = true
 console.log(projetout.value)
}

function togglePresentation() {
  isPresentationOpen.value = !isPresentationOpen.value
  console.log(' presentation ce value is', isPresentationOpen.value)
}

// reset quand on revient sur la page 'home'
watch(
  () => route.name,
  (newName) => {
    if (newName === 'home') {
      animationOut.value = false
      projetout.value = false
      isContactOpen.value = false
      isPresentationOpen.value = false
    }
  },
  { immediate: true }
)
</script>

<template>
  <div class="layout">
    <Header
      @toggle-contact="toggleContact"
      @toggle-acceuil="toggleAcceuil"
      :is-contact-open="isContactOpen"
      :is-presentation-open="isPresentationOpen"
    />
    <RouterView :is-contact-open="isContactOpen"
    :animationout="animationOut"
    :projetout="projetout"
    :is-presentation-open="isPresentationOpen"
    />
    <Footer
      @toggle-presentation="togglePresentation"
      @toggle-project="toggleProject"
      :is-contact-open="isContactOpen"
      :animationout="animationOut"
      :is-presentation-open="isPresentationOpen"
    />
  </div>
</template>
