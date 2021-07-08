<template>
  <div v-if="!isLoading">
    <h1 class="text-center">{{ fullTitle }}</h1>
    <v-row>
      <v-col cols="2" md="3">
        <the-loading-screen :name="load"></the-loading-screen>
      </v-col>
      <v-col cols="10" md="9">
        <the-habilities
          :habilities="campeon.spells"
          :partype="campeon.partype"
        ></the-habilities>
        <the-passive :passive="campeon.passive"></the-passive>
      </v-col>
    </v-row>
    <the-description :champ="campeon"></the-description>
  </div>
  <v-progress-circular
    v-else
    size="100"
    indeterminate
    color="primary"
    style="width: 5rem; height: 5rem"
  ></v-progress-circular>
</template>

<script>
import TheLoadingScreen from "@/components/TheLoadingScreen";
import TheDescription from "@/components/TheDescription.vue";
import TheHabilities from "@/components/TheHabilities.vue";
import ThePassive from "@/components/ThePassive.vue";
export default {
  components: { TheLoadingScreen, TheDescription, TheHabilities, ThePassive },
  name: "Campeon",
  data() {
    return {
      campeon: {},
      isLoading: true,
    };
  },
  computed: {
    load() {
      return `${process.env.VUE_APP_CDN}${this.campeon.id}_0.jpg`;
    },
    fullTitle() {
      return this.campeon.name + ", " + this.campeon.title;
    },
  },
  created() {
    this.getCampeon();
  },
  methods: {
    async getCampeon() {
      const name = this.$route.params.name;

      try {
        const res = await this.axios.get(
          `${process.env.VUE_APP_URL}${name}.json`
        );
        this.campeon = await res.data.data[name];
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style></style>
