<template>
  <div>
    <v-img class="mt-3" :src="name" max-height="560" width="308"></v-img>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
