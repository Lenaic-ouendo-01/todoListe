import { createRouter, createWebhistory } from 'vue-router'
import Home from '../views/NouVeau.vue'

const routes =[
    {
        path: '/',
        name: 'NouVeau',
        component: () => import('../views/NouVeau.vue')
    }
]   