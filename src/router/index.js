import VueRouter from 'vue-router';

const Login = () => import('@/pages/login.vue'); // 登录页
const register = () => import('@/pages/register.vue'); // 注册页
const Main = () => import('@/pages/main.vue');
const House = () => import('@/pages/house/house.vue'); // 首页
const Friend = () => import('@/pages/friend/friend.vue'); // 联系人
const Moments = () => import('@/pages/moments/moments.vue'); // 朋友圈
const Dynamic = () => import('@/pages/moments'); // 好友动态
const Room = () => import('@/pages/friend/room.vue'); // 聊天室
const User = () => import('@/pages/user'); // 用户首页
const Setting = () => import('@/pages/user/setting.vue'); // 设置页

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
            component: User,
        },
        {
          path: '/setting',
          name: 'user',
          component: Setting
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