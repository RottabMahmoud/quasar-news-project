<template>
  <div class="q-pa-md example-row-equal-width">
    <div class="row">
      <q-card
        class="row text-white"
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
        <q-card-actions vertical class="justify-around q-px-md">
          <span>
            <q-btn
              @click="deleteNews(item.id)"
              flat
              round
              color="red"
              icon="delete"
            />
            <q-btn
              @click="editNews(item.id)"
              flat
              round
              color="green"
              icon="edit"
            />
          </span>
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "NewsPage",
  computed: mapGetters(["allNews"]),
  methods: {
    ...mapActions(["delNews", "edNews"]),
    deleteNews(id) {
      this.delNews(id);
      console.log(id, "Delete");
    },
    editNews(id) {
      this.edNews(id);
    },
  },
};
</script>

<style>
.example-row-stacked-to-horizontal .col > div {
  padding: 10px 15px;
  background: rgba(#999, 15);
  border: 1px solid rgba(#999, 0.2);
}
.row {
  margin: 1em;
}
</style>
