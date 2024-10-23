import { createRouter, createWebHistory } from "vue-router";
import SeleccionRutina from "@/views/rutina/SeleccionRutina.vue";
import Rutinas from "@/views/rutina/Rutinas.vue";
import VerRutina from "@/views/rutina/VerRutina.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
    },
    {
      path: "/rutinas",
      name: "rutinas",
      component: Rutinas,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    },
    {
      path: "/agregar-rutinas",
      name: "selección-rutina",
      component: SeleccionRutina,
    },
    {
      path: "/ver-rutina/:id",
      name: "informacion-rutina",
      component: VerRutina,
      props: true,
    },
  ],
});

export default router;
