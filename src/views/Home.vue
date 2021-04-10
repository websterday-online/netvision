<template>
  <div class="main">
    <div class="main__welcome">
      <carousel
          :per-page="1"
          :speed="250"
          :mouse-drag="false"
          :paginationEnabled="true"
          :navigationEnabled="true"
          navigationPrevLabel="<span class='icon icon__prev'></span>"
          navigationNextLabel="<span class='icon icon__next'></span>"
          :paginationColor="'#00000033'"
          :paginationActiveColor="'#fff'"
      >
        <slide class="main__welcome-slide main__welcome-slide__one">
          <div class="main__welcome-content">
            <h2>{{ $t('pages.main.carousel.slide-one.title') }}</h2>

            <p>{{ $t('pages.main.carousel.slide-one.description') }}</p>

            <router-link :to="$i18nRoute({ name: '1390' })">
              {{ $t('pages.main.carousel.more') }}
            </router-link>
          </div>

          <div class="main__welcome-image main__welcome-image_bottom">
            <ImageApp
                :path="'main-welcome__image-one.png'"
                :alt="$t('pages.main.carousel.slide-one.title')"
            />
          </div>
        </slide>

        <slide class="main__welcome-slide main__welcome-slide__two">
          <div class="main__welcome-content">
            <h2>{{ $t('pages.main.carousel.slide-two.title') }}</h2>

            <p>{{ $t('pages.main.carousel.slide-two.description') }}</p>

            <router-link :to="$i18nRoute({ name: '1690' })">
              {{ $t('pages.main.carousel.more') }}
            </router-link>
          </div>

          <div class="main__welcome-image main__welcome-image_center">
            <ImageApp
                :path="'1690.png'"
                :alt="$t('pages.main.carousel.slide-two.title')"
            />
          </div>
        </slide>
      </carousel>
    </div>
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
import ImageApp from "@/components/ImageApp";

import {Carousel, Slide} from 'vue-carousel';

export default {
  name: "Home",
  components: {ButtonBlock, CoverageForm, OurService, Carousel, Slide, ImageApp}
}
</script>

<style lang="scss">
.main {
  &__welcome {
    height: auto;

    @media (min-width: 550px) {
      height: 380px;
    }

    @media (min-width: 768px) {
      height: 450px;
    }

    @media (min-width: 1024px) {
      height: 530px;
    }

    &-slide {
      padding: 35px 25px 25px;
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;

      @media (min-width: 550px) {
        padding: 30px 25px 50px;
        flex-direction: row;
      }

      @media (min-width: 768px) {
        padding: 55px 40px 65px;
      }

      @media (min-width: 1024px) {
        padding: 70px 25px;
      }

      @media (min-width: 1366px) {
        padding: 70px;
      }

      &__one {
        background-color: #804AF4;

        & .main__welcome-content {

          @media (min-width: 550px) {
            max-width: 400px;
          }
        }
      }

      &__two {
        background-color: #D2CEEC;

        & .main__welcome-content {

          @media (min-width: 550px) {
            max-width: 550px;
          }
        }
      }
    }

    &-content {
      position: relative;
      z-index: 2;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      @media (min-width: 550px) {
        align-items: unset;
        text-align: unset;
      }

      & h2 {
        font-weight: bold;
        letter-spacing: -0.02em;
        color: #FFFFFF;
        margin-bottom: 20px;
        font-size: 30px;
        line-height: 35px;

        @media (min-width: 550px) {
          font-size: 45px;
          line-height: 50px;
        }

        @media (min-width: 1024px) {
          font-size: 58px;
          line-height: 62px;
        }
      }

      & p {
        color: #FFFFFF;
        max-width: 280px;
        font-size: 12px;
        line-height: 21px;
        margin-bottom: 30px;

        @media (min-width: 550px) {
          max-width: 270px;
          font-size: 13px;
          line-height: 22px;
          margin-bottom: 50px;
        }

        @media (min-width: 768px) {
          max-width: 310px;
          font-size: 15px;
          line-height: 24px;
          margin-bottom: 60px;
        }

        @media (min-width: 1024px) {
          max-width: 350px;
          font-size: 17px;
          line-height: 26px;
          margin-bottom: 75px;
        }
      }

      & a {
        background-color: #FFFFFF;
        border-radius: 3px;
        font-weight: 500;
        font-size: 14px;
        color: #804AF4;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 50px;

        @media (min-width: 550px) {
          width: 200px;
          font-size: 16px;
        }

        @media (min-width: 768px) {
          width: 220px;
          height: 55px;
        }
      }
    }

    &-image {
      position: relative;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: flex-end;

      @media (min-width: 550px) {
        position: absolute;
        height: 100%;
      }

      & img {
        max-width: 100%;
        max-height: 100%;
      }

      &_bottom {
        align-items: flex-end;
        bottom: -4px;
        width: calc(100% + 50px);
        margin: auto -25px -25px;

        @media (min-width: 550px) {
          width: 70%;
          margin: 0;
        }
      }

      &_center {
        align-items: center;
        width: calc(100% + 50px);
        margin: 15px -25px -5px;

        @media (min-width: 550px) {
          width: 50%;
          padding-right: 25px;
        }

        @media (min-width: 768px) {
          padding-right: 40px;
        }

        @media (min-width: 1200px) {
          padding-right: 25px;
        }

        @media (min-width: 1366px) {
          padding-right: 70px;
        }
      }
    }
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