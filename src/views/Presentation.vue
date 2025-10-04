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
      <h1 v-if="showTitle">Présentation</h1>
    </transition>
    <transition name="fade">
      <div v-if="showText" class="ParagraphePrésentation">
        <div class="FirtsPart JusteConteneur">
          <div class="textePrésentation">
            <img class="imgProfile" src="/public/assets/163682734.jpeg"/>
            <h2>À propos de moi</h2>
            <p>
              Bonjour, je m’appelle <strong>Maël LLADO</strong>. Je suis actuellement étudiant à l’école privée
              <strong>Ynov Campus Bordeaux</strong>, après avoir obtenu mon
              <strong>Baccalauréat Professionnel SN (Systèmes Numériques), option RISC</strong>, avec la
              <strong>mention Très Bien</strong>, au lycée polyvalent Jean-Monnet de Libourne.
            </p>
          </div>
        </div>
        <div class="SecondePart JusteConteneur">
          <div class="textePrésentation">
            <h2>Parcours et expériences</h2>
            <p>
              Passionné d’informatique depuis le collège, j’ai orienté mon parcours vers la programmation.
              Lors de mes stages chez <strong>Snark Factory</strong>, j’ai découvert le développement web
              et appris le <strong>HTML, CSS, SCSS</strong> et le <strong>JavaScript</strong>, en réalisant
              plusieurs sites en <strong>Vue.js</strong>.
            </p>
            <p>
              J’ai également effectué d’autres stages en maintenance informatique et en boutique spécialisée,
              ce qui m’a permis d’élargir mes compétences.
            </p>
          </div>
          <div class="textePrésentation">
            <h2>Projets personnels</h2>
            <p>
              En autodidacte, j’ai appris le <strong>Python</strong> et développé un de mes plus gros projets :
              un logiciel de <strong>reconnaissance faciale</strong>, présenté à l’oral de mon Bac. Ce projet
              m’a permis d’apprendre à utiliser <strong>GitHub</strong> et à structurer mon code comme un
              vrai développeur.
            </p>
            <p>
              J’ai aussi expérimenté la <strong>programmation de jeux vidéo</strong> avec
              <strong>Unreal Engine 5</strong>, par curiosité et pour élargir mes connaissances.
            </p>
          </div>
        </div>
        <div class="LastPart JusteConteneur">
          <div class="textePrésentation">
            <h2>Objectifs</h2>
            <p>
              Mon objectif est de continuer à apprendre et à acquérir de l’expérience dans différents
              domaines de l’informatique. Je souhaite devenir <strong>polyvalent</strong>, aussi bien en
              <strong>développement web</strong>, <strong>full-stack</strong> qu’en
              <strong>programmation de jeux vidéo</strong>, qui sont les sujets qui m’intéressent le plus.
            </p>
            <p>
              J’ai également une première expérience en <strong>cybersécurité</strong>, grâce à mes trois années
              de Bac Pro SN RISC, à ma participation à des <strong>CTF</strong> et à mes recherches personnelles.
              Curieux et motivé, j’aime relever de nouveaux défis et je souhaite évoluer vers un métier passionnant
              dans le développement informatique.
            </p>
          </div>
        </div>
        <div class="FichiersPart JusteConteneur">
          <div class="textePrésentation">
            <h2>Fichiers joints</h2>
            <p>
              Vous pouvez retrouver ici mon CV et mon portfolio pour en savoir plus sur mon parcours et mes projets.
            </p>
          </div>
          <div class="Fichiers">
            <a href="/public/fichiers/CV Mael LLADO V3.pdf" download class="btn">Mon CV</a>
            <a href="/public/fichiers/Portfolio Mael LLADO.pdf" download class="btn">Mon Portfolio</a>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.imgProfile {
  border-radius: 50%;
  height: 20%;
  width: 20%;
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

  p {
    color: #3C3C3C;
    text-align: justify;
  }
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
