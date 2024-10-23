import { createRouter, createWebHistory } from 'vue-router'
import LoginViews from '@/views/LoginViews.vue'
import PrincipalViews from '@/views/PrincipalViews.vue'
import CrearCuentaViews from '@/views/CrearCuentaViews.vue'
import PerfilUsuarioViews from '@/views/PerfilUsuarioViews.vue'
import EdicionUsuarioCuentaViews from '@/views/EdicionUsuarioCuentaViews.vue'
import AdminRegistroViews from '@/views/AdminRegistroViews.vue'
import AdminListaUsuarios from '@/views/AdminListaUsuarios.vue'
import AdminEdicionUsuariosViews from '@/views/AdminEdicionUsuariosViews.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Principal',
      component: PrincipalViews
    },
    {
      path: '/Login',
      name: 'Login',
      component: LoginViews
    },
    {
      path: '/CrearCuenta',
      name: 'CrearCuenta',
      component: CrearCuentaViews
    },
    {
      path: '/PerfilUsuario',
      name: 'perfilUsuario',
      component: PerfilUsuarioViews
    },
    {
      path: '/EdicionUsuario/:id',
      name: 'EdicionUsuario',
      component: EdicionUsuarioCuentaViews
    },
    
    {
      path: '/AdminRegistro',
      name: 'AdminRegistro',
      component: AdminRegistroViews
    },
    {
      path: '/AdminListaUsuarios',
      name: 'AdminListaUsuarios',
      component: AdminListaUsuarios
    },
    {
      path: '/AdminEdicionUsuarios/:id',
      name: 'AdminEdicionUsuarios',
      component: AdminEdicionUsuariosViews
    
    }


  ]
})

export default router
