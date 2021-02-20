<template>
  <header class="header">
    <div class="header__container">
      <router-link :to="$i18nRoute({ name: 'Home' })" class="header__logotype">
        <img src="../assets/image/logotype-2.png" alt="Logotype Netvision">
      </router-link>

      <div class="tabs">
        <router-link :to="$i18nRoute({ name: 'Home' })" class="tabs__link">
          <span class="tabs__icon tabs__icon_home"></span>
          <span class="underline">{{ $t('header.for-home') }}</span>
        </router-link>

        <router-link :to="$i18nRoute({ name: 'Business' })" class="tabs__link">
          <span class="tabs__icon tabs__icon_business"></span>
          <span class="underline">{{ $t('header.for-business') }}</span>
        </router-link>
      </div>

      <a href="tel:67205404" target="_blank" class="phone header__phone">
        <span class="phone__icon"></span>
        <span class="phone__text underline">67-205-404</span>
      </a>

      <div class="header__select">
        <div class="header__select-name">
          <span class="icon__big-arrow-right header__select-icon"></span>
        </div>

        <div class="header__select-block block-wrapper">
          <div class="header__select-title select-title">
            {{ $t('city-select.all-latvia') }}
          </div>

          <div class="header__select-dropdown">
            <p>{{ $t('city-select.all-latvia') }}</p>
            <p data-show="show">{{ $t('city-select.valmiera') }}</p>
          </div>
        </div>
      </div>

      <LocaleSwitcher class="header__lang-switcher"/>

      <a href="https://mail.mpe.lv:2096/" target="_blank" class="sign-in header__sign-in">
        <span class="sign-in__icon"></span>
        {{ $t('header.log-in') }}
      </a>

      <div class="dropdown">
        <div class="dropdown__burger">
          <span></span><span></span>
        </div>

        <div class="dropdown__wrapper">
          <div class="dropdown__container">
            <div class="dropdown__close">
              <span></span><span></span>
            </div>

            <LocaleSwitcher class="dropdown__lang-switcher"/>

            <div class="tabs dropdown__tabs">
              <router-link :to="$i18nRoute({ name: 'Home' })" class="tabs__link">
                <span class="tabs__icon tabs__icon_home"></span>
                <span class="underline">{{ $t('header.for-home') }}</span>
              </router-link>

              <router-link :to="$i18nRoute({ name: 'Business' })" class="tabs__link">
                <span class="tabs__icon tabs__icon_business"></span>
                <span class="underline">{{ $t('header.for-business') }}</span>
              </router-link>
            </div>

            <nav class="menu dropdown__menu">
              <router-link :to="$i18nRoute({ name: 'Internet-tv' })" class="menu__link">
                <span class="menu__text underline">{{ $t('menu.complement.internet-tv') }}</span>
              </router-link>

              <router-link :to="$i18nRoute({ name: 'Internet' })" class="menu__link">
                <span class="menu__text underline">{{ $t('menu.internet') }}</span>
              </router-link>

              <router-link :to="$i18nRoute({ name: 'Television' })" class="menu__link">
                <span class="menu__text underline">{{ $t('menu.television') }}</span>
              </router-link>

              <router-link :to="$i18nRoute({ name: 'Telephony' })" class="menu__link">
                <span class="menu__text underline">{{ $t('menu.telephony') }}</span>
              </router-link>

              <router-link :to="$i18nRoute({ name: 'About' })" class="menu__link">
                <span class="menu__text underline">{{ $t('menu.company') }}</span>
              </router-link>
            </nav>

            <div class="social dropdown__social">
              <a href="#">
                <img src="" data-src="/app/img/icon__facebook_black.svg" class="lazy" alt="Icon Facebook">
              </a>
            </div>

            <p class="contact-paragraph dropdown__contact-paragraph">
              {{ $t('technical-assistance') }}
              <br>
              <a href="tel:67205404">67-205-404</a>
            </p>

            <hr>

            <p class="contact-paragraph dropdown__contact-paragraph">
              {{ $t('connections') }}
              <br>
              <a href="tel:67205404">67-205-404</a>
            </p>

            <div class="call-order dropdown__call-order">
              <span class="underline">Pārzvanīt jums?</span>
            </div>

            <a href="https://mail.mpe.lv:2096/" target="_blank" class="sign-in dropdown__sign-in">
              <span class="sign-in__icon"></span>
              {{ $t('header.log-in') }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import LocaleSwitcher from "@/components/LocaleSwitcher";

export default {
  name: "HeaderApp",
  components: {LocaleSwitcher}
}
</script>

<style lang="scss">
.header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 10;
  height: 60px;
  padding: 15px 25px;
  align-items: center;
  background-color: #351b45;

  @media (min-width: 768px) {
    height: 70px;
    padding: 15px 30px 15px 25px;
    background-color: #291536;
  }

  &__container {
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
    display: flex;
  }

  &__logotype {
    max-width: 144px;
    margin-right: 50px;

    img {
      max-width: 100%;
    }
  }

  &__phone {
    margin: auto 40px auto auto;
  }

  &__select {
    display: flex;
    align-items: center;
    padding: 0 10px;
    margin: 0 50px 0 0;
    color: #fff;
    position: relative;

    &-name {
      margin-right: 5px;
      font-weight: 500;
      font-size: 15px;
      line-height: 18px;
      color: #000000;
    }

    &-icon {
      margin-right: 8px;
    }

    &-block {
      position: relative;
    }

    &-title {
      color: #fff;
      font-size: 14px;
      line-height: 17px;
      font-weight: 400;
      background: none;
      cursor: pointer;
      position: relative;

      &:after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: rgba(153, 9, 227, .5);
        transition: .2s ease-in-out;
      }
    }

    &-dropdown {
      position: absolute;
      left: 0;
      top: 100%;
      padding: 15px;
      background-color: #EFF1F2;
      border-radius: 5px;
      visibility: hidden;
      opacity: 0;
      transition: all .25s ease-in-out;
      font-weight: 500;
      font-size: 15px;
      line-height: 18px;
      color: #000000;
      border: 1px solid #C9D6DC;
      z-index: 2;
      white-space: nowrap;

      p {
        cursor: pointer;
        padding-bottom: 10px;
        margin-bottom: 10px;
        border-bottom: 1px solid #C9D6DC;
        background-color: transparent;
        transition: all .25s ease-in-out;
      }
    }
  }

  &__lang-switcher {
    margin: auto 50px auto 0;
  }

  &__sign-in {
    min-width: 105px;
    height: 40px;
    padding: 0 15px;
  }
}

.tabs {
  display: flex;

  &__link {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 10px 15px;
    line-height: 20px;
    color: #fff;
  }

  & .router-link-exact-active {
    position: relative;
    pointer-events: none;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 55px;
      width: 100%;
      background-color: #351b46;
    }
  }

  &__icon {
    position: relative;
    width: 20px;
    height: 20px;
    margin-right: 8px;

    &_home {
      background: url("../assets/image/icon/icon__home.svg") no-repeat center;
    }

    &_business {
      background: url("../assets/image/icon/icon__business.svg") no-repeat center;
    }
  }
}

.phone {
  display: flex;
  align-items: center;

  &__icon {
    width: 26px;
    height: 26px;
    background: url("../assets/image/icon/icon__phone.svg") no-repeat center;
    margin-right: 8px;
  }

  &__text {
    font-size: 19px;
    line-height: 22px;
    color: #fff;
  }
}

.sign-in {
  background-color: #9909e3;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  transition: .2s ease-in-out;
  border-radius: 3px;

  &__icon {
    width: 19px;
    height: 19px;
    background: url("../assets/image/icon/icon__sign-in.svg") no-repeat center;
    margin-right: 12px;
  }
}

.dropdown {
  display: none;

  &__burger {
    position: relative;
    width: 100%;
    height: 9px;
    cursor: pointer;
    z-index: 1;

    span {
      position: absolute;
      display: inline-block;
      width: 100%;
      height: 2px;
      background-color: #9909e3;
      left: 0;
      transition: .2s linear;

      &:first-child {
        top: -1px;
      }

      &:last-child {
        bottom: 0;
      }
    }
  }
}
</style>