<template>
  <v-card>
    <a :href="splash" target="_blanck">
      <v-img :src="loading" max-height="560" width="308"></v-img>
    </a>
    <v-card-title class="body-2">{{ skin.name }}</v-card-title>
  </v-card>
</template>

<script>
export default {
  props: {
    skin: {
      type: Object,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  computed: {
    loading: function () {
      return `${process.env.VUE_APP_CDN}${this.id}_${this.skin.num}.jpg`;
    },
    splash() {
      return `${process.env.VUE_APP_SPLASH}${this.id}_${this.skin.num}.jpg`;
    },
  },
};
</script>

<style></style>
