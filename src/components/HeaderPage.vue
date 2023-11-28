<template>
  <q-tabs>
    <q-route-tab icon="home" to="/" exact />
    <q-route-tab icon="mail" to="/newspage" exact>
      <q-badge color="red" v-show="allNews.length" floating
        >{{ allNews.length }}+</q-badge
      >
    </q-route-tab>
    <q-route-tab icon="add" to="/addform" exact />
    <q-route-tab icon="people" to="/aboutpage" exact />
  </q-tabs>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "HeaderPage",
  computed: mapGetters(["allNews"]),
};
</script>

<style></style>
