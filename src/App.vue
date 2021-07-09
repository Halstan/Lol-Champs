<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <router-link to="/">
          <v-img
            alt="Lol Logo"
            class="shrink mr-2"
            contain
            src="https://cdn.freelogovectors.net/wp-content/uploads/2020/08/league-of-legends-logo_lol.png"
            transition="scale-transition"
            width="40"
          />
        </router-link>
      </div>

      <v-spacer></v-spacer>
      <div class="d-flex align-right">
        <span
          >Hecho por:
          <a class="link" href="https://github.com/Halstan" target="_blanck"
            >Enzo Arauco</a
          ></span
        >
      </div>
    </v-app-bar>

    <v-main>
      <v-container class="mt-3">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.link {
  color: #000000;
  text-decoration: none;
}
</style>
