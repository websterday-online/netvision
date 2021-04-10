<template>
  <section class="our-service">
    <h2>{{ $t('components.our-service.title') }}</h2>

    <div class="our-service__list">
      <router-link :to="$i18nRoute({ name: 'Internet-tv' })" class="our-service__item">
        <div class="our-service__top">
          <div class="our-service__content">
            <h3>{{ $t('components.our-service.complement.title') }}</h3>
            <p>{{ $t('components.our-service.complement.description') }}</p>
          </div>

          <div class="our-service__image">
            <ImageApp
                :path="'komplekt.png'"
                :alt="$t('components.our-service.complement.title')"
            />
          </div>
        </div>

        <div class="our-service__bottom">
          <p>{{ $t('components.our-service.more') }} <span class="icon__arrow-right"></span></p>
        </div>
      </router-link>

      <router-link :to="$i18nRoute({ name: 'Internet' })" class="our-service__item">
        <div class="our-service__top">
          <div class="our-service__content">
            <h3>{{ $t('components.our-service.internet.title') }}</h3>
            <p>{{ $t('components.our-service.internet.description') }}</p>
          </div>

          <div class="our-service__image">
            <ImageApp
                :path="'our-service__router.png'"
                :alt="$t('components.our-service.internet.title')"
            />
          </div>
        </div>

        <div class="our-service__bottom">
          <p>{{ $t('components.our-service.more') }} <span class="icon__arrow-right"></span></p>
        </div>
      </router-link>

      <router-link :to="$i18nRoute({ name: 'Television' })" class="our-service__item">
        <div class="our-service__top">
          <div class="our-service__content">
            <h3>{{ $t('components.our-service.television.title') }}</h3>
            <p>{{ $t('components.our-service.television.description') }}</p>
          </div>

          <div class="our-service__image">
            <ImageApp
                :path="'our-service__tv.png'"
                :alt="$t('components.our-service.television.title')"
            />
          </div>
        </div>

        <div class="our-service__bottom">
          <p>{{ $t('components.our-service.more') }} <span class="icon__arrow-right"></span></p>
        </div>
      </router-link>

      <router-link :to="$i18nRoute({ name: 'Telephony' })" class="our-service__item">
        <div class="our-service__top">
          <div class="our-service__content">
            <h3>{{ $t('components.our-service.telephony.title') }}</h3>
            <p>{{ $t('components.our-service.telephony.description') }}</p>
          </div>

          <div class="our-service__image">
            <ImageApp
                :path="'our-service__phone.png'"
                :alt="$t('components.our-service.telephony.title')"
            />
          </div>
        </div>

        <div class="our-service__bottom">
          <p>{{ $t('components.our-service.more') }} <span class="icon__arrow-right"></span></p>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script>
import ImageApp from "@/components/ImageApp";

export default {
  name: "OurService",
  components: {ImageApp}
}
</script>

<style lang="scss">
.our-service {
  & h2 {
    font-weight: bold;
    font-size: 22px;
    line-height: 32px;
    color: #291536;
    margin-bottom: 30px;

    @media (min-width: 550px) {
      font-size: 35px;
      line-height: 45px;
    }

    @media (min-width: 768px) {
      font-size: 45px;
      line-height: 55px;
    }
  }

  &__list {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 30px;

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  &__item {
    background-color: #FFFFFF;
    border-radius: 10px;
    transition: all .25s ease-in-out;
  }


  &__item:hover {
    box-shadow: 0 12px 36px 0 rgba(0, 0, 0, .2);
    transform: translateY(-4px);
  }

  &__top {
    display: flex;
    justify-content: space-between;
    padding: 25px 25px 0;

    @media (min-width: 1024px) {
      padding: 40px 40px 0;
    }
  }

  &__content {
    max-width: 260px;
  }

  &__content h3 {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: #000000;
    margin-bottom: 10px;

    @media (min-width: 550px) {
      font-size: 25px;
      line-height: 30px;
    }

    @media (min-width: 768px) {
      font-size: 20px;
      line-height: 25px;
    }

    @media (min-width: 1024px) {
      font-size: 26px;
      line-height: 31px;
    }
  }

  &__content p {
    font-size: 12px;
    line-height: 17px;
    color: #676E7F;
    margin-bottom: 15px;

    @media (min-width: 550px) {
      font-size: 16px;
      line-height: 21px;
    }

    @media (min-width: 768px) {
      font-size: 12px;
      line-height: 16px;
    }

    @media (min-width: 1024px) {
      font-size: 15px;
      line-height: 20px;
    }
  }

  &__image {
    margin: -15px -20px -40px 0;
    min-width: 120px;
    max-width: 300px;

    @media (min-width: 550px) {
      min-width: 150px;
    }

    @media (min-width: 1024px) {
      min-width: 200px;
      margin: -20px -25px -40px 0;
    }
  }

  &__image img {
    max-width: 100%;
  }

  &__bottom {
    padding: 15px 25px;

    @media (min-width: 550px) {
      padding: 20px 25px;
    }

    @media (min-width: 1024px) {
      padding: 20px 40px;
    }
  }

  &__bottom p {
    font-size: 14px;
    line-height: 18px;
    color: #5B24F2;
  }
}
</style>