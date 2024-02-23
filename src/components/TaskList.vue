<template>
  <v-container>
    <TaskCompVue :tasks="dailyTasks" title="Günlük" />
    <TaskCompVue :tasks="weeklyTasks" title="Haftalık" />
    <TaskCompVue :tasks="monthlyTasks" title="Aylık" />
  </v-container>
</template>
  
  <script lang="ts">
import { defineComponent } from "vue";
import TaskCompVue from "./TaskComp.vue";

export default defineComponent({
  components: { TaskCompVue },
  computed: {
    dailyTasks(): any {
      return this.$store.getters.dailyTasks;
    },
    weeklyTasks(): any {
      return this.$store.getters.weeklyTasks;
    },
    monthlyTasks(): any {
      return this.$store.getters.monthlyTasks;
    },
  },
  mounted() {
    this.$store.dispatch("fetchTasks");
  },
});
</script>