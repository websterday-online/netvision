<template>
  <div id="app">
    <header-app/>
    <main>
      <aside-app/>
      <div class="content">
        <router-view/>
      </div>
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

* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration-color: transparent;
  box-sizing: border-box;
}

#app {
  font: 400 14px 'Montserrat', sans-serif;
  color: #fff;
}

.content {
  padding: 60px 0 0 0;

  @media (min-width: 768px) {
    padding: 70px 0 0 0;
  }

  @media (min-width: 1200px) {
    padding: 70px 0 0 147px;
  }
}
</style>