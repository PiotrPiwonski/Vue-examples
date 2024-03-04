import { createRouter, createWebHistory } from 'vue-router'
import MyAwsomeComponent from "@/components/MyAwsomeComponet.vue";
import ItemPage from "@/views/ItemPage.vue";
import NotFoundPage from "@/views/NotFoundPage.vue";


const routes = [
  {
    path: '/',
    name: 'MyAwsomeComponent',
    component: MyAwsomeComponent,
  },
  {
    path: '/item/:id',
    name: 'ItemPage',
    component: ItemPage,
    props: true,
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFoundPage',
    component: NotFoundPage,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
