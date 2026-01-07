<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Arrow from '../components/Arrow.vue'

const emit = defineEmits(['toggle-contact', 'toggle-acceuil', 'toggle-project', 'toggle-presentation', 'toggle-annexe'])

const isMobile = ref(false)

const updateIsMobile = () => {
  // équivalent d'une media query (max-width: 768px)
  isMobile.value = window.matchMedia('(max-width: 800px)').matches
}

onMounted(() => {
  updateIsMobile()
  window.addEventListener('resize', updateIsMobile)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateIsMobile)
})

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
  isAnnexeOpen: {
    type: Boolean,
    default: false,
  },
})

const accentPicker = ref(null)
const imgRef = ref(null)   // 🔴 ref pour l'image
const Containeur1 = ref(null)
const Containeur2 = ref(null)
const ContaineurContact = ref(null)
const containeur1Presentation = ref(null)
const containeur2Presentation = ref(null)
const containeur3Presentation = ref(null)
const Containeur1PhoneV = ref(null)
const Containeur2PhoneV = ref(null)
const Containeur3PhoneV = ref(null)
const Containeur4PhoneV = ref(null)
const PhoneV = ref(null)
const PhoneAnnexes = ref(null)

onMounted(() => {
  accentPicker.value.addEventListener('input', () => {
    document.documentElement.style
      .setProperty('--AccentCouleur', accentPicker.value.value)
  })

  if (props.isContactOpen === true) {
    console.log("j'ai vu que c'est ouvert (onMounted)")
  }
})

watch(
  () => props.isContactOpen,
  (newVal) => {
    if (!imgRef.value && Containeur1.value && Containeur2.value && ContaineurContact.value && PhoneV.value ) return   // sécurité

    const delay = 500
    setTimeout(() => {
    if (newVal) {
      console.log('isContactOpen vient de passer à true')
      imgRef.value.style.height = '50%'
      Containeur1.value.style.display = 'none'
      Containeur2.value.style.display = 'none'
      ContaineurContact.value.style.display = 'flex'
      if (isMobile.value) {
        PhoneV.value.style.display = 'none'
      }
    } else {
      console.log('isContactOpen vient de passer à false')
      imgRef.value.style.height = '60%'
      Containeur1.value.style.display = 'flex'
      Containeur2.value.style.display = 'flex'
      ContaineurContact.value.style.display = 'none'
      if (isMobile.value) {
        Containeur1.value.style.display = 'none'
        Containeur2.value.style.display = 'none'
        imgRef.value.style.height = '60%'
        PhoneV.value.style.display = 'flex'
      }
    }
    }, delay)
  }
)

watch(
  () => props.isPresentationOpen,
  (newVal) => {
    if (!imgRef.value || !Containeur1.value || !Containeur2.value || !ContaineurContact.value || !containeur1Presentation.value || !containeur2Presentation.value || !containeur3Presentation.value || !PhoneV.value || !Containeur1PhoneV.value || !Containeur2PhoneV.value || !Containeur3PhoneV.value || !Containeur4PhoneV.value) return

    const delay = 500
    setTimeout(() => {
      if (newVal) {
        Containeur1.value.style.display = 'none'
        Containeur2.value.style.display = 'none'
        imgRef.value.style.left = '75%'
        imgRef.value.style.height = '45%'
        containeur1Presentation.value.style.display = 'flex'
        containeur2Presentation.value.style.display = 'flex'
        containeur3Presentation.value.style.display = 'flex'
        if (isMobile.value) {
          PhoneV.value.style.display = 'none'
          imgRef.value.style.opacity = '0'
          imgRef.value.style.left = '50%'
          containeur1Presentation.value.style.display = 'none'
          containeur2Presentation.value.style.display = 'none'
          containeur3Presentation.value.style.display = 'none'
          Containeur1PhoneV.value.style.display = 'flex'
          Containeur2PhoneV.value.style.display = 'flex'
          Containeur3PhoneV.value.style.display = 'flex'
          Containeur4PhoneV.value.style.display = 'flex'
        }
      } else {
        Containeur1.value.style.display = 'flex'
        Containeur2.value.style.display = 'flex'
        imgRef.value.style.left = '50%'
        imgRef.value.style.height = '60%'
        containeur1Presentation.value.style.display = 'none'
        containeur2Presentation.value.style.display = 'none'
        containeur3Presentation.value.style.display = 'none'
        if (isMobile.value) {
          Containeur1.value.style.display = 'none'
          Containeur2.value.style.display = 'none'
          PhoneV.value.style.display = 'flex'
          imgRef.value.style.opacity = '1'
          Containeur1PhoneV.value.style.display = 'none'
          Containeur2PhoneV.value.style.display = 'none'
          Containeur3PhoneV.value.style.display = 'none'
          Containeur4PhoneV.value.style.display = 'none'
        }
      }
    }, delay)
  }
)

watch(
  () => props.isAnnexeOpen,
  (newVal) => {
    if (!imgRef.value || !PhoneV.value || !PhoneAnnexes.value) return

    const delay = 500
    setTimeout(() => {
      if (newVal) {
        if(isMobile) {
          PhoneV.value.style.display = 'none'
          PhoneAnnexes.value.style.display = 'flex'
        }
      } else {
        if(isMobile) {
          PhoneV.value.style.display = 'flex'
          PhoneAnnexes.value.style.display = 'none'
        }
      }
    }, delay)
  }
)

async function goToProject() {
  emit('toggle-project')

  await new Promise(r => setTimeout(r, 800))

  router.push({ name: 'Projet' })
}

function goToPresentation() {
  emit('toggle-presentation')
}

function onClickContact() {
  emit('toggle-contact')
}

function onClickAnnexe() {
  emit('toggle-annexe')
}

</script>

<template>
  <main>
    <img
      id="ImageME"
      src="../assets/image 1.png"
      ref="imgRef"
      :class="{'img--animated-out': props.animationout}"
    />
    <div class="containeur" ref="Containeur1" :class="{ 'containeur1--animated': !props.isContactOpen, 'containeur1--animated-out': props.isContactOpen || props.animationout || props.isPresentationOpen}">
      <h2>Mon site web</h2>
      <p><strong>Bienvenue sur Mon site web</strong></p>
      <label for="accentPicker">Couleur d'accent :</label>
      <input
        type="color"
        id="accentPicker"
        value="#09BCF5"
        ref="accentPicker"
      >
    </div>
    <div class="Contacts" ref="ContaineurContact" :class="{ 'Contact--animated': props.isContactOpen, 'Contact--animated-out': !props.isContactOpen}">
      <div class="Links">
          <a class="Link Linkdin" href="https://www.linkedin.com/in/llado-mael-54008a384/" target="_blank" rel="noopener noreferrer" @mouseenter="ShowSVG = true" @mouseleave="ShowSVG = false">
            Linkedin
            <svg class="iconLogo" width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.32003 2.67041e-05C4.20408 -0.00350952 5.05333 0.344289 5.68095 0.966909C6.30858 1.58953 6.66316 2.43597 6.66669 3.32003C6.67023 4.20408 6.32243 5.05333 5.69981 5.68095C5.07719 6.30858 4.23075 6.66316 3.34669 6.66669C2.46264 6.67023 1.61339 6.32243 0.985765 5.69981C0.358144 5.07719 0.00356292 4.23075 2.67041e-05 3.34669C-0.00350952 2.46264 0.344289 1.61339 0.966909 0.985765C1.58953 0.358144 2.43597 0.00356292 3.32003 2.67041e-05ZM0.680027 7.33336H6.01336V23.3334H0.680027V7.33336ZM8.68003 7.33336H13.7467V9.60003H13.8134C14.52 8.26669 16.2667 6.86669 18.88 6.86669C24.2934 6.86669 25.28 10.4267 25.28 15V23.3334H19.9467V16.1334C19.9467 14.4 19.92 12.1334 17.4134 12.1334C14.88 12.1334 14.48 14 14.48 16V23.3334H8.68003V7.33336Z"/>
            </svg>
          </a>
          <a class="Link Github" href="https://github.com/Mayel-0" target="_blank" rel="noopener noreferrer">
            Github
            <svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.3333 0C6.86667 0 0 6.86667 0 15.3333C0 22.1333 4.4 27.8667 10.5333 29.8667C11.3333 30 11.6 29.6 11.6 29.2V26.5333C7.33333 27.4667 6.4 24.5333 6.4 24.5333C5.73333 22.9333 4.8 22.4 4.8 22.4C3.46667 21.4667 4.93333 21.4667 4.93333 21.4667C6.4 21.6 7.2 22.9333 7.2 22.9333C8.53333 23.0667 8.13333 25.3333 10.9333 24.6667C11.0667 23.6 11.4667 22.9333 11.8667 22.5333C8.4 22.1333 4.66667 20.8 4.66667 14.6667C4.66667 12.9333 5.33333 11.4667 6.26667 10.2667C6.13333 9.86667 5.6 8.26667 6.4 6.13333C6.4 6.13333 7.73333 5.73333 10.9333 7.73333C12.2667 7.33333 13.7333 7.2 15.2 7.2C16.6667 7.2 18.1333 7.33333 19.4667 7.73333C22.6667 5.6 24 6.13333 24 6.13333C24.8 8.26667 24.2667 9.86667 24.1333 10.2667C25.0667 11.4667 25.7333 12.9333 25.7333 14.6667C25.7333 20.8 22 22.1333 18.4 22.5333C18.9333 22.9333 19.4667 23.8667 19.4667 25.3333V29.4667C19.4667 29.8667 19.7333 30.2667 20.5333 30.1333C26.6667 28.1333 31.0667 22.2667 31.0667 15.6C30.6667 6.86667 23.8 0 15.3333 0Z"/>
            </svg>
          </a>
          <a class="Link Mail" href="mailto:llado.mael33@gmail.com?subject=Contact%20depuis%20le%20site%20:&body=Bonjour,%0AJe%20vous%20contacte%20concernant..." target="_blank" rel="noopener noreferrer">
            Gmail
            <svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.66667 0H24C24.7072 0 25.3855 0.280951 25.8856 0.781048C26.3857 1.28115 26.6667 1.95942 26.6667 2.66667V18.6667C26.6667 19.3739 26.3857 20.0522 25.8856 20.5523C25.3855 21.0524 24.7072 21.3333 24 21.3333H2.66667C1.95942 21.3333 1.28115 21.0524 0.781048 20.5523C0.280951 20.0522 0 19.3739 0 18.6667V2.66667C0 1.95942 0.280951 1.28115 0.781048 0.781048C1.28115 0.280951 1.95942 0 2.66667 0ZM2.66667 2.66667V2.68L13.3333 12L24 2.68V2.66667H2.66667ZM24 18.6667V6.66667L13.3333 14.6667L2.66667 6.66667V18.6667H24Z"/>
            </svg>
          </a>
          <a class="Link instagrame" href="https://www.instagram.com/mayel__0/" target="_blank" rel="noopener noreferrer">
            Instagram
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.33333 0H19.3333C21.2783 0 23.1435 0.772617 24.5188 2.14788C25.8941 3.52315 26.6667 5.38841 26.6667 7.33333V19.3333C26.6667 21.2783 25.8941 23.1435 24.5188 24.5188C23.1435 25.8941 21.2783 26.6667 19.3333 26.6667H7.33333C5.38841 26.6667 3.52315 25.8941 2.14788 24.5188C0.772617 23.1435 0 21.2783 0 19.3333V7.33333C0 5.38841 0.772617 3.52315 2.14788 2.14788C3.52315 0.772617 5.38841 0 7.33333 0ZM7.33333 2.66667C6.09566 2.66667 4.90867 3.15833 4.0335 4.0335C3.15833 4.90867 2.66667 6.09566 2.66667 7.33333V19.3333C2.66667 20.571 3.15833 21.758 4.0335 22.6332C4.90867 23.5083 6.09566 24 7.33333 24H19.3333C20.571 24 21.758 23.5083 22.6332 22.6332C23.5083 21.758 24 20.571 24 19.3333V7.33333C24 6.09566 23.5083 4.90867 22.6332 4.0335C21.758 3.15833 20.571 2.66667 19.3333 2.66667H7.33333ZM13.3333 6.66667C15.1014 6.66667 16.7971 7.36905 18.0474 8.61929C19.2976 9.86953 20 11.5652 20 13.3333C20 15.1014 19.2976 16.7971 18.0474 18.0474C16.7971 19.2976 15.1014 20 13.3333 20C11.5652 20 9.86953 19.2976 8.61929 18.0474C7.36905 16.7971 6.66667 15.1014 6.66667 13.3333C6.66667 11.5652 7.36905 9.86953 8.61929 8.61929C9.86953 7.36905 11.5652 6.66667 13.3333 6.66667ZM13.3333 9.33333C12.2725 9.33333 11.2551 9.75476 10.5049 10.5049C9.75476 11.2551 9.33333 12.2725 9.33333 13.3333C9.33333 14.3942 9.75476 15.4116 10.5049 16.1618C11.2551 16.9119 12.2725 17.3333 13.3333 17.3333C14.3942 17.3333 15.4116 16.9119 16.1618 16.1618C16.9119 15.4116 17.3333 14.3942 17.3333 13.3333C17.3333 12.2725 16.9119 11.2551 16.1618 10.5049C15.4116 9.75476 14.3942 9.33333 13.3333 9.33333ZM21 6.66667C21.442 6.66667 21.866 6.84226 22.1785 7.15482C22.4911 7.46738 22.6667 7.89131 22.6667 8.33333C22.6667 8.77536 22.4911 9.19928 22.1785 9.51184C21.866 9.82441 21.442 10 21 10C20.558 10 20.134 9.82441 19.8215 9.51184C19.5089 9.19928 19.3333 8.77536 19.3333 8.33333C19.3333 7.89131 19.5089 7.46738 19.8215 7.15482C20.134 6.84226 20.558 6.66667 21 6.66667Z" />
            </svg>
          </a>
        </div>
    </div>
    <div class="containeur" ref="Containeur2" :class="{ 'containeur2--animated': !props.isContactOpen, 'containeur2--animated-out': props.isContactOpen || props.animationout || props.isPresentationOpen}" >
      <h2>À propos de moi</h2>
      <p>
        Bonjour, je m’appelle <strong>Maël LLADO.</strong>
        Je suis actuellement étudiant à l’école privée <strong>Ynov Campus Bordeaux</strong>,
        après avoir obtenu mon <strong>Baccalauréat Professionnel SN (Systèmes Numériques), option RISC</strong>
        , avec la <strong>mention Très Bien</strong>, au lycée polyvalent Jean-Monnet de Libourne.
      </p>
    </div>

    <div class="containeur presentation" ref="containeur1Presentation" :class="{'animated-presentation1': props.isPresentationOpen, 'animated-presentation1-out': !props.isPresentationOpen}">
      <h2>Parcours et expériences</h2>
      <p>
        Passionné d’informatique depuis le collège, j’ai orienté mon parcours vers la programmation. Lors de mes stages chez <strong>Snark Factory</strong>, j’ai découvert le développement web et appris le <strong>HTML, CSS, SCSS et le JavaScript</strong> , en réalisant plusieurs sites en <strong>Vue.js.</strong>

        J’ai également effectué d’autres stages en maintenance informatique et en boutique spécialisée, ce qui m’a permis d’élargir mes compétences.
      </p>
    </div>
    <div class="containeur presentation" ref="containeur2Presentation" :class="{'animated-presentation2': props.isPresentationOpen, 'animated-presentation2-out': !props.isPresentationOpen}">
      <h2>Projets personnels</h2>
      <p>
        En autodidacte, j’ai appris le <strong>Python</strong> et développé un de mes plus gros projets : un logiciel de <strong>reconnaissance faciale</strong>, présenté à l’oral de mon Bac. Ce projet m’a permis d’apprendre à utiliser <strong>GitHub</strong> et à structurer mon code comme un vrai développeur.

        J’ai aussi expérimenté <strong>la programmation de jeux vidéo avec Unreal Engine 5</strong>, par curiosité et pour élargir mes connaissances.
      </p>
    </div>
    <div class="containeur presentation" ref="containeur3Presentation" :class="{'animated-presentation1': props.isPresentationOpen, 'animated-presentation1-out': !props.isPresentationOpen}">
      <h2>Objectifs</h2>
      <p>
        Mon objectif est de continuer à apprendre et à acquérir de l’expérience dans différents domaines de l’informatique. Je souhaite devenir <strong>polyvalent</strong>, aussi bien en <strong>développement web, full-stack</strong> qu’en <strong>programmation de jeux vidéo</strong>, qui sont les sujets qui m’intéressent le plus.

        J’ai également une première expérience en <strong>cybersécurité</strong>, grâce à mes trois années de Bac Pro SN RISC, à ma participation à des <strong>CTF</strong> et à mes recherches personnelles. Curieux et motivé, j’aime relever de nouveaux défis et je souhaite évoluer vers un métier passionnant dans le développement informatique.
      </p>
    </div>
    <div class="PhoneVersionAffichage">
      <div class="containeur presentation" ref="Containeur1PhoneV" :class="{'animated-presentation1': props.isPresentationOpen, 'animated-presentation1-out': !props.isPresentationOpen}" >
        <h2>À propos de moi</h2>
        <p>
          Bonjour, je m’appelle <strong>Maël LLADO.</strong>
          Je suis actuellement étudiant à l’école privée <strong>Ynov Campus Bordeaux</strong>,
          après avoir obtenu mon <strong>Baccalauréat Professionnel SN (Systèmes Numériques), option RISC</strong>
          , avec la <strong>mention Très Bien</strong>, au lycée polyvalent Jean-Monnet de Libourne.
        </p>
      </div>
      <div class="containeur presentation" ref="Containeur2PhoneV" :class="{'animated-presentation1': props.isPresentationOpen, 'animated-presentation1-out': !props.isPresentationOpen}">
        <h2>Parcours et expériences</h2>
        <p>
          Passionné d’informatique depuis le collège, j’ai orienté mon parcours vers la programmation. Lors de mes stages chez <strong>Snark Factory</strong>, j’ai découvert le développement web et appris le <strong>HTML, CSS, SCSS et le JavaScript</strong> , en réalisant plusieurs sites en <strong>Vue.js.</strong>

          J’ai également effectué d’autres stages en maintenance informatique et en boutique spécialisée, ce qui m’a permis d’élargir mes compétences.
        </p>
      </div>
      <div class="containeur presentation" ref="Containeur3PhoneV" :class="{'animated-presentation2': props.isPresentationOpen, 'animated-presentation2-out': !props.isPresentationOpen}">
        <h2>Projets personnels</h2>
        <p>
          En autodidacte, j’ai appris le <strong>Python</strong> et développé un de mes plus gros projets : un logiciel de <strong>reconnaissance faciale</strong>, présenté à l’oral de mon Bac. Ce projet m’a permis d’apprendre à utiliser <strong>GitHub</strong> et à structurer mon code comme un vrai développeur.

          J’ai aussi expérimenté <strong>la programmation de jeux vidéo avec Unreal Engine 5</strong>, par curiosité et pour élargir mes connaissances.
        </p>
      </div>
      <div class="containeur presentation" ref="Containeur4PhoneV" :class="{'animated-presentation1': props.isPresentationOpen, 'animated-presentation1-out': !props.isPresentationOpen}">
        <h2>Objectifs</h2>
        <p>
          Mon objectif est de continuer à apprendre et à acquérir de l’expérience dans différents domaines de l’informatique. Je souhaite devenir <strong>polyvalent</strong>, aussi bien en <strong>développement web, full-stack</strong> qu’en <strong>programmation de jeux vidéo</strong>, qui sont les sujets qui m’intéressent le plus.

          J’ai également une première expérience en <strong>cybersécurité</strong>, grâce à mes trois années de Bac Pro SN RISC, à ma participation à des <strong>CTF</strong> et à mes recherches personnelles. Curieux et motivé, j’aime relever de nouveaux défis et je souhaite évoluer vers un métier passionnant dans le développement informatique.
        </p>
      </div>
    </div>
    <div class="PhoneversionAnnexes" ref="PhoneAnnexes">
      <div class="FichiersD" :class="{ 'containeur1--animated': props.isAnnexeOpen, 'containeur1--animated-out': !props.isAnnexeOpen}">
        <a href="/fichiers/CV_Mael_LLADO_V3.pdf" download class="btn">CV</a>
      </div>
      <div class="FichiersD" :class="{ 'containeur2--animated': props.isAnnexeOpen, 'containeur2--animated-out': !props.isAnnexeOpen}">
        <a href="/fichiers/PortfolioMaelLLADO.pdf" download class="btn">Portfolio</a>
      </div>
    </div>
    <section class="PhoneV" ref="PhoneV">
      <div class="range">
        <div class="RangButton" :class="{ 'containeur1--animated': !props.isContactOpen, 'containeur1--animated-out': props.isContactOpen || props.animationout || props.isPresentationOpen || props.isAnnexeOpen}">
          <button @click="onClickAnnexe" >
            <div class="ButtonContact">
              <Arrow />
              <span>Annexes</span>
            </div>
          </button>
          <button @click="onClickContact" >
            <div class="ButtonContact" >
              <Arrow />
              <span>Contact</span>
            </div>
          </button>
        </div>
        <div class="RangButton" :class="{ 'containeur2--animated': !props.isContactOpen, 'containeur2--animated-out': props.isContactOpen || props.animationout || props.isPresentationOpen || props.isAnnexeOpen}">
          <button
            @click="goToPresentation">
            <div class="ButtonContact">
              <span>Presentation</span>
              <Arrow />
            </div>
          </button>
          <button
          @click="goToProject"
          >
            <div class="ButtonContact">
              <span>Projet</span>
              <Arrow />
            </div>
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<style>
  .range {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .RangButton {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .presentation {
    display: none;
  }
  main div:nth-child(5),
  main div:nth-child(6),
  main div:nth-child(7) {
    padding: 2rem;
  }

  main div:nth-child(6) {
    width: 40%;
    height: 250px;
  }

  main div:nth-child(7) {
    position: absolute;
    bottom: 10%;
    width: 40%;
  }

  main div:nth-child(5) {
    width: 45%;
    height: 250px;
  }

  main div:nth-child(5),
  main div:nth-child(6) {
    margin-top: 2%;
  }

  .PhoneVersionAffichage {
    display: none;
  }

  .PhoneversionAnnexes {
    display: none;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50%;
    gap: 30px;
    margin-top: 30%;
    .FichiersD {
      width: 100%;
      display: flex;
      background-color: var(--AccentCouleur);
      box-shadow: none;
      border: none;
      padding: 20px 6px;
      border-radius: 35px;
      margin: 0px;
      a {
        font-size: 25px;
        text-align: center;
        width: 100%;
        color: var(--TextCouleur);
      }
    }
  }


  @media (max-width: 800px) {
    main div:nth-child(7),
    main div:nth-child(6),
    main div:nth-child(5) {
      display: none;
    }

    .PhoneVersionAffichage {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 30px;
      margin-top: 30px;
    }

    .containeur {
      height: auto;
    }
    main div:nth-child(4) {
      margin-top: 0px;
    }
    .PhoneV {
      height: 50%;
      margin-top: 10%;
    }
    .PhoneversionAnnexes {
      margin-top: 30%;
      & .FichiersD {
        border-radius: 20px;
        a {
          font-size: 14px;
        }
      }
    }
  }

</style>
