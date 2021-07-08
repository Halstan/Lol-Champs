<template>
  <div>
    <h2 class="text-center">Buscar:</h2>
    <v-row>
      <v-col cols="3"></v-col>
      <v-col cols="6">
        <v-card>
          <v-form @submit.prevent="buscar">
            <v-text-field v-model="nombre" placeholder="Buscar"></v-text-field>
            <v-btn block color="secondary" @click.prevent="buscar"
              >Buscar</v-btn
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
    };
  },
  methods: {
    buscar() {
      this.$router.push({
        name: "Campeon",
        params: { name: this.nombre },
      });
    },
  },
};
</script>
