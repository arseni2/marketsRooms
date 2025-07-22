import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/pages/Main/ui/Main.vue'
import MainLayout from '@/layouts/Main/ui/MainLayout.vue'
import Partner from '@/pages/Partner/ui/Partner.vue'
import Ipoteka from '@/pages/Ipoteka/ui/Ipoteka.vue'
import Contact from '@/pages/Contact/ui/Contact.vue'
import Compare from '@/pages/Compare/ui/Compare.vue'
import HouseComplexDetail from '@/pages/HouseComplexDetail/ui/HouseComplexDetail.vue'
import FlatDetail from '@/pages/FlatDetail/ui/FlatDetail.vue'
import Favorite from '@/pages/Favorite/ui/Favorite.vue'
import Login from '@/pages/Login/ui/Login.vue'
import Commerce from '@/pages/Commerce/ui/Commerce.vue'
import RealtorAgency from '@/pages/RealtorAgency/ui/RealtorAgency.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'Main',
          component: Main,

        },
        {
          path: '/partner',
          name: 'Partner',
          component: Partner,
        },
        {
          path: '/favorite',
          name: 'Favorite',
          component: Favorite,
        },
        {
          path: '/ipoteka',
          name: 'Ipoteka',
          component: Ipoteka,
        },
        {
          path: '/contact',
          name: 'Contact',
          component: Contact,
        },
        {
          path: '/commerce',
          name: 'Commerce',
          component: Commerce,
        },
        {
          path: '/compare',
          name: 'Compare',
          component: Compare,
        },
        {
          path: ":houseComplexId",
          component: HouseComplexDetail,
          name: 'HouseComplexDetail',
        },
        {
          path: ":houseComplexId/:flatId",
          component: FlatDetail,
          name: 'FlatDetail',
        },
        {
          path: "realtorAgency",
          component: RealtorAgency,
          name: 'RealtorAgency',
        },
        {
          path: "/login",
          component: Login,
          name: 'Login',
        }
      ],
    },
  ],
})

export default router
