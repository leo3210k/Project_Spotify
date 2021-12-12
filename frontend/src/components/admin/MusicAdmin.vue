<template>
  <div>
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
      class="elevation-1"
    >
      <template v-slot:item.actions>
        <v-icon small class="music-icons" color="green darken-4" @click="play(data.item)">
          fa fa-play
        </v-icon>
        <v-icon small class="music-icons" color="yellow" @click="edit(data.item)">
          fa fa-pen
        </v-icon>
        <v-icon small class="music-icons" color="red" @click="del(data.item)">
          fa fa-trash
        </v-icon>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import axios from "axios";
import { baseApiUrl } from "@/global";

export default {
  name: "MusicAdmin",
  data: function() {
    return {
      musics: [],
      artists: [],
      items: [],
      search: "",
      headers: [
        {
          value: "actions",
          align: "right",
          class: "text-overline",
          width: "20%",
          sortable: true,
        },
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
    };
  },
  methods: {
    getElements(element) {
      const music = this.musics.filter((music) => music.id == element.musicId);
      const artist = this.artists.filter((artist) => artist.id == music[0].artistId);

      return {
        titulo: music[0].name,
        artista: artist[0].name,
        data: this.formatDate(element.addAt),
      };
    },
    formatDate(date) {
      return date
        .split("T")[0]
        .split("-")
        .reverse()
        .join("/");
    },
    loadMusics() {
      const url = `${baseApiUrl}/mymusics`;

      axios.get(url).then((res) => {
        res.data.map((element) => {
          this.items.push(this.getElements(element));
        });
      });
    },
    play() {
      
    },
    edit() {
      
    },
    delete() {
      
    },
  },
  beforeMount() {
    axios.get(`${baseApiUrl}/musics`).then((res) => (this.musics = res.data));
    axios.get(`${baseApiUrl}/artists`).then((res) => (this.artists = res.data));

    this.loadMusics();
  },
};
</script>

<style>
  .music-icons {
    margin-right: 0.9rem;
  }
</style>
