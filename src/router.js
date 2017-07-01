const routers = [{
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/blog',
        component: (resolve) => require(['./views/blog.vue'], resolve)
    },
    {
        path: '/about',
        component: (resolve) => require(['./views/about.vue'], resolve)
    },
    {
        path: '/member',
        component: (resolve) => require(['./views/member.vue'], resolve)
    }
];
export default routers;