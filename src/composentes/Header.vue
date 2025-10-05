<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { texts } from '../lang.js'

const route = useRoute()

const lang = computed(() => route.params.lang || 'en')

const currentTexts = computed(() => texts[lang.value])

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
  </div>
</template>

<style scoped>
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
  .Header {
    border-radius: 0px;
    gap: 0px;
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
    }
    .Projet.IsActive {
      padding: 0px;
      font-size: 20px;
      a {
        color: #E8DFD3;
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
    }
    .Home.IsActive {
      padding: 0px;
      font-size: 20px;
      a {
        color: #E8DFD3;
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
    }
    .Contact.IsActive {
      padding: 0px;
      font-size: 20px;
      a {
        color: #E8DFD3;
      }
    }
  }
}
</style>
