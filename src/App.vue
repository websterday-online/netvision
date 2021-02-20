<template>
  <div id="app">
    <header-app/>
    <main>
      <aside-app/>
      <router-view/>
    </main>
    <footer-app/>
  </div>
</template>

<script>
import HeaderApp from "@/components/HeaderApp";
import FooterApp from "@/components/FooterApp";
import AsideApp from "@/components/AsideApp";

export default {
  name: 'app',
  components: {HeaderApp, FooterApp, AsideApp},
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
@import 'assets/css/normolize.css';
@import 'assets/css/common.css';

body {
  min-height: 100vh;
}

#app {
  font: 400 14px 'Montserrat', sans-serif;
}
</style>