import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/main.scss";
import "normalize.css";
import "jquery";
 
import Carousel3d from 'vue-carousel-3d';
 


const app = createApp(App);

app
  .use(store)
  .use(router)
  .use(Carousel3d)
  .mount("#app");
