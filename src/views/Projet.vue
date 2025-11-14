<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { texts } from '../lang.js'
import { defineProps } from 'vue'

const ShowTitle = ref(false);
const ShowParagarphe = ref(false);
const activeSection = ref(null);

let observer; // on le déclare ici pour y accéder dans onUnmounted

onMounted(() => {
  // Animations titres
  setTimeout(() => {
    ShowTitle.value = true;
  }, 500);

  setTimeout(() => {
    ShowParagarphe.value = true;
  }, 1000);

  // IntersectionObserver amélioré
  const sections = document.querySelectorAll(".Project");
  observer = new IntersectionObserver(
    (entries) => {
      let maxRatio = 0;
      let mostVisibleId = null;
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          mostVisibleId = entry.target.id;
        }
      });
      if (mostVisibleId) {
        activeSection.value = mostVisibleId;
        console.log("Active section =>", activeSection.value);
      }
    },
    { threshold: [0, 0.3, 0.5, 0.7, 1] }
  );
  sections.forEach((section) => observer.observe(section));
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});

const props = defineProps({
  lang: {
    type: String,
    default: 'fr'
  }
})

const currentTexts = texts[props.lang]

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
        <h1 v-if="ShowTitle">{{ currentTexts.titleProject }}</h1>
      </transition>
      <transition name="fade">
      </transition>
    </div>
    <transition name="fade">
      <div v-if="ShowParagarphe" class="ProjectListes">
        <div id="project1" class="Project">
          <div class="partTop">
            <img class="PhotoProject" src="/assets/assets-task_01k5e52ncte16sfyg8tzym9m9y-1758190521_img_0.webp"/>
            <div class="textContenue">
              <h2>{{ currentTexts.titleProjectP1 }}</h2>
              <p>{{ currentTexts.textProjectP1 }}</p>
              <h3>{{ currentTexts.titleGithubP1 }}</h3>
              <p>{{ currentTexts.textGithubP1 }}</p>
            </div>
          </div>
          <div class="partBottom">
            <div class="textContenue">
              <p>{{ currentTexts.descriptionTextP1 }}</p>
              <p class="p1">{{ currentTexts.textReadMe }}</p>
              <div class="InformationProject">
                <div class="Card">
                  <h3>{{ currentTexts.titleLanguage }}</h3>
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
            <a href="https://github.com/StarWeizz/projet-red_Eldoria" target="_blank" rel="noopener noreferrer" class="ButtonProjet">{{ currentTexts.linkTextGithub }}</a>
          </div>
        </div>
        <div id="project2" class="Project">
          <div class="partTop">
            <img class="PhotoProject" src="/assets/assets_task_01k6gwm67pfdjb350mnhqwt4fv_1759356168_img_1.webp"/>
            <div class="textContenue">
              <h2>Face Recognition</h2>
              <p>{{ currentTexts.textProjectP2 }}</p>
              <h3>{{ currentTexts.titleGithubP2 }}</h3>
              <p>{{ currentTexts.textGithubP2 }}</p>
            </div>
          </div>
          <div class="partBottom">
            <div class="textContenue">
              <p>{{ currentTexts.descriptionTextP2 }}</p>
              <p class="p1">{{ currentTexts.textReadMe }}</p>
              <div class="InformationProject">
                <div class="Card">
                  <h3>{{ currentTexts.titleLanguage }}</h3>
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
            <a href="https://github.com/Mayel-0/projet-chef-doeuvre-2024" target="_blank" rel="noopener noreferrer" class="ButtonProjet">{{ currentTexts.linkTextGithub }}</a>
          </div>
        </div>
        <div id="project3" class="Project">
          <div class="partTop">
            <img class="PhotoProject" src="/assets/assets_task_01k6gxy2w3f9hrh52byy50vtqg_1759357436_img_0.webp"/>
            <div class="textContenue">
              <h2>CTF</h2>
              <p>{{ currentTexts.textProjectP3 }}</p>
              <h3>{{ currentTexts.titleGithubP3 }}</h3>
              <p>{{ currentTexts.textGithubP3 }}</p>
            </div>
          </div>
          <div class="partBottom">
            <div class="textContenue">
              <p>{{ currentTexts.descriptionTextP3_1 }}</p>
              <p>{{ currentTexts.descriptionTextP3_2 }}</p>
              <p>{{ currentTexts.descriptionTextP3_3 }}</p>
              <p>{{ currentTexts.descriptionTextP3_4 }}</p>
              <p class="p1">{{ currentTexts.textReadMe }}</p>
              <div class="contenueStatue">
                <div class="ButtonStatue ButtonStatuefalse">{{ currentTexts.textPrivate }}</div>
              </div>
            </div>
            <a href="https://github.com/Mayel-0/CTF-Entrainement-et-Realisation" target="_blank" rel="noopener noreferrer" class="ButtonProjet">{{ currentTexts.linkTextGithub }}</a>
          </div>
        </div>
        <div id="project4" class="Project">
          <div class="partTop">
            <img class="PhotoProject" src="/assets/onepiecedle.png"/>
            <div class="textContenue">
              <h2>One piece DLE</h2>
              <p>{{ currentTexts.textProjectP5 }}</p>
              <h3>{{ currentTexts.titleGithubP2 }}</h3>
              <p>{{ currentTexts.textGithubP5 }}</p>
            </div>
          </div>
          <div class="partBottom">
            <div class="textContenue">
              <p>{{ currentTexts.descriptionTextP5 }}</p>
              <div class="contenueStatue">
                <div class="ButtonStatue">Public</div>
              </div>
            </div>
            <a href="https://one-piece-dle-game.vercel.app/" target="_blank" rel="noopener noreferrer" class="ButtonProjet">{{ currentTexts.LikeSite }}</a>
          </div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <aside v-if="ShowParagarphe" >
        <ul>
          <li><a href="#project1" :class="{ active: activeSection === 'project1' }" >Eldoria Game</a></li>
          <li><a href="#project2" :class="{ active: activeSection === 'project2' }" >Face_recognition</a></li>
          <li><a href="#project3" :class="{ active: activeSection === 'project3' }" >CTF 2025</a></li>
          <li><a href="#project4" :class="{ active: activeSection === 'project4' }" >One piece DLE</a></li>
        </ul>
      </aside>
    </transition>
  </div>

</template>

<style>
#app {
  .Header {
    display: flex;
  }

}
body.night .ProjectPage .Project {
  background-color: #1D1A1A;
  color: #ffffff;
  border: 1px #C5A880 solid;
}

body.night .ProjectPage svg {
  fill: #D9D9D9;
}

html {
  scroll-behavior: smooth;
}

aside {
  position: fixed;
  left: 0px;
  top: 50%;
  a {
    color: #3C3C3C;
    color: #A7895E; /* couleur de ton choix */
    border-left: 3px solid #A7895E;
    padding-left: 8px;
  }
  a.active {
    font-weight: bold;
    color: red;
    border-left: 4px solid red;
    background: rgba(255,0,0,0.1);
  }
}
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
    margin-top: 35px;
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
          height: 250px;
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
          .p1 {
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
  transform: translateY(-35px);
}
.fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}

@media only screen and (max-width: 800px) {
  aside {
    display: none;
  }
  .ProjectPage {
    width: 100%;
    .ProjectListes {
      width: 100%;
      .Project {
        border: none;
        box-shadow: none;
        border-bottom: 2px #C5A880 solid;
        border-top: 2px #C5A880 solid;
        padding-bottom: 45px;
        .partTop {
          flex-direction: column;
          .textContenue {
            width: 80%;
          }
          .PhotoProject {
            margin: 0px;
            margin-bottom: 20px;
            height: auto;
          }
        }
        .partBottom {
          padding: 0px;
          .textContenue {
            .InformationProject {
              .Card {
                .contenue {
                  flex-direction: column;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
