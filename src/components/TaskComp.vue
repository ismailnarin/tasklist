<template>
  <v-list lines="three">
    <v-list-item-title class="font-weight-bold">{{ title }}</v-list-item-title>
    <v-list-item
      v-for="(task, index) in tasks"
      :key="index"
      :title="task.title"
      :subtitle="task.description"
    ></v-list-item>
  </v-list>
</template>
<script>
export default {
  props: {
    tasks: Array,
    title: String, // tasks adında bir prop tanımladık, veri türünü Array (dizi) olarak belirttik
  },
};
</script>