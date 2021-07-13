<template>
  <div v-if="!isLoading && !isError">
    <h1 class="text-center">{{ fullTitle }}</h1>
    <v-row>
      <v-col cols="2" md="3" sm="4">
        <the-loading-screen :name="load"></the-loading-screen>
      </v-col>
      <v-col cols="10" md="9" sm="8">
        <the-habilities
          :habilities="campeon.spells"
          :partype="campeon.partype"
        ></the-habilities>
        <the-passive :passive="campeon.passive"></the-passive>
      </v-col>
    </v-row>
    <the-description :champ="campeon"></the-description>
    <template>
      <v-subheader class="text-center display-1 mt-3">Skins</v-subheader>
      <v-row>
        <v-col v-for="(skin, index) of campeon.skins" :key="index" cols="auto">
          <the-skin :skin="skin" :id="campeon.id"></the-skin>
        </v-col>
      </v-row>
    </template>
  </div>
  <the-error v-else :champ="$route.params.name"></the-error>
</template>

<script>
import TheLoadingScreen from "@/components/TheLoadingScreen";
import TheDescription from "@/components/TheDescription.vue";
import TheHabilities from "@/components/TheHabilities.vue";
import ThePassive from "@/components/ThePassive.vue";
import TheSkin from "@/components/TheSkin.vue";
import TheError from "../components/TheError.vue";
export default {
  components: {
    TheLoadingScreen,
    TheDescription,
    TheHabilities,
    ThePassive,
    TheSkin,
    TheError,
  },
  name: "Campeon",
  data() {
    return {
      campeon: {},
      isLoading: true,
      isError: true,
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
    skins() {
      return this.campeon.skins.shift();
    },
    async getCampeon() {
      const name = this.$route.params.name;
      const language = this.$route.params.lang;

      try {
        const res = await this.axios.get(
          `${process.env.VUE_APP_URL}${language}/champion/${name}.json`
        );
        this.campeon = await res.data.data[name];
        this.campeon.skins = res.data.data[name].skins.slice(1);
        this.isLoading = false;
        this.isError = false;
      } catch (error) {
        this.isError = true;
        this.isLoading = false;
      }
    },
  },
};
</script>

<style></style>
