<script setup>
import { ref, watch } from 'vue'
import Arrow from '../components/Arrow.vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const props = defineProps({
  isContactOpen: {
    type: Boolean,
    default: false,
  },
  animationout: {
    type: Boolean,
    default: false,
  },
  isPresentationOpen: {
    type: Boolean,
    default: false,
  },
})

// ✅ un seul defineEmits avec tous les events
const emit = defineEmits(['toggle-project', 'toggle-presentation'])

const buttonLabel = ref('Présentation')

async function goToProject() {
  emit('toggle-project')

  await new Promise(r => setTimeout(r, 800))

  router.push({ name: 'Projet' }) // ou router.push('/projet') selon ton router
}

function goToPresentation() {
  emit('toggle-presentation')
}

watch(
  () => props.isPresentationOpen,
  (newVal) => {
    buttonLabel.value = newVal ? 'Accueil' : 'Présentation'
  }
)
</script>

<template>
  <footer>
    <button
      @click="goToPresentation"
      v-if="!props.isContactOpen && route.name === 'home'"
    >
      <div class="ButtonContact">
        <Arrow />
        <span>{{ buttonLabel }}</span>
      </div>
    </button>

    <button
      @click="goToProject"
      v-if="!props.isContactOpen && route.name === 'home'"
    >
      <div class="ButtonContact" v-if="!props.isPresentationOpen">
        <span>Projet</span>
        <Arrow />
      </div>
    </button>
  </footer>
</template>
