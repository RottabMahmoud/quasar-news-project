<template>
  <div class="q-pa-md">
    <div class="q-gutter-md" style="max-width: 300px">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          filled
          v-model="this.author"
          label="Your name *"
          hint="Name and surname"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
        <q-input
          filled
          v-model="this.title"
          label="Title*"
          hint="Title"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
        <q-input
          v-model="content"
          label="Content*"
          hint="Content"
          filled
          type="textarea"
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
        <q-toggle v-model="toggle" label="I accept the license and terms" />

        <div>
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </div>
      </q-form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "NewsForm",

  data() {
    return {
      title: "",
      author: "",
      content: "",
      toggle: false,
    };
  },
  methods: {
    ...mapActions(["addNews"]),
    onSubmit() {
      if (this.toggle) {
        this.addNews({
          id: Math.random(),
          title: this.title,
          author: this.author,
          content: this.content,
        });
        this.onReset();
      } else {
        alert("YOU MUST TURN THE TOGGLE ON");
      }
    },
    onReset() {
      this.title = " ";
      this.author = " ";
      this.content = " ";
      this.toggle = false;
    },
  },
};
</script>

<style></style>
