<template>
  <v-container class="mt-4">
    <v-row justify="center">
      <v-expansion-panels popout>
        <v-subheader class="display-1">Pasiva</v-subheader>
        <v-expansion-panel hide-actions>
          <v-expansion-panel-header>
            <v-row align="center" class="spacer" no-gutters>
              <v-col cols="2">
                <v-avatar size="36px">
                  <img alt="Habilidad" :src="getIcon(passive.image.full)" />
                </v-avatar>
              </v-col>
              <v-col class="hidden-xs-only" cols="5">
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
