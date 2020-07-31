import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Room from "../views/Room.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    icon: "mdi-home",
    component: Home,
    children: [
      {
        path: "/room",
        name: "Room",
        component: Room,
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    icon: "mdi-login-variant",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    icon: "mdi-account-plus-outline",
    component: Register,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
