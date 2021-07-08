<template>
  <div>
    <v-card elevation="4" class="mt-3">
      <v-card-title>Historia</v-card-title>
      <v-card-text> {{ champ.lore }} </v-card-text>
    </v-card>
    <v-card elevation="4" class="mt-3">
      <v-card-title>Tips</v-card-title>
      <v-card-text v-for="(tips, index) of champ.allytips" :key="index">
        <ul>
          <li>{{ tips }}</li>
        </ul>
      </v-card-text>
    </v-card>
    <v-card elevation="4" class="mt-3">
      <v-card-title>Tips Enemigos</v-card-title>
      <v-card-text v-for="(enemytip, index) of champ.enemytips" :key="index">
        <ul>
          <li>{{ enemytip }}</li>
        </ul>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Description",
  props: {
    champ: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
