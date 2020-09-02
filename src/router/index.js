import VueRouter from 'vue-router';

const Login = () => import('@/pages/login.vue');
const register = () => import('@/pages/register.vue');
const Main = () => import('@/pages/main.vue');
const House = () => import('@/pages/house/house.vue');
const Friend = () => import('@/pages/friend/friend.vue');
const Moments = () => import('@/pages/moments/moments.vue');
const Dynamic = () => import('@/pages/moments');
const Room = () => import('@/pages/friend/room.vue');
const User = () => import('@/pages/user');

const router = new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
          path: '/register',
          name: 'register',
          component: register
        },
        {
          path: '/',
          name: 'main',
          component: Main,
          redirect: '/house',
          children: [
            {
              path: '/house',
              name: 'house',
              component: House
            },
            {
                path: '/friend',
                name: 'friend',
                component: Friend
            },
            {
                path: '/dynamic',
                name: 'dynamic',
                component: Dynamic
            },
          ]
        },
        {
            path: '/user',
            name: 'user',
            component: User
        },
        {
            path: '/moments',
            name: 'moments',
            component: Moments
        },
        {
            path: '/room',
            name: 'room',
            component: Room
        }
    ]
})

export default router