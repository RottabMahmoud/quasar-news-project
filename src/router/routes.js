import HomeView from "../pages/HomeView.vue";
import NewsPage from "../pages/NewsPage.vue";
import NewsForm from "../pages/NewsForm.vue";
import AboutPage from "../pages/AboutPage.vue";
const routes = [
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
  {
    path: "/",
    name: "homeview",
    component: HomeView,
  },
  {
    path: "/newspage",
    name: "newspage",
    component: NewsPage,
  },
  {
    path: "/addform",
    name: "addForm",
    component: NewsForm,
  },
  {
    path: "/aboutpage",
    name: "about",
    component: AboutPage,
  },
];

export default routes;
