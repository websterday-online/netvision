import Vue from 'vue'
import VueRouter from 'vue-router'
import {Trans} from '@/plugins/Translation'

function load(component) {
    return () => import(`@/views/${component}.vue`)
}

Vue.use(VueRouter)

const routes = [{
    path: '/:locale',
    component: {
        template: "<router-view></router-view>"
    },
    beforeEnter: Trans.routeMiddleware,
    children: [
        {
            path: '',
            name: 'Home',
            component: load('Home')
        },
        {
            path: 'business',
            name: 'Business',
            component: load('Business')
        },
        {
            path: 'internet-tv',
            name: 'Internet-tv',
            component: load('Internet-tv')
        },
        {
            path: 'internet-tv-telephony',
            name: 'Internet-tv-telephony',
            component: load('Internet-tv-telephony')
        },
        {
            path: 'internet-telephony',
            name: 'Internet-telephony',
            component: load('Internet-telephony')
        },
        {
            path: 'internet',
            name: 'Internet',
            component: load('Internet')
        },
        {
            path: 'television',
            name: 'Television',
            component: load('Television')
        },
        {
            path: 'telephony',
            name: 'Telephony',
            component: load('Telephony')
        },
        {
            path: 'about',
            name: 'About',
            component: load('About')
        },
        {
            path: 'payment',
            name: 'Payment',
            component: load('Payment')
        },
        {
            path: 'contact',
            name: 'Contact',
            component: load('Contact')
        },
        {
            path: 'shop',
            name: 'Shop',
            component: load('Shop')
        }
    ]
},
    {
        path: '*',
        redirect() {
            return Trans.defaultLocale;
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router