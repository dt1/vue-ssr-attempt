// vue imports and config
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// page imports

const HomePage = () => import('../components/pages/HomePage.vue')

export function createRouter () {
    return new VueRouter({
        mode: 'history',
        routes: [
            { path: '/',
              component: HomePage,
              name: 'homepage'
            }
        ]
    })
}
