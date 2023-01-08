import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ToDoList from '../views/ToDoList.vue'
import Persons from '@/views/Persons'
import AllToDoLists from '@/views/AllToDoLists'
import AddTask from '@/views/AddTask'
import AddToDoList from '@/views/AddToDoList'
import UpdateTask from '@/views/UpdateTask'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/todolist/:listID',
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
  },
  {
    path: '/addtask/:listID',
    name: 'AddTask',
    component: AddTask
  },
  {
    path: '/addtodolist',
    name: 'AddToDoList',
    component: AddToDoList
  },
  {
    path: '/updatetask/:taskID',
    name: 'UpdateTask',
    component: UpdateTask
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
