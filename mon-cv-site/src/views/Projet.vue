<script setup>
import {ref, onMounted} from 'vue'

const ShowTitle = ref(false)
const ShowParagarphe = ref(false)

onMounted(() => {
  setTimeout(() => {
    ShowTitle.value = true
  }, 500)

  setTimeout(() => {
    ShowParagarphe.value = true
  }, 1000)
})

</script>
<template>
  <div class="ProjectPage">
    <div class="IntroProj">
      <transition name="fade">
        <svg v-if="ShowTitle" width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.3333 0C6.86667 0 0 6.86667 0 15.3333C0 22.1333 4.4 27.8667 10.5333 29.8667C11.3333 30 11.6 29.6 11.6 29.2V26.5333C7.33333 27.4667 6.4 24.5333 6.4 24.5333C5.73333 22.9333 4.8 22.4 4.8 22.4C3.46667 21.4667 4.93333 21.4667 4.93333 21.4667C6.4 21.6 7.2 22.9333 7.2 22.9333C8.53333 23.0667 8.13333 25.3333 10.9333 24.6667C11.0667 23.6 11.4667 22.9333 11.8667 22.5333C8.4 22.1333 4.66667 20.8 4.66667 14.6667C4.66667 12.9333 5.33333 11.4667 6.26667 10.2667C6.13333 9.86667 5.6 8.26667 6.4 6.13333C6.4 6.13333 7.73333 5.73333 10.9333 7.73333C12.2667 7.33333 13.7333 7.2 15.2 7.2C16.6667 7.2 18.1333 7.33333 19.4667 7.73333C22.6667 5.6 24 6.13333 24 6.13333C24.8 8.26667 24.2667 9.86667 24.1333 10.2667C25.0667 11.4667 25.7333 12.9333 25.7333 14.6667C25.7333 20.8 22 22.1333 18.4 22.5333C18.9333 22.9333 19.4667 23.8667 19.4667 25.3333V29.4667C19.4667 29.8667 19.7333 30.2667 20.5333 30.1333C26.6667 28.1333 31.0667 22.2667 31.0667 15.6C30.6667 6.86667 23.8 0 15.3333 0Z"/>
        </svg>
      </transition>
      <transition name="fade">
        <h1 v-if="ShowTitle">Mes Projects</h1>
      </transition>
      <transition name="fade">
        <div v-if="ShowParagarphe" class="TextIntro">
          Voici une listes de la plus part de mes projects
        </div>
      </transition>
    </div>
    <transition name="fade">
      <div v-if="ShowParagarphe" class="ProjectListes">
        <div class="Project">
          <div class="partTop">
            <img class="PhotoProject" src="/assets/assets-task_01k5e52ncte16sfyg8tzym9m9y-1758190521_img_0.webp"/>
            <div class="textContenue">
              <h2>Projet_Red: Eldoria</h2>
              <p>Ce projet a été créé dans le cadre de mes études à Ynov Campus lors de ma première année (B1). Il a été réalisé en une semaine en Golang. On nous a demandé de créer un jeu CLI, c’est-à-dire en ligne de commande dans le terminal.</p>
              <h3>Github</h3>
              <p>Pour ce Projet nous etions 3 et notre projet est entierement disponible sur Gihub</p>
            </div>
          </div>
          <div class="partBottom">
            <div class="textContenue">
              <p>
                Eldoria est un jeu d'aventure textuel où vous incarnez un explorateur qui découvre le village d'Ynovia. Rencontrez Emeryn, le guide du village, et percez les mystères qui entourent ce lieu magique. Découvrez un portail vers un autre monde, mais attention aux monstres qui rôdent... et au redoutable boss Maximor !
                Ce jeu est en ligne de commande dans le Terminal (CLI), mais intègre une particularité unique : une map interactive pour un jeu plus agréable à jouer.
              </p>
              <p1>
                Voici un extrait du Read.me
              </p1>
              <div class="InformationProject">
                <div class="Card">
                  <h3>Langue</h3>
                  <p>Golang</p>
                </div>
                <div class="Card">
                  <h3>FrameWork</h3>
                  <div class="contenue">
                    <div class="Division">
                      <p>fmt</p>
                      <p>log</p>
                      <p>os</p>
                      <p>os/exec</p>
                      <p>strings</p>
                      <p>unicode</p>
                    </div>
                    <div class="Division">
                      <p>bufio</p>
                      <p>encoding/json</p>
                      <p>io/ioutil</p>
                      <p>time</p>
                      <p>strconv</p>
                      <p>math/rand</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="contenueStatue">
                <div class="ButtonStatue">Public</div>
              </div>
            </div>
            <a href="https://github.com/StarWeizz/projet-red_Eldoria" target="_blank" rel="noopener noreferrer" class="ButtonProjet">Voir le Projet sur Github</a>
          </div>
        </div>
        <div class="Project">
          <div class="partTop">
            <img class="PhotoProject" src="/assets/assets_task_01k6gwm67pfdjb350mnhqwt4fv_1759356168_img_1.webp"/>
            <div class="textContenue">
              <h2>Face Recognition</h2>
              <p>J’ai eu 4 semaines pour coder un logiciel en Python. J’ai dû réaliser plusieurs versions de mon code : une pour les photos, une autre pour les vidéos et une dernière pour la vidéo en direct via la webcam.</p>
              <h3>Personnel : Github</h3>
              <p>Ce projet est un projet personnel que j’ai mené afin de gagner des points bonus pour mon bac Profesionnel SN Option RISC </p>
            </div>
          </div>
          <div class="partBottom">
            <div class="textContenue">
              <p>
                Notre projet porte sur la reconnaissance faciale. Nous codons en Python 3 sur Visual Studio Code. Notre projet consiste à reconnaître les visages présents sur une photo ou sur une vidéo, puis à les comparer à une base de données comportant plusieurs visages dans plusieurs dossiers différents. L'objectif est de déterminer si la personne est connue de la base de données ou si elle est inconnue. Si le visage est reconnu, le logiciel doit simplement afficher le nom de cette personne sur l'image. Ce logiciel est intéressant car il peut être utilisé dans un dispositif de sécurité, dans diverses situations ou comme un "portier" dans un lieu où l'on pourrait installer ce dispositif devant une porte ou un portail. S'il reconnaît la personne, la porte ou le portail se déverrouille, et inversement. Cela constitue l'aspect utile de notre projet, qui répond à de vrais problèmes et besoins en matière de sécurité.
              </p>
              <p1>
                Voici un extrait du Read.me
              </p1>
              <div class="InformationProject">
                <div class="Card">
                  <h3>Langue</h3>
                  <p>Python</p>
                </div>
                <div class="Card">
                  <h3>FrameWork</h3>
                  <div class="contenue">
                    <div class="Division">
                      <p>os</p>
                      <p>concurrent.futures</p>
                      <p>face_recognition</p>
                      <p>cv2</p>
                    </div>
                    <div class="Division">
                      <p>uuid</p>
                      <p>numpy</p>
                      <p>tqdm</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="contenueStatue">
                <div class="ButtonStatue">Public</div>
              </div>
            </div>
            <a href="https://github.com/Mayel-0/projet-chef-doeuvre-2024" target="_blank" rel="noopener noreferrer" class="ButtonProjet">Voir le Projet sur Github</a>
          </div>
        </div>
        <div class="Project">
          <div class="partTop">
            <img class="PhotoProject" src="/assets/assets_task_01k6gxy2w3f9hrh52byy50vtqg_1759357436_img_0.webp"/>
            <div class="textContenue">
              <h2>CTF</h2>
              <p>J'ai participé au CTF 2025 sur le site Root Me, organisé par cette même plateforme.</p>
              <h3>Ecole SN</h3>
              <p>Ce projet nous a été proposé par notre professeur de Sciences Numériques afin de nous entraîner à la sécurité informatique et au hacking éthique.</p>
            </div>
          </div>
          <div class="partBottom">
            <div class="textContenue">
              <p>
                CTF Entrainement et Realisation (Programmation, Web)
              </p>
              <p>
                Le CTF (Capture The Flag) est une compétition nationale de Cybersécurité où les participants s’affrontent pour résoudre des énigmes et des problèmes de sécurité informatique.
              </p>
              <p>
                Le but ultime est de « capturer le drapeau », qui est généralement un code secret ou un fichier spécifique caché dans un système informatique vulnérable.
              </p>
              <p>
                Les CTF sont des environnements sécurisés qui permettent aux professionnels et aux étudiants en sécurité informatique d’apprendre, de pratiquer et de développer leurs compétences tout en s’amusant.
              </p>
              <p1>
                Voici un extrait du Read.me
              </p1>
              <div class="contenueStatue">
                <div class="ButtonStatue ButtonStatuefalse">Privé</div>
              </div>
            </div>
            <a href="https://github.com/Mayel-0/CTF-Entrainement-et-Realisation" target="_blank" rel="noopener noreferrer" class="ButtonProjet">Voir le Projet sur Github</a>
          </div>
        </div>
      </div>
    </transition>
  </div>

</template>

<style SCSS>
.ProjectPage {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .IntroProj {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 4%;
    svg {
      height: 75px;
      width: 75px;
      fill: #3C3C3C;
    }
  }
  .ProjectListes {
    margin-top: 30px;
    height: auto;
    width: 65%;
    text-align: justify;
    .Project {
      display: flex;
      flex-direction: column;
      margin-bottom: 35px;
      padding:25px 35px 25px 35px;
      border-radius: 35px;
      box-shadow: 4px 4px 8px #525252;
      background-color: #F9F6F1;
      .partTop {
        display: flex;
        padding-bottom: 25px;
        border-bottom: 1px #A7895E solid;
        .PhotoProject {
          height: 300px;
          width: auto;
          border-radius: 35px;
          margin-right: 35px;
        }
        .textContenue {
          width: 50%;
          h3 {
            margin-top: 35px;
          }
        }
      }
      .partBottom {
        margin-top: 20px;
        padding-left: 30px;
        padding-right: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .textContenue{
          margin-bottom: 45px;
          p1 {
            opacity: 0.6;
          }
          .contenueStatue {
            display: flex;
            .ButtonStatue {
              margin-top: 20px;
              font-size: 12px;
              color: rgb(42, 200, 11);
              padding: 6px 10px 6px 10px;
              border-radius: 18px;
              height: auto;
              width: auto;
              border: 1px rgb(42, 200, 11) solid;
            }
            .ButtonStatuefalse {
              border: 1px rgb(214, 34, 34) solid;
              color: rgb(214, 34, 34);
            }
          }
          .InformationProject {
            border-top: 1px #A7895E solid;
            margin-top: 25px;
            display: flex;
            .Card {
              width: 50%;
              .contenue {
                display: flex;
                .Division{
                  width: 50%;
                }
              }
            }
            p {
              margin: 0px;
              padding-top: 3px;
            }
          }
        }
        .ButtonProjet {
          border-bottom: 1px #A7895E solid;
          font-size: 18px;
          cursor: pointer;
          color: #A7895E;
          font-style: none;
          text-decoration: none;
        }
      }
    }
  }
}
.fade-enter-active {
  transition: all 1.5s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(-13px);
}
.fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>
