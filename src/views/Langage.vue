<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from 'vue-router'
const router = useRouter()
const ShowTitle = ref(false);
const ShowParagarphe = ref(false);

function goHome(lang) {
  router.push(`/${lang}/home`)
}

onMounted(() => {
  setTimeout(() => {
    ShowTitle.value = true;
  }, 500);

  setTimeout(() => {
    ShowParagarphe.value = true;
  }, 1000);
});

</script>

<template>
  <div class="LanguePage">
    <transition name="fade">
      <h1 v-if="ShowTitle">Language</h1>
    </transition>
    <transition name="fade">
      <div v-if="ShowParagarphe" class="langueConteneur">
        <h1>Welcome to You 👋 🎉 !</h1>
        <p>Choose your language :</p>
        <div class="buttons">
          <div class="ButtonLange" @click="goHome('fr')">
            <a>Français</a>
          </div>
          <div class="ButtonLange" @click="goHome('en')">
            <a>English</a>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style>
.LanguePage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 30px;
  .langueConteneur {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    height: 60%;
    width: 80%;
    border: 1px #C5A880 solid;
    box-shadow: 4px 4px 8px #525252;
    border-radius: 35px;
    padding-bottom: 75px;
    padding-top: 50px;
    .buttons {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 40px;
      width: 100%;
      height: 100px;
      .ButtonLange {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #C5A880;
        color: white;
        border: 1px lightgrey none;
        border-radius: 15px;
        padding: 8px 12px 8px 12px;
        text-align: center;
        text-decoration: none;
        cursor: pointer;
        font-size: 20px;
        height: 60%;
        width: 30%;
        transition: padding 0.4s ease;
        transition: font-size 0.4s ease;

      a {
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        text-decoration: none;
        color: #3C3C3C;
        transition: color 0.7s ease;
      }
      }
      .ButtonLange:hover {
        font-size: 25px;
        padding: 12px 16px 12px 16px;
        a {
          color: #A7895E;
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
  transform: translateY(-23px);
}
.fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}

@media only screen and (max-width: 800px) {
  .LanguePage {
    .langueConteneur{
      border: none;
      box-shadow: none;
      height: 100%;
      width: 100%;
    }
  }
}
</style>
