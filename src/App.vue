<template>
  <v-app>
    <TaskList />
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TaskList from "./components/TaskList.vue";

export default defineComponent({
  name: "App",

  components: {
    TaskList,
  },

  data() {
    return {
      //
    };
  },
});
</script>
