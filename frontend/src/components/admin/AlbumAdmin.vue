<template>
  <div class="user">
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
      :items="albums"
      :search="search"
      class="elevation-1"
    >
      <template v-slot:item.actions>            
        <v-icon small class="album-icons" color="yellow" @click="edit(data.item)">
          fa fa-pen
        </v-icon>    
        <v-icon small class="album-icons" color="red" @click="del(data.item)">
          fa fa-trash
        </v-icon>        
      </template>
      <template v-slot:item.image="{item}">            
        <div>
          <v-img height="50" width="50" :src="item.image" :alt="item.name"></v-img>
        </div>      
      </template>
    </v-data-table>
  </div>
</template>

<script>
import axios from "axios";
import { baseApiUrl } from "@/global";

export default {
  name: "AlbumAdmin",
  data: function() {
    return {
      albums: [],
      artists: [],
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
          text: "Id",
          value: "id",
          align: "center",
          class: "text-overline",
          sortable: true,
        },
        {
          text: "Capa",
          value: "image",
          align: "start",
          class: "text-overline",
          sortable: true,
        },
        {
          text: "Nome",
          value: "name",
          align: "start",
          class: "text-overline",
          sortable: true,
        },
        {
          text: "Artista",
          value: "artist",
          align: "start",
          class: "text-overline",
          sortable: true,
        }
      ],
    }
  },
  methods: {
    getElements(element) {
      const artist = this.artists.filter(
        (artist) => artist.id == element.artistId
      );

      return {
        id: element.id,
        image: "data:image/jpeg;base64,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",
        name: element.name,
        artist: artist[0].name,
      };
    },
    loadAlbums() {
      const url = `${baseApiUrl}/albums`;

      axios.get(url).then((res) => {
        res.data.map((element) => {
          this.albums.push(this.getElements(element));
        });
      });
    },
    edit() {
      
    },
    delete() {

    }
  },
  beforeMount() {
    axios.get(`${baseApiUrl}/artists`).then((res) => (this.artists = res.data));

    this.loadAlbums();
  }
};
</script>

<style>
  .album-icons {
    margin-right: 1.3rem;
  }
</style>
