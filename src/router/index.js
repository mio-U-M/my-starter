import Vue from "vue";
import Router from "vue-router";
import Home from "@/vue/pages/Home";

Vue.use(Router)

const router = new Router({
    mode: 'hash',
    base: '/',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        }
    ]
})

export default router;