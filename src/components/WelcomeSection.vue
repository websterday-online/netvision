<template>
  <section class="welcome-section">
    <div class="welcome-section__content-container content-container">
      <div class="welcome-section__top">
        <div class="welcome-section__content">
          <h1>{{ title }}</h1>
          <p>{{ subtitle }}</p>

          <CheckForm class="welcome-section__check-form"/>
        </div>

        <div class="welcome-section__image">
          <ImageApp
              :path="path"
              :alt="title"
          />
        </div>
      </div>

      <div class="welcome-section__bottom">
        <a href="tel:66100100" target="_blank" class="phone welcome-section__phone">
          <span class="icon icon__phone phone__icon"></span>
          <span class="phone__text underline">66-100-100</span>
        </a>

        <div class="welcome-section__rating">
          <span class="icon icon__rating"></span>
          {{ $t('rating') }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CheckForm from "@/components/CheckForm";
import ImageApp from "@/components/ImageApp";

export default {
  name: "WelcomeSection",
  components: {ImageApp, CheckForm},
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    path: {
      type: String,
      default: ''
    }
  },
}
</script>

<style lang="scss">
.welcome-section {
  min-height: calc(100vh - 60px);
  padding-top: 30px;
  padding-bottom: 70px;
  background-color: #351b46;
  display: flex;

  @media (min-width: 768px) {
    min-height: calc(100vh - 70px);
    padding-top: 30px;
    padding-bottom: 35px;
  }

  @media (min-width: 1024px) {
    min-height: auto;
    padding-top: 55px;
    padding-bottom: 95px;
  }

  &__content-container {
    display: flex;
    flex-direction: column;
  }

  &__top {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;

    @media (min-width: 1024px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: unset;
      margin-bottom: 50px;
    }
  }

  &__content {
    order: 2;
    text-align: center;
    max-width: 475px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1024px) {
      order: unset;
      text-align: unset;
      align-items: unset;
    }

    @media (min-width: 1200px) {
      max-width: 540px;
      width: 100%;
    }

    & > h1 {
      color: #ffd66d;
      font-size: 25px;
      line-height: 30px;
      font-weight: 600;
      margin: 5px auto 20px;
      letter-spacing: -0.02em;
      max-width: 270px;

      @media (min-width: 550px) {
        font-size: 26px;
        line-height: 33px;
      }

      @media (min-width: 768px) {
        font-size: 36px;
        line-height: 42px;
        margin: 0 0 15px 0;
      }

      @media (min-width: 1024px) {
        font-size: 47px;
        line-height: 56px;
        margin: 0 0 30px 0;
      }

      @media (min-width: 1200px) {
        font-size: 50px;
        line-height: 57px;
      }
    }

    & > p {
      max-width: 270px;
      margin: 0 auto 25px;
      font-size: 12px;
      line-height: 15px;

      @media (min-width: 768px) {
        max-width: unset;
        margin: 0 0 25px 0;
      }

      @media (min-width: 1024px) {
        font-size: 17px;
        line-height: 26px;
        margin: 0 0 75px 0;
      }

      @media (min-width: 1200px) {
        margin: 0 0 90px 0;
      }
    }
  }

  &__check-form {
    max-width: 540px;
    margin: auto 0 0 0;
  }

  &__image {
    order: 1;
    width: 180px;

    @media (min-width: 768px) {
      margin-top: 15px;
      width: 300px;
    }

    @media (min-width: 1024px) {
      margin-top: 20px;
      width: 460px;
      order: unset;
    }

    @media (min-width: 1200px) {
      width: 100%;
    }
  }

  &__bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto 0 0 0;
    position: relative;

    @media (min-width: 1024px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  &__phone {
    display: block;

    @media (min-width: 550px) {
      display: none;
    }
  }

  &__rating {
    max-width: 265px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    font-size: 12px;
    line-height: 16px;
    margin: 0 auto;

    @media (min-width: 768px) {
      max-width: 450px;
    }

    @media (min-width: 1024px) {
      display: block;
      text-align: left;
      margin: 0;
      max-width: 380px;
      line-height: 21px;
    }

    & .icon__rating {
      @media (max-width: 550px) {
        display: block;
        margin: 20px 0;
      }
    }
  }
}
</style>