import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
import Artist from '@/components/home/Artist'
import Navigation from '@/components/home/Navigation'
import LikedSongs from '@/components/home/LikedSongs'
import Albums from '@/components/home/Albums'
import Artists from '@/components/home/Artists'

Vue.use(VueRouter)

const routes = [{
    name: 'home',
    path: '/',
    component: Home
}, {
    name: 'artist',
    path: '/artist',
    component: Artist
}, {
    name: 'navigation',
    path: '/navigation',
    component: Navigation
}, {
    name: 'likedSongs',
    path: '/liked-songs',
    component: LikedSongs
}, {
    name: 'albums',
    path: '/albums',
    component: Albums
}, {
    name: 'artists',
    path: '/artists',
    component: Artists
}]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
