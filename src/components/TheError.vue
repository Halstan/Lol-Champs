<template>
  <v-alert type="error"> Error al buscar al campeón {{ champ }} </v-alert>
</template>

<script>
export default {
  props: {
    champ: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
