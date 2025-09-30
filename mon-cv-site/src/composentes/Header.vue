<template>
  <div class="Header">
    <RouterLink to="/CV" class="CV" :class="{ IsActive: $route.path === '/CV' }">
      <a>Mon CV</a>
    </RouterLink>
    <RouterLink to="/" class="Home" :class="{ IsActive: $route.path === '/' }">
      <a>Présentation</a>
    </RouterLink>
    <RouterLink to="/projet" class="Projet" :class="{ IsActive: $route.path === '/projet' }">
      <a>Mes Projets</a>
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
  /* position: fixed; */
}

.Projet {
  background-color: #C5A880;
  color: white;
  border: 1px lightgrey none;
  border-radius: 15px;
  padding: 8px 12px 8px 12px;
  margin-left: 15px;
  margin-right: 15px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
  width: 6%;

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
  transition: padding 0.4s ease;
  transition: font-size 0.4s ease;
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
  margin-left: 15px;
  margin-right: 15px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
  width: 6%;

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
  transition: padding 0.4s ease;
  transition: font-size 0.4s ease;
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

.CV {
  background-color: #C5A880;
  color: white;
  border: 1px lightgrey none;
  border-radius: 15px;
  padding: 8px 12px 8px 12px;
  margin-left: 15px;
  margin-right: 15px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
  width: 6%;
  a {
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  text-decoration: none;
  color: #3C3C3C;
  transition: color 0.7s ease;
  }
}

.CV:hover {
  font-size: 16px;
  padding: 12px 16px 12px 16px;
  transition: padding 0.4s ease;
  transition: font-size 0.5s ease;
  a {
    color: #A7895E;
  }
}

.CV.IsActive {
  font-size: 16px;
  padding: 12px 16px 12px 16px;
  transition: padding 0.4s ease;
  transition: font-size 0.4s ease;
  a {
    color: #A7895E;
  }
}

</style>
