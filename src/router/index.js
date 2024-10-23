import { createRouter, createWebHistory } from 'vue-router'
import PrincipalView from '../views/PrincipalView.vue'
import CoachDatosView from '@/views/coach/CoachDatosView.vue'
import CoachObjetivoView from '@/views/coach/CoachObjetivoView.vue'
import CoachResultadoView from '@/views/coach/CoachResultadoView.vue'
import ListaTrenSView from '@/views/lista-ejercicios/ListaTrenSView.vue'
import ListaTrenIView from '@/views/lista-ejercicios/ListaTrenIView.vue'
import ListaCoreView from '@/views/lista-ejercicios/ListaCoreView.vue'
import DetalleEjercicioView from '@/views/lista-ejercicios/DetalleEjercicioView.vue'
import AdminListaEjercicioView from '@/views/admin/AdminListaEjercicioView.vue'
import AdminEditarEjercicioView from '@/views/admin/AdminEditarEjercicioView.vue'
import AdminCrearEjercicioView from '@/views/admin/AdminCrearEjercicioView.vue'
import SeleccionRutina from "@/views/rutina/SeleccionRutina.vue";
import Rutinas from "@/views/rutina/Rutinas.vue";
import VerRutina from "@/views/rutina/VerRutina.vue";
import AdminNuevaRutina from "@/views/admin/AdminNuevaRutina.vue";
import AdminListaRutinas from "@/views/admin/AdminListaRutinas.vue";
import AdminEditarRutina from "@/views/admin/AdminEditarRutina.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PrincipalView
    },
    {
      path: '/CoachDatos',
      name: 'CoachDatos',
      component: CoachDatosView
    },
    {
      path: '/CoachObjetivo',
      name: 'CoachObjetivo',
      component: CoachObjetivoView
    },
    {
      path: '/CoachResultado',
      name: 'CoachResultado',
      component: CoachResultadoView
    },
    {
      path: '/ListaTrenS',
      name: 'ListaTrenS',
      component: ListaTrenSView
    },
    {
      path: '/ListaTrenI',
      name: 'ListaTrenI',
      component: ListaTrenIView
    },
    {
      path: '/ListaCore',
      name: 'ListaCore',
      component: ListaCoreView
    },
    {
      path: '/DetalleEjercicio/:id',
      name: 'DetalleEjercicio',
      component: DetalleEjercicioView
    },
    {
      path: '/AdminListaEjercicios',
      name: 'AdminListaEjercicios',
      component: AdminListaEjercicioView
    },
    {
      path: '/AdminCrearEjercicio',
      name: 'AdminCrearEjercicio',
      component: AdminCrearEjercicioView
    },
    {
      path: '/AdminEditarEjercicio/:id',
      name: 'AdminEditarEjercicio',
      component: AdminEditarEjercicioView,
      props: true
    },{
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

    {
      path: "/admin-nueva-rutina",
      name: "agregar rutina",
      component: AdminNuevaRutina,
    },
    {
      path: "/admin-editar-rutina/:id",
      name: "editar rutina",
      component: AdminEditarRutina,
      props: true,
    },
    {
      path: "/admin-lista-rutinas",
      name: "ListaDeRutinas",
      component: AdminListaRutinas,
    },
  ]
})

export default router;
