<template>
  <div>
    <h2 class="text-center">Search:</h2>
    <v-row>
      <v-col cols="3"></v-col>
      <v-col cols="6">
        <v-card>
          <v-form @submit.prevent="buscar" class="mt-3">
            <v-row no-gutters>
              <v-col class="ml-2">
                <v-text-field
                  v-model.trim="nombre"
                  placeholder="Champion"
                  autofocus
                ></v-text-field>
              </v-col>
              <v-col class="mr-2">
                <v-select
                  v-model="lang"
                  label="Language"
                  :items="items"
                  item-text="name"
                  item-value="code"
                ></v-select>
              </v-col>
            </v-row>

            <v-btn block color="secondary" @click.prevent="buscar"
              >Search</v-btn
            >
          </v-form>
        </v-card>
      </v-col>
      <v-col cols="3"></v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      nombre: "",
      lang: "es_MX",
      items: [
        {
          name: "Select",
          code: "",
        },
        {
          name: "Español Latino",
          code: "es_MX",
        },
        {
          name: "Español",
          code: "es_ES",
        },
        {
          name: "English",
          code: "en_US",
        },
        {
          name: "Japanese",
          code: "ja_JP",
        },
        {
          name: "French",
          code: "fr_FR",
        },
      ],
    };
  },
  computed: {
    noSpaces() {
      return this.nombre.replace(" ", "");
    },
  },
  methods: {
    buscar() {
      this.$router.push({
        name: "Campeon",
        params: { name: this.noSpaces, lang: this.lang },
      });
    },
  },
};
</script>
