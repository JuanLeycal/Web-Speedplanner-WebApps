import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        { path: "/", alias: "/login", name: "login", component: () => import("./components/Login") },
        { path: "/findPassword", alias: "/findPassword", name: "findPassword", component: () => import("./components/FindPassword") },
        { path: "/passwordFound", alias: "/passwordFound", name: "foundPassword", component: () => import("./components/PasswordFound") },
});
