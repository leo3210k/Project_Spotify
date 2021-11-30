<template>
  <div class="admin white--text px-7">
    <div class="container d-flex flex-column justify-end align-start">
      <div class="white--text text-h3 font-weight-black mb-7">
        Admin
      </div>
    </div>

    <div class="pa-5">
      <v-tabs v-model="tab" background-color="transparent">
        <v-tabs-slider color="green"></v-tabs-slider>

        <v-tab class="font-weight-black text-body-2 white--text">
          Usuários
        </v-tab>
        <v-tab class="font-weight-black text-body-2 white--text">
          Artistas
        </v-tab>
        <v-tab class="font-weight-black text-body-2 white--text">
          Músicas
        </v-tab>
        <v-tab class="font-weight-black text-body-2 white--text">
          Álbuns
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item class="teste">
          <UserAdmin />
        </v-tab-item>

        <v-tab-item class="teste">
          <ArtistAdmin />
        </v-tab-item>

        <v-tab-item class="teste">
          <MusicAdmin />
        </v-tab-item>

        <v-tab-item class="teste">
          <AlbumAdmin />
        </v-tab-item>
      </v-tabs-items>
    </div>
  </div>
</template>

<script>
import UserAdmin from './UserAdmin.vue';
import ArtistAdmin from './ArtistAdmin.vue';
import MusicAdmin from './MusicAdmin.vue';
import AlbumAdmin from './AlbumAdmin.vue';

export default {
  name: "Admin",
  components: { UserAdmin, ArtistAdmin, MusicAdmin, AlbumAdmin },
  data: function() {
    return {
      tab: null
    }
  }
};
</script>

<style>
  .admin {
    height: 100vh;
    overflow-x: hidden;
  }

  .container {
    height: 30vh;
  }
</style>
