<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { texts } from '../lang.js'
import Soleil from './soleil.vue'
import Lune from './lune.vue'
import { watch, onMounted } from 'vue'

const isNight = ref(false)
const route = useRoute()
const lang = computed(() => route.params.lang || 'en')
const currentTexts = computed(() => texts[lang.value])

watch(isNight, (newVal) => {
  document.body.classList.toggle('night', newVal)
  document.body.classList.toggle('day', !newVal)
})

onMounted(() => {
  // Définit l'état initial du thème
  document.body.classList.toggle('night', isNight.value)
  document.body.classList.toggle('day', !isNight.value)
})
</script>

<template>
  <div class="Header">
    <RouterLink :to="`/${lang}/projet`" class="Projet" :class="{ IsActive: $route.path === `/${lang}/projet` }">
      <a>{{ currentTexts.titleProject }}</a>
    </RouterLink>
    <RouterLink :to="`/${lang}/home`" class="Home" :class="{ IsActive: $route.path === `/${lang}/home` }">
      <a>{{ currentTexts.titleHome }}</a>
    </RouterLink>
    <RouterLink :to="`/${lang}/contacts`" class="Contact" :class="{ IsActive: $route.path === `/${lang}/contacts` }">
      <a>{{ currentTexts.titleContact }}</a>
    </RouterLink>
    <label @click="checkNightMode()" class="switch">
      <input type="checkbox" v-model="isNight">
      <span class="slider round">
        <component
          :is="isNight ? Lune : Soleil"
          class="icon-slide"
          :class="{ 'slide-right': isNight, 'slide-left': !isNight }"
        />
      </span>
    </label>
  </div>
</template>

<style scoped>
label {
  display: flex;
  position: absolute;
  right: 50px;
  cursor: pointer;
}

.slider.round {
  position: relative;
  width: 150px;
  height: 40px;
  display: flex;
  align-items: center;
  background: #2696D2;
  border-radius: 40px;
  background: url('/assets/mode/Group 11.svg') center/cover no-repeat;
  border: solid #2696D2 3px;
  transition: background 0.5s ease, color 0.5s ease;
}

input:checked + .slider.round {
  background: url('/assets/mode/Group 12.svg') center/cover no-repeat;
  border: solid #1E1A1A 3px;
  transition: background 0.5s ease, color 0.5s ease;
}

.icon-slide {
  position: absolute;
  top: 6px;
  left: 6px;
  width: 28px;
  height: 28px;
  transform: translateX(0px);
  transition: transform 3s ease;
}

.slide-left {
  transform: translateX(0px);
  animation: slideday 0.5s forwards;
}

@keyframes slideday {
  from {
    transform: translateX(104px);
  }
  to {
    transform: translateX(0px);
  }
}

.slide-right {
  transform: translateX(104px);
  animation: slnidenight 0.5s forwards;
}

@keyframes slnidenight {
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(104px);
  }
}

.switch input {
  display: none;
}

.Header {
  background-color: #E8DFD3;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 85px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  gap: 40px;
}

.Projet {
  background-color: #C5A880;
  color: white;
  border: 1px lightgrey none;
  border-radius: 15px;
  padding: 8px 12px 8px 12px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
  width: 145px;
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

.Projet:hover {
  font-size: 16px;
  padding: 12px 16px 12px 16px;
  a {
    color: #A7895E;
  }
}

.Projet.IsActive {
  font-size: 16px;
  padding: 12px 16px 12px 16px;
  transition: padding 0.4s ease;
  transition: font-size 0.5s ease;
  a {
    color: #A7895E;
  }
}

.Home {
  background-color: #C5A880;
  color: white;
  border: 1px lightgrey none;
  border-radius: 15px;
  padding: 8px 12px 8px 12px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
  width: 145px;
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

.Home:hover {
  font-size: 16px;
  padding: 12px 16px 12px 16px;
  a {
    color: #A7895E;
  }
}

.Home.IsActive {
  font-size: 16px;
  padding: 12px 16px 12px 16px;
  transition: padding 0.4s ease;
  transition: font-size 0.5s ease;
  a {
    color: #A7895E;
  }
}

.Contact {
  background-color: #C5A880;
  color: white;
  border: 1px lightgrey none;
  border-radius: 15px;
  padding: 8px 12px 8px 12px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
  width: 145px;
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

.Contact:hover {
  font-size: 16px;
  padding: 12px 16px 12px 16px;
  a {
    color: #A7895E;
  }
}

.Contact.IsActive {
  font-size: 16px;
  padding: 12px 16px 12px 16px;
  transition: padding 0.4s ease;
  transition: font-size 0.5s ease;
  a {
    color: #A7895E;
  }
}

@media only screen and (max-width: 800px) {
  .switch input {
    display: none;
    position: relative;
    bottom: 15px;
  }
  .slider.round {
    display: none;
  }
  .Header {
    border-radius: 0px;
    gap: 0px;
    background-color: transparent;
    margin-bottom: 45px;
    .Projet {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      padding: 0px;
      border-radius: 0px;
      border: none;
      font-size: 16px;
      border-radius: 0px 0px 30px 30px;
      transition: padding 0.4s ease;
    }
    .Projet.IsActive {
      padding: 0px;
      font-size: 20px;
      border: solid #A7895E 3px;
      background-color: white;
      padding-top: 50px;
      a {
        color: #A7895E;
        text-decoration: underline;
      }
    }
    .Home {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      padding: 0px;
      border-radius: 0px;
      border: none;
      font-size: 16px;
      border-radius: 0px 0px 30px 30px;
      transition: padding 0.4s ease;
    }
    .Home.IsActive {
      padding: 0px;
      font-size: 20px;
      border: solid #A7895E 3px;
      background-color: white;
      padding-top: 50px;
      a {
        color: #A7895E;
        text-decoration: underline;
      }
    }
    .Contact {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      padding: 0px;
      border-radius: 0px;
      border: none;
      font-size: 16px;
      border-radius: 0px 0px 30px 30px;
      transition: padding 0.4s ease;
    }
    .Contact.IsActive {
      padding: 0px;
      font-size: 20px;
      border: solid #A7895E 3px;
      background-color: white;
      padding-top: 50px;
      a {
        color: #A7895E;
      }
    }
  }
}
</style>
