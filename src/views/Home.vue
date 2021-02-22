<template>
  <div class="main">
    <div class="main__welcome"></div>
    <div class="main__wrapper">
      <ButtonBlock class="main__button-block"/>
      <OurService class="main__our-service"/>
      <CoverageForm class="main__coverage"/>
    </div>
  </div>
</template>

<script>
import OurService from "@/components/OurService";
import CoverageForm from "@/components/CoverageForm";
import ButtonBlock from "@/components/ButtonBlock";

export default {
  name: "Home",
  components: {ButtonBlock, CoverageForm, OurService}
}
</script>

<style lang="scss">
.main {
  &__welcome {

  }

  &__wrapper {
    background-color: #EFF1F2;
  }

  &__button-block {
    padding-top: 55px;
  }

  &__our-service {
    padding-top: 30px;
  }

  &__coverage {
    padding: 50px 0;

    @media (min-width: 768px) {
      padding: 100px 40px;
    }

    @media (min-width: 1200px) {
      padding: 100px 25px;
    }

    @media (min-width: 1366px) {
      padding: 100px 70px;
    }
  }
}
</style>