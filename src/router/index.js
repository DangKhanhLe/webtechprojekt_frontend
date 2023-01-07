import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ToDoList from '../views/ToDoList.vue'
import Persons from '@/views/Persons'
import AllToDoLists from '@/views/AllToDoLists'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/todolist',
    name: 'ToDoList',
    component: ToDoList
  },
  {
    path: '/persons',
    name: 'Persons',
    component: Persons
  },
  {
    path: '/alltodolists',
    name: 'AllToDoLists',
    component: AllToDoLists
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
