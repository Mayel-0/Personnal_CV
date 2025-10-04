<template>
  <div class="Header">
    <div class="HeaderTop">
      <RouterLink to="/projet" class="Projet" :class="{ IsActive: $route.path === '/projet' }">
        <a>Mes Projets</a>
      </RouterLink>
      <RouterLink to="/" class="Home" :class="{ IsActive: $route.path === '/' }">
        <a>Présentation</a>
      </RouterLink>
      <RouterLink to="/contacts" class="Contact" :class="{ IsActive: $route.path === '/contacts' }">
        <a>Contacts</a>
      </RouterLink>
    </div>
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


  .HeaderTop{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    /*position: fixed;
    top: 0;*/
  }
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
  width: 6%;
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

</style>
