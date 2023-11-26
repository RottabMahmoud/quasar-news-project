<template>
  <div class="q-pa-md items-start q-gutter-md">
    <q-card
      class="my-card text-white"
      style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
      v-for="item in allNews"
      :key="item.id"
    >
      <q-card-section>
        <div class="text-h6">{{ item.title }}</div>
        <div class="text-subtitle2">by {{ item.author }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ item.content }}
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "NewsPage",
  computed: mapGetters(["allNews"]),
};
</script>

<style></style>
