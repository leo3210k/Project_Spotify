<template>
  <div class="pa-5">
    <div class="title mb-4 d-flex align-end text-h3 font-weight-black">
      Navegar
    </div>
    <v-tabs v-model="tab" background-color="transparent">
      <v-tabs-slider color="green"></v-tabs-slider>

      <v-tab class="font-weight-black text-body-2 white--text">
        GÊNEROS E MOMENTOS
      </v-tab>
      <v-tab class="font-weight-black text-body-2 white--text">
        PARADAS
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item class="teste">
        <div class="pa-2 mt-6 mb-1 font-weight-bold white--text">Gêneros e momentos</div>

        <v-divider dark></v-divider>

        <v-container fluid>
          <v-row dense>
            <v-col v-for="genre in genres" :key="genre.title" cols='4'>
              <v-card tile class="mb-2 mx-1">
                <v-img :src="genre.src" class="align-end" height="200px" tile>
                  <v-card-actions>
                    <v-btn text block class="white--text">
                      {{ genre.btnText }}
                    </v-btn>
                  </v-card-actions>
                </v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>
      <v-tab-item class="teste">
        <div class="pa-2 mt-6 mb-1 font-weight-bold white--text">Paradas em destaque</div>

        <v-divider dark></v-divider>

        <v-container fluid>
          <v-row dense>
            <v-col v-for="release in releases" :key="release.title" cols='4'>
              <v-card class="mb-2 mx-1" tile>
                <div class="square d-flex flex-column justify-center align-center font-weight-bold white--text text-h5 " :style="release.background">
                    {{ release.title }}
                    <div class="divider my-2"></div>
                    {{ release.subtitle }}
                </div>
              </v-card>
              <a class="link text-subtitle-2 white--text pl-2">{{ release.link }}</a>
              <span class="comment text-body-2 grey--text pl-2 mt-1">{{ release.comment }}</span>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data: function () {
    return {
      tab: null,
      genres: [
        {
          title: "Pre-fab homes",
          src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
          btnText: "Bem vindo",
        },
        {
          title: "Favorite road trips",
          src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
          btnText: "Em casa",
        },
        {
          title: "Best airlines",
          src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
          btnText: "Viagens",
        }
      ],
      releases: [
        {
          title: "Top 50",
          subtitle: "Brazil",
          background: "background: linear-gradient(to top, #191654, #43C6AC)",
          link: "As 50 mais tocadas do Brasil",
          comment: "Seu relatório diário das faixas mais tocadas no Brasil no momento."        
        },
        {
          title: "Top 50",
          subtitle: "Global",
          background: "background: linear-gradient(to top, #200122, #6f0000)",
          link: "As 50 mais tocadas do mundo",
          comment: "Seu relatório diário das faixas mais tocadas no momento."       
        },
        {
          title: "Top 50",
          subtitle: "Minha rua",
          background: "background: linear-gradient(to bottom, #c33764, #1d2671)",
          link: "As 50 mais tocadas da minha rua",
          comment: "Seu relatório diário das faixas mais tocadas da sua rua."       
        }
      ],
    };
  },
};
</script>

<style>
  .title {
    width: 100%;
    height: 140px;
    color: white;
  }

  .teste {
    background: #000000;
    background: -webkit-linear-gradient(to bottom, #434343, #000000);
    background: linear-gradient(to bottom, #434343, #000000);
  }

  .square {
    height: 200px;
    
    display: flex;
    align-items: end;
  }

  .divider {
    background-color: rgba(255, 255, 255, 0.158);
    width: 100px;
    height: 1px;
  }

  .link,
  .comment{
    display: flex;
    align-self: center;
  }

  .link:hover {
    text-decoration-line: underline;
  }

</style>