<template>
  <v-container>
    <v-row>
      <v-col cols="auto">
        <v-card>
          <v-img :src="splash" max-height="560" width="308"></v-img>
          <v-card-title>{{ skin.name }}</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
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
    splash: function () {
      return `${process.env.VUE_APP_CDN}${this.id}_${this.skin.num}.jpg`;
    },
  },
};
</script>

<style></style>
