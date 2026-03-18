<script setup>
import { ref, watch } from "vue";
import { useRoute, useRouter, RouterLink } from "vue-router";
import Arrow from "../components/Arrow.vue";

const emit = defineEmits([
  "toggle-contact",
  "toggle-acceuil",
  "toggle-presentation",
  "toggle-annexe",
]);

const router = useRouter();

const props = defineProps({
  isContactOpen: {
    type: Boolean,
    default: false,
  },
  animationout: {
    type: Boolean,
    default: false,
  },
  projetout: {
    type: Boolean,
    default: false,
  },
  isPresentationOpen: {
    type: Boolean,
    default: false,
  },
  isAnnexeOpen: {
    type: Boolean,
    default: false,
  },
});

const buttonLabel = ref("Contacts");
const route = useRoute();

function onClickContact() {
  emit("toggle-contact");
}

async function GoToAcceuil() {
  emit("toggle-acceuil"); // 1) dit à App.vue : "lance l'anim"

  await new Promise((r) => setTimeout(r, 800)); // 2) attend 1.5s

  router.push({ name: "home" });
}

watch(
  () => props.isContactOpen,
  (newVal) => {
    buttonLabel.value = newVal ? "Accueil" : "Contacts";
  },
);

function goToPresentation() {
  emit("toggle-presentation");
}

function onClickAnnexe() {
  emit("toggle-annexe");
}
</script>

<template>
  <header>
    <div class="DownloadLinks">
      <a href="/fichiers/CV_Mael_LLADO_V3.pdf" download class="btn">CV</a>
      <a href="/fichiers/PortfolioMaelLLADO.pdf" download class="btn">Portfolio</a>
    </div>

    <h1>Mael LLADO</h1>

    <button @click="onClickContact" v-if="route.name === 'home' && !props.isPresentationOpen">
      <div class="ButtonContact">
        <span>{{ buttonLabel }}</span>
        <Arrow />
      </div>
    </button>
    <button @click="GoToAcceuil" v-if="route.name === 'Projet'">
      <div class="ButtonContact">
        <span>Accueil</span>
        <Arrow />
      </div>
    </button>
    <div class="ButtonContactPhone" v-if="route.name === 'home' && props.isContactOpen">
      <button @click="onClickContact">
        <div class="ButtonContact">
          <span>Accueil</span>
          <Arrow />
        </div>
      </button>
    </div>
    <div class="ButtonContactPhone" v-if="route.name === 'home' && props.isPresentationOpen">
      <button @click="goToPresentation">
        <div class="ButtonContact">
          <span>Accueil</span>
          <Arrow />
        </div>
      </button>
    </div>
    <div class="ButtonContactPhone" v-if="route.name === 'Projet'">
      <button @click="GoToAcceuil">
        <div class="ButtonContact">
          <span>Accueil</span>
          <Arrow />
        </div>
      </button>
    </div>
    <div class="ButtonContactPhone" v-if="route.name === 'home' && props.isAnnexeOpen">
      <button @click="onClickAnnexe">
        <div class="ButtonContact">
          <span>Accueil</span>
          <Arrow />
        </div>
      </button>
    </div>
  </header>
</template>
<style></style>
