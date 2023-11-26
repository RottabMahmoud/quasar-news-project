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
    onSubmit() {
      if (this.toggle !== true) {
        $q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "You need to accept the license and terms first",
        });
      } else {
        $q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Submitted",
        });
      }
    },
    onReset() {
      this.title = null;
      this.author = null;
      this.content = null;
      this.toggle = false;
    },
  },
};
</script>

<style></style>
