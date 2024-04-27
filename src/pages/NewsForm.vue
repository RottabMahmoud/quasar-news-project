<template>
  <div class="q-pa-md">
    <div class="q-gutter-md absolute-center q-mt-md" style="max-width: 300px">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          filled
          v-model="formData.title"
          label="Your name *"
          hint="Name and surname"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
        <q-input
          filled
          v-model="formData.author"
          label="Title*"
          hint="Title"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
        <q-input
          v-model="formData.content"
          label="Content*"
          hint="Content"
          filled
          type="textarea"
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
        <q-toggle
          v-model="formData.toggle"
          label="I accept the license and terms"
        />

        <div>
          <q-btn v-if="!isEdit" label="Submit" type="submit" color="primary" />
          <q-btn v-if="isEdit" label="Edit" type="submit" color="secondary" />
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
import { mapActions, mapGetters } from "vuex";

export default {
  name: "NewsForm",
  data() {
    return {
      formData: {
        title: "",
        author: "",
        content: "",
        toggle: false,
      },
      isEdit: false, // Flag to manage edit mode
    };
  },
  methods: {
    ...mapActions(["addNews", "setEdit"]),
    onSubmit() {
      if (this.formData.toggle) {
        if (this.isEdit) {
          // If editing existing news, dispatch edNews action with formData
          console.log("CHECK");
          this.setEdit({ ...this.formData });
        } else {
          // If adding new news, dispatch addNews action with formData
          this.addNews({ ...this.formData, id: Math.random() });
        }
        // Redirect to the news page after submitting the form
        this.$router.push("/newspage");
        // Reset the form
        this.resetForm();
      } else {
        alert("YOU MUST TURN THE TOGGLE ON");
      }
    },

    onReset() {
      this.resetForm();
    },
    resetForm() {
      this.formData = {
        title: "",
        author: "",
        content: "",
        toggle: false,
      };
      this.isEdit = false;
    },
  },
  computed: {
    ...mapGetters(["editObj", "allNews"]),
    isEditData() {
      return this.editObj && Object.keys(this.editObj).length > 0;
    },
  },
  mounted() {
    const id = this.$route.params.id;
    if (id) {
      const editItem = this.allNews.find((x) => x.id.toString() === id);
      if (editItem) {
        this.formData = { ...editItem };
        this.isEdit = true;
        // Initialize toggle field with existing value
        this.formData.toggle = editItem.toggle;
      } else {
        console.error("Item with ID", id, "not found.");
      }
    }
  },
};
</script>
