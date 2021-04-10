<template>
  <div class="telephony" id="welcome">
    <WelcomeSection
        class="telephony__welcome-section"
        :title="$t('pages.telephony.welcome.title')"
        :subtitle="$t('pages.telephony.welcome.subtitle')"
        :path="'phone.png'"
    />

    <section class="telephony__tariffs">
      <h2 class="title telephony__tariffs-title">{{ $t('pages.telephony.tariffs.title') }}</h2>

      <div class="telephony__tariffs-list">
        <div class="telephony__tariffs-item">
          <span class="icon icon__tariffs"></span>
          <a href="https://www.netvision.lv/ext/phonerates/?Lang=lv&amp;prefix=Latvia" target="_blank"
             class="telephony__tariffs-link">
            <span>{{ $t('pages.telephony.tariffs.rates.latvia') }}</span>
          </a>
        </div>

        <div class="telephony__tariffs-item">
          <span class="icon icon__tariffs"></span>
          <a href="https://www.netvision.lv/ext/phonerates/?Lang=lv" target="_blank" class="telephony__tariffs-link">
            <span>{{ $t('pages.telephony.tariffs.rates.international') }}</span>
          </a>
        </div>
      </div>
    </section>

    <section class="telephony__advantages advantages">
      <h2 class="title telephony__advantages-title">{{ $t('advantages-title') }}</h2>

      <div class="advantages__list content-container">
        <div class="advantages__item">
          <div class="advantages__image">
            <span class="icon icon__achievement"></span>
          </div>

          <div class="advantages__text">
            <h4>{{ $t('pages.telephony.advantages.subscription') }}</h4>
          </div>
        </div>

        <div class="advantages__item">
          <div class="advantages__image">
            <span class="icon icon__speed"></span>
          </div>

          <div class="advantages__text">
            <h4>{{ $t('pages.telephony.advantages.connection') }}</h4>
          </div>
        </div>

        <div class="advantages__item">
          <div class="advantages__image">
            <span class="icon icon__support"></span>
          </div>

          <div class="advantages__text">
            <h4>{{ $t('pages.telephony.advantages.transfer') }}</h4>
          </div>
        </div>

        <div class="advantages__item">
          <div class="advantages__image">
            <span class="icon icon__connect"></span>
          </div>

          <div class="advantages__text">
            <h4>{{ $t('pages.telephony.advantages.caller') }}</h4>
          </div>
        </div>

        <div class="advantages__item">
          <div class="advantages__image">
            <span class="icon icon__setting"></span>
          </div>

          <div class="advantages__text">
            <h4>{{ $t('pages.telephony.advantages.free-calls') }}</h4>
          </div>
        </div>

        <div class="advantages__item">
          <div class="advantages__image">
            <span class="icon icon__smile"></span>
          </div>

          <div class="advantages__text">
            <h4>{{ $t('pages.telephony.advantages.low-rates') }}</h4>
          </div>
        </div>

        <div class="advantages__item">
          <div class="advantages__image">
            <span class="icon icon__achievement"></span>
          </div>

          <div class="advantages__text">
            <h4>{{ $t('pages.telephony.advantages.install-software') }}</h4>
          </div>
        </div>
      </div>
    </section>

    <CoverageForm class="telephony__coverage"/>
  </div>
</template>

<script>
import CoverageForm from "@/components/CoverageForm";
import WelcomeSection from "@/components/WelcomeSection";

export default {
  name: "Telephony",
  components: {WelcomeSection, CoverageForm}
}
</script>

<style lang="scss">
.telephony {

  &__welcome-section {

  }

  &__tariffs {

    &-title {
      padding: 50px 0 35px;

      @media (min-width: 550px) {
        padding: 65px 0 40px;
      }

      @media (min-width: 768px) {
        padding: 80px 0 40px;
      }

      @media (min-width: 1024px) {
        padding: 80px 0 60px;
      }

      @media (min-width: 1200px) {
        padding: 130px 0 50px;
      }
    }

    &-list {
      max-width: 755px;
      width: 100%;
      margin: 0 auto;
      display: grid;
      grid-gap: 30px;
      grid-template-columns: 1fr;

      @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
      }
    }

    &-item {
      display: flex;
      align-items: center;
      border: 1px solid #E9E9E9;
      border-radius: 10px;
      padding: 40px 35px;
    }

    &-link {
      font-size: 15px;
      line-height: 20px;
      color: #676E7F;

      & span {
        border-bottom: 1px solid #9909e3;
        transition: all .2s ease-in-out;

        &:hover {
          border-color: transparent;
        }
      }
    }
  }

  &__advantages {
    padding-bottom: 50px;

    @media (min-width: 550px) {
      padding-bottom: 65px;
    }

    @media (min-width: 768px) {
      padding-bottom: 80px;
    }

    @media (min-width: 1200px) {
      padding-bottom: 100px;
    }

    &-title {
      padding: 50px 0 35px;

      @media (min-width: 550px) {
        padding: 65px 0 40px;
      }

      @media (min-width: 1024px) {
        padding: 80px 0 60px;
      }

      @media (min-width: 1200px) {
        padding: 130px 0 100px;
      }
    }
  }

  &__coverage {
    padding-bottom: 50px;

    @media (min-width: 768px) {
      padding-bottom: 100px;
    }
  }
}
</style>