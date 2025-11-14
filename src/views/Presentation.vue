<script setup>
import { ref, onMounted } from 'vue'
import { texts } from '../lang.js'
import { defineProps } from 'vue'

const showTitle = ref(false)
const showText = ref(false)

onMounted(() => {
  setTimeout(() => {
    showTitle.value = true
  }, 500)

  setTimeout(() => {
    showText.value = true
  }, 1000)
})

const props = defineProps({
  lang: {
    type: String,
    default: 'fr'
  }
})

const currentTexts = texts[props.lang]

</script>

<template>
  <div class="Présentation">
    <transition name="fade">
      <h1 v-if="showTitle">{{ currentTexts.titleHome }}</h1>
    </transition>
    <transition name="fade">
      <div v-if="showText" class="ParagraphePrésentation">
        <div class="FirtsPart JusteConteneur">
          <div class="textePrésentation">
            <img class="imgProfile" src="/assets/Capture_d’écran_2025-10-06_à _9.35.44.png"/>
            <h2>{{ currentTexts.aboutMeTitle  }}</h2>
            <p v-html="currentTexts.aboutMeText"></p>
          </div>
        </div>
        <div class="SecondePart JusteConteneur">
          <div class="textePrésentation">
            <h2>{{ currentTexts.parcoursTitle }}</h2>
            <p v-html="currentTexts.parcoursText"></p>
            <p>{{ currentTexts.parcoursTextSeconde }}</p>
          </div>
          <div class="textePrésentation">
            <h2>{{ currentTexts.projetsTitle }}</h2>
            <p v-html="currentTexts.projetsText"></p>
            <p v-html="currentTexts.projetsTextSeconde"></p>
          </div>
        </div>
        <div class="LastPart JusteConteneur">
          <div class="textePrésentation">
            <h2>{{ currentTexts.objectifsTitle }}</h2>
            <p v-html="currentTexts.objectifsText"></p>
            <p v-html="currentTexts.objectifsTextSeconde"></p>
          </div>
        </div>
        <div class="FichiersPart JusteConteneur">
          <div class="textePrésentation">
            <h2>{{ currentTexts.fichiersTitle }}</h2>
            <p>{{ currentTexts.fichiersText }}</p>
          </div>
          <div class="Fichiers">
            <a href="/fichiers/CV_Mael_LLADO_V3.pdf" download class="btn">{{ currentTexts.cvBtn }}</a>
            <a href="/fichiers/PortfolioMaelLLADO.pdf" download class="btn">{{ currentTexts.portfolioBtn }}</a>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>

body.night .ParagraphePrésentation {
  border: 1px #C5A880 solid;
}

#app {
  .Header {
    display: flex;
  }
}

p {
  color: #3C3C3C;
  text-align: justify;
}

.imgProfile {
  border-radius: 70%;
  height: 30%;
  width: 30%;
}
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

.Présentation {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .ParagraphePrésentation {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 60px;
    width: 60%;
    box-shadow: 4px 4px 8px #525252;
    padding-top: 75px;
    border-radius: 35px;
    margin-bottom: 75px;
    .JusteConteneur {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .SecondePart {
      gap: 10%;
      width: 85%;
    }
    .FichiersPart {
      display: flex;
      flex-direction: column;
      gap: 50px;
      width: 80%;
    }
    .LastPart {
      border-bottom: 1px #C5A880 solid;
      border-top: 1px #C5A880 solid;
      padding: 25px 0px 65px 0px ;
        .textePrésentation {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 80%;
        }
    }
    .FirtsPart {
      padding-bottom: 45px;
      border-bottom: 1px #C5A880 solid;
      .textePrésentation {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 80%;
      }
    }
    .Fichiers {
      display: flex;
      justify-content: center;
      gap: 10%;
      align-items: center;
      width: 100%;
      padding-bottom: 75px;
      .btn {
        display: inline-block;
        background-color: #a08b6f;
        color: white;
        padding: 10px 20px;
        border-radius: 8px;
        text-decoration: none;
        font-weight: 400;
        transition: background-color 0.3s;
      }

      .btn:hover {
        background-color: #C5A880;
      }
    }
  }
}
@media only screen and (max-width: 800px) {
  .imgProfile {
    height: 55%;
    width: 55%;
  }
  .Présentation {
    .ParagraphePrésentation {
      border: none;
      border-radius: 0px;
      box-shadow: none;
      width: 100%;
      .SecondePart {
        flex-direction: column;
        gap: 50px;
      }
      .FirtsPart {
        .textePrésentation {
          width: 85%;
        }
      }
      .LastPart {
        .textePrésentation {
          width: 85%;
        }
      }
    }
  }
}
</style>
