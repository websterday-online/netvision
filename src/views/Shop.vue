<template>
  <section class="shop" id="welcome">
    <h1 class="shop__title">{{ $t('pages.shop.title') }}</h1>
    <p class="shop__description">{{ $t('pages.shop.description') }}</p>

    <div class="shop__list">
      <div class="shop__item">
        <div class="shop__item-top">
          <div class="shop__content">
            <h3>{{ $t('pages.shop.product-one.title') }}</h3>
            <p>{{ $t('pages.shop.product-one.description') }}</p>
          </div>

          <div class="shop__image">
            <ImageApp
                :path="'tp-link-archer.png'"
                :alt="'TP-Link Archer C6'"
            />
          </div>
        </div>

        <div class="shop__item-bottom">
          <span>45 €</span>

          <div class="shop__button">{{ $t('pages.shop.order') }}</div>
        </div>
      </div>

      <div class="shop__item">
        <div class="shop__item-top">
          <div class="shop__content">
            <h3>{{ $t('pages.shop.product-two.title') }}</h3>
            <p>{{ $t('pages.shop.product-two.description') }}</p>
          </div>

          <div class="shop__image">
            <ImageApp
                :path="'tp-link.png'"
                :alt="'TP-Link Archer C6'"
            />
          </div>
        </div>

        <div class="shop__item-bottom">
          <span>22 €</span>

          <div class="shop__button">{{ $t('pages.shop.order') }}</div>
        </div>
      </div>

      <div class="shop__item">
        <div class="shop__item-top">
          <div class="shop__content">
            <h3>{{ $t('pages.shop.product-three.title') }}</h3>
            <p>{{ $t('pages.shop.product-three.description') }}</p>
          </div>

          <div class="shop__image">
            <ImageApp
                :path="'mag.png'"
                :alt="'TP-Link Archer C6'"
            />
          </div>
        </div>

        <div class="shop__item-bottom">
          <span>70 €</span>

          <div class="shop__button">{{ $t('pages.shop.order') }}</div>
        </div>
      </div>

      <div class="shop__item">
        <div class="shop__item-top">
          <div class="shop__content">
            <h3>{{ $t('pages.shop.product-four.title') }}</h3>
            <p>{{ $t('pages.shop.product-four.description') }}</p>
          </div>

          <div class="shop__image">
            <ImageApp
                :path="'tv-star-jaun.png'"
                :alt="'TP-Link Archer C6'"
            />
          </div>
        </div>

        <div class="shop__item-bottom">
          <span>10 €</span>

          <div class="shop__button">{{ $t('pages.shop.order') }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ImageApp from "@/components/ImageApp";

export default {
  name: "Shop",
  components: {ImageApp}
}
</script>

<style lang="scss">
.shop {
  background-color: #EFF1F2;
  padding-top: 55px;
  padding-bottom: 85px;

  &__title {
    font-weight: bold;
    font-size: 40px;
    line-height: 45px;
    padding-bottom: 25px;
    color: #291536;

    @media (min-width: 768px) {
      font-size: 36px;
      line-height: 42px;
    }

    @media (min-width: 1024px) {
      font-size: 47px;
      line-height: 57px;
    }

    @media (min-width: 1200px) {
      font-size: 56px;
      line-height: 67px;
      padding-bottom: 30px;
    }
  }

  &__description {
    max-width: 755px;
    font-weight: 500;
    font-size: 17px;
    line-height: 25px;
    margin-bottom: 50px;
    color: #291536;

    @media (min-width: 768px) {
      font-size: 25px;
      line-height: 35px;
      margin-bottom: 100px;
    }

    @media (min-width: 1200px) {
      font-size: 32px;
      line-height: 44px;
      margin-bottom: 145px;
    }
  }

  &__list {
    display: grid;
    grid-gap: 45px;
    grid-template-columns: 1fr;

    @media (min-width: 1024px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  &__item {
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    transition: all .25s ease-in-out;
    padding: 20px;

    @media (min-width: 550px) {
      padding: 30px;
    }

    @media (min-width: 768px) {
      padding: 30px 40px 30px;
    }

    @media (min-width: 1024px) {
      padding: 30px 40px 30px;
    }

    @media (min-width: 1200px) {
      padding: 30px 40px 40px;
    }

    &:hover {
      box-shadow: 0 12px 36px 0 rgba(0, 0, 0, .2);
      transform: translateY(-4px);
    }

    &-top {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }

    &-bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: auto;
      border-top: 1px solid #E9E9E9;
      font-weight: 500;
      line-height: 40px;
      color: #202124;
      padding-top: 20px;
      font-size: 25px;

      @media (min-width: 550px) {
        font-size: 30px;
      }

      @media (min-width: 768px) {
        padding-top: 30px;
        font-size: 35px;
      }

      @media (min-width: 1024px) {
        font-size: 35px;
      }

      @media (min-width: 1200px) {
        padding-top: 35px;
        font-size: 46px;
        line-height: 56px;
      }
    }
  }

  &__content {
    max-width: 310px;
    width: 100%;
    color: #000;
    margin-top: 30px;

    & h3 {
      font-weight: 600;
      margin-bottom: 15px;
      font-size: 16px;
      line-height: 20px;

      @media (min-width: 550px) {
        font-size: 20px;
        line-height: 25px;
      }

      @media (min-width: 768px) {
        font-size: 25px;
        line-height: 30px;
      }

      @media (min-width: 1024px) {
        font-size: 20px;
        line-height: 25px;
      }

      @media (min-width: 1200px) {
        font-size: 24px;
        line-height: 29px;
      }
    }

    & p {
      max-width: 265px;
      font-size: 11px;
      line-height: 18px;

      @media (min-width: 550px) {
        font-size: 15px;
        line-height: 25px;
      }

      @media (min-width: 768px) {
        font-size: 18px;
        line-height: 27px;
      }

      @media (min-width: 1024px) {
        font-size: 16px;
        line-height: 23px;
      }

      @media (min-width: 1200px) {
        font-size: 18px;
        line-height: 25px;
      }
    }
  }

  &__image {
    max-width: 166px;
    margin: 0 25px;
    display: flex;
    align-items: center;
    justify-content: center;

    & img {
      max-width: 100%;
    }
  }

  &__button {
    width: 140px;
    font-size: 13px;
    height: 40px;
    background-color: #9909E3;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 500;
    cursor: pointer;

    @media (min-width: 550px) {
      width: 186px;
      font-size: 14px;
    }
  }
}
</style>