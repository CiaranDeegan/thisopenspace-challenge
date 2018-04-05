const Vue = require('vue'),
    VueRouter = require('vue-router'),
    List = require('../components/List.vue'),
    Space = require('../components/Space.vue');



Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        // dynamic segments start with a colon
        { path: '/space/:id', component: Space, props: true },
        { path: '/', component: List },
    ]
});

new Vue({
    el: '#app',
    router
});
