<template>
  <div class="mt-3">
    <v-row justify="center">
      <v-subheader class="text-lg-h4 text-h6">Habilities:</v-subheader>
      <v-expansion-panels popout>
        <v-expansion-panel
          v-for="(hability, i) in habilities"
          :key="i"
          hide-actions
        >
          <v-expansion-panel-header>
            <v-row align="center" class="spacer" no-gutters>
              <v-col cols="3" sm="2" md="2" lg="2" xl="2">
                <v-avatar size="36px">
                  <img alt="Habilidad" :src="getIcon(hability.image.full)" />
                </v-avatar>
              </v-col>
              <v-col cols="4" sm="5" md="5" lg="5" xl="5">
                <strong v-html="hability.name"></strong>
                <span v-if="hability.costBurn" :class="isEnergy">
                  &nbsp;({{ hability.costBurn }} de {{ partype }})
                </span>
              </v-col>
              <v-col
                class="hidden-xs-only"
                cols="5"
                sm="5"
                md="5"
                lg="5"
                xl="5"
              >
                <span
                  >Max. level:
                  <strong v-html="hability.maxrank"></strong>
                </span>
              </v-col>
            </v-row>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-divider></v-divider>
            <v-card-text v-html="hability.description"></v-card-text>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    habilities: {
      type: Array,
      required: true,
    },
    partype: {
      type: String,
      required: true,
    },
  },
  computed: {
    isEnergy() {
      return this.partype == "Energía"
        ? "yellow--text"
        : this.partype == "Maná"
        ? "blue--text"
        : "gray--text";
    },
  },
  methods: {
    getIcon(image) {
      const res = `${process.env.VUE_APP_SPELL}${image}`;
      return res;
    },
  },
};
</script>

<style></style>
