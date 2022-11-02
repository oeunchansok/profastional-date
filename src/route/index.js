import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const routes = [

  {
    path: "",
    name: "Home",
    component: () => import("../views/home/Home.vue"),
  },

  // {
  //   path: "",
  //   name: "Home",
  //   component: () => import("../views/home/Home.vue"),
  // },
  // {
  //   path: "/award",
  //   name: "Award",
  //   component: () => import("../views/home/components/AwardSesion.vue"),
  // },
  // {
  //   path: "/blog",
  //   name: "Blog",
  //   component: () => import("../views/home/components/BlogSection.vue"),
  // },
  // {
  //   path: "/contact",
  //   name: "Contact",
  //   component: () => import("../views/home/components/ContactSection.vue"),
  // }


];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.matched.some((m) => m.meta.disableScroll)) return;
    if (to.hash) {
      return {
        selector: to.hash,
        // , offset: { x: 0, y: 10 }
        behavior: "smooth",
      };
    }
    const position = {
      x: 0,
      y: 0,
    };

    if (savedPosition) {
      position.x = savedPosition.x;
      position.y = savedPosition.y;
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(position);
      }, 400);
    });
  },
});

export default router;
