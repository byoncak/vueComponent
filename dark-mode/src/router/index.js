import { createRouter, createWebHistory } from "vue-router";
import ToggleView from "../views/ToggleMode.vue";

const routes = [
  {
    path: "/",
    name: "toggle",
    component: ToggleView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
