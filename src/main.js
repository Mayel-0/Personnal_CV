import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "../src/assets/main.css";

function preloadImage(url) {
  return new Promise((resolve) => {
    const image = new Image();

    image.onload = () => resolve();
    image.onerror = () => resolve();
    image.src = url;

    if (image.decode) {
      image.decode().then(resolve).catch(resolve);
    }
  });
}

async function preloadSiteImages() {
  const imageModules = import.meta.glob("./assets/**/*.{png,jpg,jpeg,webp,gif,avif,svg}", {
    eager: true,
    import: "default",
  });

  const imageUrls = Object.values(imageModules).filter(Boolean);
  await Promise.all(imageUrls.map((url) => preloadImage(url)));
}

const app = createApp(App);

app.use(router);

preloadSiteImages().finally(() => {
  app.mount("#app");
});
