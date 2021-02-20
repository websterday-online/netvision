<template>
  <aside>
    <nav class="menu">
      <div class="menu__link">
        <span class="menu__icon menu__icon_kits"></span>
        <span class="menu__text underline">{{ $t('menu.complement.title') }}</span>

        <div class="menu__second-level">
          <router-link :to="$i18nRoute({ name: 'Internet-tv' })" class="menu__link">
            <span class="underline">{{ $t('menu.complement.internet-tv') }}</span>
          </router-link>

          <router-link :to="$i18nRoute({ name: 'Internet-tv-telephony' })" class="menu__link">
            <span class="underline">{{ $t('menu.complement.internet-tv-telephony') }}</span>
          </router-link>

          <router-link :to="$i18nRoute({ name: 'Internet-telephony' })" class="menu__link">
            <span class="underline">{{ $t('menu.complement.internet-telephony') }}</span>
          </router-link>
        </div>
      </div>

      <router-link :to="$i18nRoute({ name: 'Internet' })" class="menu__link">
        <span class="menu__icon menu__icon_internet"></span>
        <span class="underline">{{ $t('menu.internet') }}</span>
      </router-link>

      <router-link :to="$i18nRoute({ name: 'Television' })" class="menu__link">
        <span class="menu__icon menu__icon_television"></span>
        <span class="underline">{{ $t('menu.television') }}</span>
      </router-link>

      <router-link :to="$i18nRoute({ name: 'Telephony' })" class="menu__link">
        <span class="menu__icon menu__icon_telephony"></span>
        <span class="underline">{{ $t('menu.telephony') }}</span>
      </router-link>

      <div class="menu__link">
        <span class="menu__icon menu__icon_company"></span>
        <span class="menu__text underline">{{ $t('menu.company.title') }}</span>

        <div class="menu__second-level">
          <router-link :to="$i18nRoute({ name: 'About' })" class="menu__link">
            <span class="underline">{{ $t('menu.company.about') }}</span>
          </router-link>

          <router-link :to="$i18nRoute({ name: 'Payment' })" class="menu__link">
            <span class="underline">{{ $t('menu.company.payment') }}</span>
          </router-link>

          <router-link :to="$i18nRoute({ name: 'Contact' })" class="menu__link">
            <span class="underline">{{ $t('menu.company.contact') }}</span>
          </router-link>
        </div>
      </div>

      <router-link :to="$i18nRoute({ name: 'Shop' })" class="menu__link">
        <span class="menu__icon menu__icon_shop"></span>
        <span class="underline">{{ $t('menu.shop') }}</span>
      </router-link>
    </nav>
  </aside>
</template>

<script>
export default {
  name: "AsideApp"
}
</script>

<style lang="scss">
aside {
  display: none;

  @media (min-width: 1200px) {
    display: block;
    position: fixed;
    top: 70px;
    left: 0;
    width: 147px;
    height: calc(100% - 70px);
    background-color: #fff;
    padding: 15px 0 15px 10px;
    z-index: 5;
  }
}

.menu {

  &__link {
    font-weight: 500;
    color: #351b46;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px 10px 15px 0;
    transition: all .25s ease-in-out;
    cursor: pointer;

    &.router-link-exact-active {
      background-color: #E5E7EF;
    }

    &:not(a):hover {
      background-color: #E5E7EF;

      & .menu__second-level {
        visibility: visible;
        opacity: 1;
      }
    }
  }

  &__icon {
    display: block;
    width: 31px;
    height: 31px;
    margin-bottom: 7px;

    &_kits {
      background: url("../assets/image/icon/icon__kits.svg") no-repeat center bottom;
    }

    &_internet {
      background: url("../assets/image/icon/icon__internet.svg") no-repeat center bottom;
    }

    &_television {
      background: url("../assets/image/icon/icon__television.svg") no-repeat center bottom;
    }

    &_telephony {
      background: url("../assets/image/icon/icon__telephony.svg") no-repeat center bottom;
    }

    &_company {
      background: url("../assets/image/icon/icon__company.svg") no-repeat center bottom;
    }

    &_shop {
      background: url("../assets/image/icon/icon__shop.svg") no-repeat center bottom;
    }
  }

  &__second-level {
    position: absolute;
    left: 147px;
    top: 0;
    width: 269px;
    height: 100%;
    padding: 48px 24px;
    background-color: #E5E7EF;
    visibility: hidden;
    opacity: 0;
    transition: all .25s ease-in-out;
    display: flex;
    flex-direction: column;

    & a {
      padding: 15px 22px;
      margin-bottom: 5px;
      display: inline-block;
      transition: background-color .25s ease-in-out;
      background-color: transparent;
      font-size: 16px;
      color: #351B46;
      font-weight: 500;

      &:hover {
        background-color: #EBEEF9;
      }

      &.router-link-exact-active {
        background-color: #EBEEF9;
      }
    }
  }
}
</style>