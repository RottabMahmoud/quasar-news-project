<template>
  <HeaderPage />
  <router-view />
</template>

<script>
import HeaderPage from "./components/HeaderPage.vue";
export default {
  name: "App",
  components: {
    HeaderPage,
  },
};
</script>
