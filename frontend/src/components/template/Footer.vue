<template>
    <v-card tile class="footer d-flex justify-space-between grey darken-3 pa-3">
        <div class="d-flex align-center">
            <div class="artist"></div>
            <div class="links d-flex flex-column ml-3">
                <a href>Música</a>
                <a href>Artista</a>
            </div>  
            <v-icon color="green darken-4">fa fa-heart</v-icon>
        </div>
        <div>
            <v-icon color="green darken-4">fa fa-random</v-icon>
            <v-icon color="green darken-4">fa fa-angle-left</v-icon>  
            <v-icon color="green darken-4">fa fa-pause</v-icon>
            <v-icon class="d-none " color="green darken-4">fa fa-play</v-icon>                 
            <v-icon color="green darken-4">fa fa-angle-right</v-icon>
            <v-icon color="green darken-4">fa fa-undo</v-icon>
        </div>
        <div>
            <v-icon color="green darken-4">fa fa-plus</v-icon>
            <v-icon color="green darken-4">fa fa-volume-down</v-icon>               
            <v-icon color="green darken-4">fa fa-volume-up</v-icon>              
            <v-icon color="green darken-4">fa fa-volume-off</v-icon></div>
    </v-card>
</template>

<script>
export default {

}
</script>

<style>
    .artist {
        width: 50px;
        height: 48px;
        background-color: red;
    }

    .links  a,
    .links a:hover {
        color: #FFF;
        text-decoration: none;
    }
</style>