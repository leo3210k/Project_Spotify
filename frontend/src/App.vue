<template>
  <v-app>
    <div class="body">
      <Menu />
      <Content />
      <Footer />
      <div class="temporary black">Empty space</div>
    </div>
  </v-app>
</template>

<script>
import Menu from "./components/template/Menu";
import Content from "./components/template/Content";
import Footer from "./components/template/Footer";
import '@fortawesome/fontawesome-free/js/all'

export default {
  name: "App",
  components: { Menu, Footer, Content },
};
</script>

<style>
* {
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

.body {
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;

  display: grid;
  grid-template-columns: 200px 1fr 270px;
  grid-template-rows:
    1fr
    70px;
  grid-template-areas:
    "menu content temporary"
    "footer footer footer";
}

.menu {
  grid-area: menu;
}

.content {
  grid-area: content;
}

.footer {
  grid-area: footer;
}

.temporary {
  grid-area: temporary;
}
</style>
