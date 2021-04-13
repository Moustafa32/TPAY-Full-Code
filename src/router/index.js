import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Feature from "../views/Feature.vue";
import Recommend from "../views/Recommend.vue";
import Popular  from "../views/Popular.vue";

import FG1  from "../views/FG/FG1.vue";
import FG2  from "../views/FG/FG2.vue";
import FG3  from "../views/FG/FG3.vue";
import FG4  from "../views/FG/FG4.vue";
import FG5  from "../views/FG/FG5.vue";
import FG6  from "../views/FG/FG6.vue";

import RG1 from "../views/RG/RG1.vue";
import RG2 from "../views/RG/RG2.vue";
import RG3 from "../views/RG/RG3.vue";
import RG4 from "../views/RG/RG4.vue";
import RG5 from "../views/RG/RG5.vue";
import RG6 from "../views/RG/RG6.vue";

import PG1 from "../views/PG/PG1.vue";
import PG2 from "../views/PG/PG2.vue";
import PG3 from "../views/PG/PG3.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/feature",
    name: "Feature",
    component: Feature,
  },
  {
    path: "/recommend",
    name: "Recommend",
    component: Recommend,
  },
  {
    path: "/popular",
    name: "Popular",
    component: Popular,
  },
  {
    path: "/FG1",
    name: "FG1",
    component: FG1 ,
  },
  {
    path: "/FG2",
    name: "FG2",
    component: FG2 ,
  },
  {
    path: "/FG3",
    name: "FG3",
    component: FG3 ,
  },
  {
    path: "/FG4",
    name: "FG4",
    component: FG4 ,
  },
  {
    path: "/FG5",
    name: "FG5",
    component: FG5 ,
  },
  {
    path: "/FG6",
    name: "FG",
    component: FG6 ,
  },
  {
    path: "/RG1",
    name: "RG1",
    component: RG1 ,
  },
  {
    path: "/RG2",
    name: "RG2",
    component: RG2 ,
  },
  {
    path: "/RG3",
    name: "RG3",
    component: RG3 ,
  },
  {
    path: "/RG4",
    name: "RG4",
    component: RG4,
  },
  {
    path: "/RG5",
    name: "RG5",
    component: RG5,
  },
  {
    path: "/RG6",
    name: "RG6",
    component: RG6,
  },
  {
    path: "/PG1",
    name: "PG1",
    component: PG1,
  },
  {
    path: "/PG2",
    name: "PG2",
    component: PG2,
  },
  {
    path: "/PG3",
    name: "PG3",
    component: PG3,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
