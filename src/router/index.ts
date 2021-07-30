import { createWebHistory, createRouter } from 'vue-router'
const history = createWebHistory()
import routes from './modules';

export const router = createRouter({
  history,
  routes
})
