<script setup>
import { ref, onMounted} from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Animation = ref(false)

const Projet1 = ref(null)
const Projet2 = ref(null)
const Projet3 = ref(null)
const Projet4 = ref(null)

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
  isAnnexeOpen: {
    type: Boolean,
    default: false,
  },
})



onMounted(() => {
  Animation.value = true

  console.log(props.projetout)
  gsap.from(Projet1.value, {
    x: -100,              // slide depuis la gauche
    opacity: 0,           // part transparent
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: Projet1.value,
      start: 'top 70%',
      end: 'bottom 60%',          // important pour avoir une zone d’activation
      scrub: true,
      //markers: true,
    },
  })
  gsap.from(Projet2.value, {
    x: -100,              // slide depuis la gauche
    opacity: 0,           // part transparent
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: Projet2.value,
      start: 'top 70%',
      end: 'bottom 60%',          // important pour avoir une zone d’activation
      scrub: true,
      // markers: true,
    },
  })
  gsap.from(Projet3.value, {
    x: -100,              // slide depuis la gauche
    opacity: 0,           // part transparent
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: Projet3.value,
      start: 'top 70%',
      end: 'bottom 60%',          // important pour avoir une zone d’activation
      scrub: true,
      //markers: true,
    },
  })
  gsap.from(Projet4.value, {
    x: -100,              // slide depuis la gauche
    opacity: 0,           // part transparent
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: Projet4.value,
      start: 'top 70%',
      end: 'bottom 10%',          // important pour avoir une zone d’activation
      scrub: true,
      //markers: true,
    },
  })
})

</script>
<template>
  <section class="main">
    <div class="containeur" :class="{'Animation-int': Animation, 'Animation-out': props.projetout}" ref="Projet1" id="Projet1">
      <div class="PartOne">
        <div class="IMGContaineur">
          <img src="../assets/Eldoria.webp"/>
        </div>
        <div class="TextTop">
          <h2>Projet_Red: Eldoria</h2>
          <p>Ce projet a été créé dans le cadre de mes études à Ynov Campus lors de ma première année (B1). Il a été réalisé en une semaine en Golang. On nous a demandé de créer un jeu CLI, c’est-à-dire en ligne de commande dans le terminal.</p>
          <h2>Github</h2>
          <p>Pour ce Projet nous etions 3 et notre projet est entierement disponible sur Gihub</p>
        </div>
      </div>
      <div class="PartTwo">
        <p>Eldoria est un jeu d'aventure textuel où vous incarnez un explorateur qui découvre le village d'Ynovia. Rencontrez Emeryn, le guide du village, et percez les mystères qui entourent ce lieu magique. Découvrez un portail vers un autre monde, mais attention aux monstres qui rôdent... et au redoutable boss Maximor ! Ce jeu est en ligne de commande dans le Terminal (CLI), mais intègre une particularité unique : une map interactive pour un jeu plus agréable à jouer.</p>
        <span>Voici un extrait du Read.me</span>
      </div>
      <div class="PartTree">
        <div class="FirtsPart">
          <h2>Langue</h2>
          <span>Golang</span>
        </div>
        <div class="LastPart">
          <h2>FrameWork</h2>
          <div class="frameworklist">
            <div class="cut">
              <span>fmt</span>
              <span>log</span>
              <span>os</span>
              <span>os/exec</span>
              <span>strings</span>
              <span>unicode</span>
            </div>
            <div class="cut">
              <span>bufio</span>
              <span>encoding/json</span>
              <span>io/ioutil</span>
              <span>time</span>
              <span>strconv</span>
              <span>math/rand</span>
            </div>
          </div>
        </div>
      </div>
      <div class="Public">
        Public
      </div>
      <a href="https://github.com/StarWeizz/projet-red_Eldoria" target="_blank" rel="noopener noreferrer">Voir le Projet sur Github</a>
    </div>
    <div class="containeur" ref="Projet2" id="Projet2">
      <div class="PartOne">
        <div class="IMGContaineur">
          <img src="../assets/FaceRecognition.webp"/>
        </div>
        <div class="TextTop">
          <h2>Face Recognition</h2>
          <p>J’ai eu 4 semaines pour coder un logiciel en Python. J’ai dû réaliser plusieurs versions de mon code : une pour les photos, une autre pour les vidéos et une dernière pour la vidéo en direct via la webcam.</p>
          <h2>Github</h2>
          <p>Ce projet est un projet personnel que j’ai mené afin de gagner des points bonus pour mon bac Profesionnel SN Option RISC</p>
        </div>
      </div>
      <div class="PartTwo">
        <p>Notre projet porte sur la reconnaissance faciale. Nous codons en Python 3 sur Visual Studio Code. Notre projet consiste à reconnaître les visages présents sur une photo ou sur une vidéo, puis à les comparer à une base de données comportant plusieurs visages dans plusieurs dossiers différents. L'objectif est de déterminer si la personne est connue de la base de données ou si elle est inconnue. Si le visage est reconnu, le logiciel doit simplement afficher le nom de cette personne sur l'image. Ce logiciel est intéressant car il peut être utilisé dans un dispositif de sécurité, dans diverses situations ou comme un "portier" dans un lieu où l'on pourrait installer ce dispositif devant une porte ou un portail. S'il reconnaît la personne, la porte ou le portail se déverrouille, et inversement. Cela constitue l'aspect utile de notre projet, qui répond à de vrais problèmes et besoins en matière de sécurité.</p>
        <span>Voici un extrait du Read.me</span>
      </div>
      <div class="PartTree">
        <div class="FirtsPart">
          <h2>Langue</h2>
          <span>Python</span>
        </div>
        <div class="LastPart">
          <h2>FrameWork</h2>
          <div class="frameworklist">
            <div class="cut">
              <span>face_recognition</span>
              <span>concurrent.futures</span>
              <span>os</span>
              <span>cv2</span>
            </div>
            <div class="cut">
              <span>uuid</span>
              <span>numpy</span>
              <span>tqdm</span>
            </div>
          </div>
        </div>
      </div>
      <div class="Public">
        Public
      </div>
      <a href="https://github.com/Mayel-0/projet-chef-doeuvre-2024" target="_blank" rel="noopener noreferrer">Voir le Projet sur Github</a>
    </div>
    <div class="containeur" ref="Projet3" id="Projet3">
      <div class="PartOne">
        <div class="IMGContaineur">
          <img src="../assets/CTF.webp"/>
        </div>
        <div class="TextTop">
          <h2>CTF</h2>
          <p>J'ai participé au CTF 2025 sur le site Root Me, organisé par cette même plateforme.</p>
          <h2>Ecole SN</h2>
          <p>Ce projet nous a été proposé par notre professeur de Sciences Numériques afin de nous entraîner à la sécurité informatique et au hacking éthique.</p>
        </div>
      </div>
      <div class="PartTwo">
        <p>CTF Entrainement et Realisation (Programmation, Web)

          Le CTF (Capture The Flag) est une compétition nationale de Cybersécurité où les participants s’affrontent pour résoudre des énigmes et des problèmes de sécurité informatique.

          Le but ultime est de « capturer le drapeau », qui est généralement un code secret ou un fichier spécifique caché dans un système informatique vulnérable.

          Les CTF sont des environnements sécurisés qui permettent aux professionnels et aux étudiants en sécurité informatique d’apprendre, de pratiquer et de développer leurs compétences tout en s’amusant.
        </p>
        <span>Voici un extrait du Read.me</span>
      </div>
      <div class="Public Private">
        Privé
      </div>
      <a href="https://github.com/Mayel-0/CTF-Entrainement-et-Realisation" target="_blank" rel="noopener noreferrer">Voir le Projet sur Github</a>
    </div>
    <div class="containeur" ref="Projet4" id="Projet4">
      <div class="PartOne">
        <div class="IMGContaineur">
          <img src="../assets/onepiecedle.png"/>
        </div>
        <div class="TextTop">
          <h2>One piece DLE</h2>
          <p>One Piece DLE est un projet de fan game basé sur l'univers de One Piece. Le but de ce jeux est de trouver un personnage precis dans l'univers de one piece comme un geoguessr pour les personnage.</p>
          <h2>GitHub</h2>
          <p>Projet a etais fait personnelement en dehors de mes projets d'école pour le plaisir de creer ce jeux. en vue.js full front il y a une database prévue en MySQL pour le futur pour l'instant tout est en front (ce site fonctionne et recoit des améliorations).</p>
        </div>
      </div>
      <div class="PartTwo">
        <p>Ce jeux est en vue.js pour l'instant en full front-end mais elle obtiendtiendra bientot une base de donnée MySQL avec un backend en golang pour gere la comunication entre le front et la base de donnée. ce dernier est un fan game basé sur l'univers de One Piece qui comport plusieur mode de jeux différents le classique ou l'on doit trouver un personnage précis dans les 250 que contien le json (base de données actuelle en front end) en ce basant sur les information comme la prime, le haki, la taille etc... un autre mode de jeux qui est le fruit du demon ou l'on doit deviner le fruit du démon d'un personnage en se basant sur des indices et un dernier mode de jeux ou l'on doit deviner a quelle personnage appartient quel rire, ce jeux est simple mais amusant et j'ai pris plaisir a le coder. c'est un projet amusant et serieux qui grandi au fur et a mesure des mise a jour et de mes connaissances en dev web.</p>
        <span>Voici un extrait du Read.me</span>
      </div>
      <div class="Public ">
        Public
      </div>
      <a href="https://one-piece-dle-game.vercel.app/" target="_blank" rel="noopener noreferrer">Voir le Projet sur Github</a>
    </div>
  </section>
</template>

<style>
  .main {
    padding: 30px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: var(--Textcouleur);
    font-family: 'Text';
    gap: 50px;
    .containeur {
      width: 60%;
      a {
        display: flex;
        text-align: center;
        justify-content: center;
        color: var(--AccentCouleur);
      }
      .Public {
        margin-top: 20px;
        font-size: 12px;
        color: rgb(42, 200, 11);
        padding: 6px 10px 6px 10px;
        border-radius: 18px;
        width: 30px;
        border: 1px rgb(42, 200, 11) solid;
      }
      .Private {
        border: 1px rgb(214, 34, 34) solid;
        color: rgb(214, 34, 34);
      }
      .PartOne {
        display: flex;
        gap: 30px;
        .IMGContaineur {
          img {
            position: relative;
            height: auto;
            border-radius: 25px;
            width: 100%;
          }
        }
        .TextTop {
          height: 20%;
        }
      }
    }
    .PartTwo {
      padding: 20px 0px;
      border-top: 1px solid var(--AccentCouleur);
      border-bottom: 1px solid var(--AccentCouleur);
      span {
        opacity: 0.5;
      }
    }
    .PartTree {
      display: flex;
      justify-content: space-around;
      .FirtsPart {
        span {
          display: flex;
          text-align: center;
          justify-content: center;
        }
      }
      .LastPart {
        .frameworklist {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          .cut {
            display: flex;
            flex-direction: column;
            text-align: center;
          }
        }
      }
    }
  }

  h1 {
    color: var(--AccentCouleur);
  }
  @media (max-width: 800px) {
    .PartOne {
      flex-direction: column;
    }
    section {
      margin-top: 0px;
    }
  }
</style>
