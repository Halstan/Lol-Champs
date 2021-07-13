<template>
  <v-container class="mt-4">
    <v-row justify="center">
      <v-expansion-panels popout>
        <v-subheader class="text-lg-h4 text-h6">Passive:</v-subheader>
        <v-expansion-panel hide-actions>
          <v-expansion-panel-header>
            <v-row align="center" class="spacer" no-gutters>
              <v-col cols="3" sm="2" md="2" lg="2" xl="2">
                <v-avatar size="36px">
                  <img alt="Habilidad" :src="getIcon(passive.image.full)" />
                </v-avatar>
              </v-col>
              <v-col cols="4" sm="5" md="5" lg="5" xl="5">
                <strong v-html="passive.name"></strong>
              </v-col>
            </v-row>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-divider></v-divider>
            <v-card-text v-html="passive.description"></v-card-text>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    passive: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getIcon(image) {
      const res = `${process.env.VUE_APP_PASSIVE}${image}`;
      return res;
    },
  },
};
</script>

<style></style>
