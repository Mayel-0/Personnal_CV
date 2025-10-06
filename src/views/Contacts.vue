<script setup>
import { ref, onMounted } from 'vue'
import { texts } from '../lang.js'
import { defineProps } from 'vue'

const ShowTitle = ref(false)
const ShowContacts = ref(false)
const ShowSVG = ref(false)

onMounted(() => {
  setTimeout(() => {
    ShowTitle.value = true
  }, 500)
    setTimeout(() => {
    ShowContacts.value = true
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
  <div class="Contacts">
    <transition name="fade">
      <h1 v-if="ShowTitle" >{{ currentTexts.titleContact }}</h1>
    </transition>
    <transition name="fade">
      <div v-if="ShowContacts" class="ContactAll">
        <img class="photo" src="/assets/Capture_d’écran_2025-10-06_à _9.35.44.png"/>
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
          <div class="text">{{ currentTexts.textContact }}</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style>

.Contacts {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-items: center;
  margin-top: 2%;
  height: 100%;
  .ContactAll {
    border: 1px #C5A880 solid;
    box-shadow: 4px 4px 8px #525252;
    border-radius: 35px;
    margin-top: 30px;
    height: auto;
    width: 70%;
    display: flex;
    align-items: center;

    .photo {
      width: 30%;
      height: 45%;
      display: block;
      user-select: none;
      pointer-events: none;
      border-radius: 35px;
    }
    .Links {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      a {
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        text-decoration: none;
        color: #3C3C3C;
      }

      .text {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 65%;
        margin-top: 25px;
      }
      .Link{
        display: flex;
        align-items: center;
        justify-content: space-around;
        background-color: #A7895E;
        border: 1px #A7895E solid;
        border-radius: 26px;
        transition: background-color 0.2s ease;
        width: 46%;
        margin-top: 10px;
        margin-bottom: 10px ;

        &:hover {
          background-color: #F9F6F1;

          svg {
            fill: #3C3C3C;
            margin-left: 0;
          }
        }
        svg {
          width: 26px;
          height:26px;
          margin: 15px;
          fill: #A7895E;
          transition: all 0.4s ease;
          cursor: pointer;
          margin-left: -40px;
          margin-right: 15px;
        }
      }
    }
  }
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

@media only screen and (max-width: 800px) {
  .Contacts {
    .ContactAll {
      flex-direction: column;
      padding-bottom: 40px;
      width: 100%;
      border: none;
      box-shadow: none;
      gap: 80px;
      .photo {
        height: auto;
        width: 60%;
      }
      .Links {
        .Link {
          width: 65%;
        }
        .text {
          padding-top: 30px;
        }
      }
    }
  }
}
</style>
