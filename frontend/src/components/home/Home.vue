<template>
    <div>
        <div class="ad d-flex justify-center align-center">
            <div class="color text-h3 font-weight-black">APROVEITE E OUÇA AS NOVIDADES!!!!!!!</div>
        </div>
        <div class="d-flex flex-column mt-5 pa-8">
            <div class="color text-h6 font-weight-bold ">Atalhos</div>
            <v-divider color="grey"></v-divider>
            <div class="d-flex align-self-center mt-2">
                <div class="shortcut d-flex flex-column ma-2">
                    <div class="card">TESTANDO</div>
                    <a href="" class="text-subtitle-2 font-weight-bold mt-2">Nome do Artista</a>
                    <span class="text-subtitle-2">Comentário</span>
                </div>
                <div class="shortcut d-flex flex-column ma-2">
                    <div class="card">TESTE1</div>
                    <a href="" class="text-subtitle-2 font-weight-bold mt-2">Nome do Artista</a>
                    <span class="text-subtitle-2">Comentário</span>
                </div>
                <div class="shortcut d-flex flex-column ma-2">
                    <div class="card">OLA</div>
                    <a href="" class="text-subtitle-2 font-weight-bold mt-2">Nome do Artista</a>
                    <span class="text-subtitle-2">Comentário</span>
                </div> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style>
    .ad {
        width: 100%;
        height: 285px;
        background: #000428;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #004e92, #000428);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #004e92, #000428); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }

    .color {
        color: papayawhip;
    }

    .card {
        width: 206px;
        height: 206px;
        background-color: red;
    }

    .shortcut > a{
        text-decoration: none;
    }

    .shortcut > a:visited {
        color: white;
    }

    .shortcut > a:hover {
        color: white;
        text-decoration-line: underline;
    }

    .shortcut > span {
        color: rgb(116, 109, 109);
        font-weight: 400;
    }
</style>