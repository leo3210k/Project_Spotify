<template>
  <div class="px-7">
    <div class="teste1 d-flex flex-column justify-end align-start">
      <div class="white--text text-h3 font-weight-black mb-7">
        Músicas Curtidas
      </div>
      <v-btn
        rounded
        color="green"
        class="white--text font-weight-bold text-caption px-10 mb-4"
      >
        PLAY
      </v-btn>
    </div>
    <v-form>
      <v-container fluid>
        <v-row>
          <v-col cols="10">
            <v-text-field
              dense
              clearable
              dark
              class="text-subtitle-2"
              placeholder="Filtrar"
              v-model="search"
            >
              <v-icon color="grey" small slot="prepend">fa fa-search</v-icon>
            </v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <v-data-table
      dark
      hide-default-footer
      :headers="headers"
      :items="items"
      :search="search"
    ></v-data-table>
  </div>
</template>

<script>
export default {
  name: "LikedSongs",
  data: function () {
    return {
      search: '',
      headers: [
        {
          text: "TÍTULO",
          value: "titulo",
          align: "center",
          class: "text-overline",
          width: "50%",
          sortable: true,
        },
        {
          text: "ARTISTA",
          value: "artista",
          align: "start",
          class: "text-overline",
          sortable: true,
        },
        {
          text: "DATA",
          value: "data",
          align: "start",
          class: "text-overline",
          sortable: true,
        },
      ],
      items: [
        {
          titulo: "imagine",
          artista: "Ariana Grande",
          data: "17/12/2020",
        },
        {
          titulo: "Wild",
          artista: "Troye Sivan",
          data: "16/12/2020",
        },
        {
          titulo: "Shake it off",
          artista: "Taylor Swift",
          data: "15/12/2020",
        },
      ],
    };
  },
};
</script>

<style>
    .teste1 {
        width: 100%;
        height: 190px;
    }
</style>