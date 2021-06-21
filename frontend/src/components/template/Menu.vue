<template>
  <!--<v-icon color="green darken-4">fas fa-drum</v-icon>
        <v-icon color="green darken-4">fas fa-music</v-icon>
        <v-icon color="green darken-4">fas fa-compact-disc</v-icon>
        <v-icon color="green darken-4">fa fa-dot-circle</v-icon>              
        <v-icon color="green darken-4">fa fa-sync</v-icon>          
        <v-icon color="green darken-4">fas fa-record-vinyl</v-icon>-->
  <!--<v-icon color="green darken-4">fa fa-ellipsis-h</v-icon>-->

  <v-navigation-drawer class="menu grey darken-4" permanent>
    <v-list dense nav>
      <v-list-item to="/">
        <v-list-item-icon>
          <v-icon color="white">fa fa-home</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title class="items font-weight-bold">Início</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item to="/navigation">
        <v-list-item-icon>
          <v-icon color="white">fa fa-search</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title class="items font-weight-bold">Navegar</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text font-weight-light pt-5">SUA BIBLIOTECA</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item to="/liked-songs">
        <v-list-item-content>
          <v-list-item-title class="text font-weight-black">Músicas Curtidas</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item to="/albums">
        <v-list-item-content>
          <v-list-item-title class="text font-weight-black">Álbuns</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item to="/artists">
        <v-list-item-content>
          <v-list-item-title link class="text font-weight-black">Artistas</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: function () {
    return {
      items: [
        { title: "Início", icon: "fa fa-home" },
        { title: "Navegar", icon: "fa fa-search" },
      ],
    };
  },
};
</script>

<style>
    .items {
        color: white;
    }

    .text {
        color: gray;
    }
</style>