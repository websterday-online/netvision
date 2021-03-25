<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__top">
        <div class="footer__top-left">
          <p class="contact-paragraph footer__contact-paragraph">
            {{ $t('technical-assistance') }}:
            {{ $t('around-clock') }}
            <br>
            <a href="tel:66100100" class="underline">66-100-100</a>
          </p>

          <hr>

          <p class="contact-paragraph footer__contact-paragraph">
            {{ $t('connections') }}:
            {{ $t('around-clock') }}
            <br>
            <a href="tel:64844111" class="underline">67-844-111</a>
          </p>
        </div>

        <div class="footer__top-right">
          <nav class="footer__top-menu">
            <!--            <router-link :to="$i18nRoute({ name: 'Internet-tv' })">-->
            <!--              <span class="underline">{{ $t('menu.complement.internet-tv') }}</span>-->
            <!--            </router-link>-->

            <!--            <router-link :to="$i18nRoute({ name: 'Internet-tv-telephony' })">-->
            <!--              <span class="underline">{{ $t('menu.complement.internet-tv-telephony') }}</span>-->
            <!--            </router-link>-->

            <!--            <router-link :to="$i18nRoute({ name: 'Internet-telephony' })">-->
            <!--              <span class="underline">{{ $t('menu.complement.internet-telephony') }}</span>-->
            <!--            </router-link>-->

            <router-link :to="$i18nRoute({ name: 'Internet' })">
              <span class="underline">{{ $t('menu.internet') }}</span>
            </router-link>

            <router-link :to="$i18nRoute({ name: 'Television' })">
              <span class="underline">{{ $t('menu.television') }}</span>
            </router-link>

            <router-link :to="$i18nRoute({ name: 'Telephony' })">
              <span class="underline">{{ $t('menu.telephony') }}</span>
            </router-link>

            <router-link :to="$i18nRoute({ name: 'About' })">
              <span class="underline">{{ $t('menu.company.about') }}</span>
            </router-link>

            <router-link :to="$i18nRoute({ name: 'Payment' })">
              <span class="underline">{{ $t('menu.company.payment') }}</span>
            </router-link>

            <router-link :to="$i18nRoute({ name: 'Contact' })">
              <span class="underline">{{ $t('menu.company.contact') }}</span>
            </router-link>

            <router-link :to="$i18nRoute({ name: 'Shop' })">
              <span class="underline">{{ $t('menu.shop') }}</span>
            </router-link>
          </nav>

          <div class="footer__social mobile-hidden">
            <a href="#" target="_blank">
              <img src="../assets/image/icon/icon__facebook.svg" alt="Icon Facebook">
            </a>
          </div>
        </div>
      </div>

      <div class="footer__bottom">
        <p>
          {{ $t('copyright') }}
          <a class="underline privacy-popup-open">{{ $t('politics') }}</a>
        </p>
        <a href="#welcome" class="scroll-to">
          <span class="icon__scroll-up"></span>
        </a>
      </div>

      <div class="footer__mobile">
        <div class="social footer__social">
          <a href="#" target="_blank">
            <img src="../assets/image/icon/icon__facebook.svg" class="lazy" alt="Icon Facebook">
          </a>
        </div>

        <a href="#welcome" class="scroll-to">
          <span class="icon__scroll-up"></span>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterApp"
}
</script>

<style lang="scss">
.footer {
  padding: 25px;
  background-color: #291536;

  @media (min-width: 550px) {
    padding: 0 25px;
  }

  @media (min-width: 768px) {
    padding: 0 40px;
  }

  @media (min-width: 1200px) {
    padding: 0 25px 0 calc(147px + 25px);
  }

  @media (min-width: 1366px) {
    padding: 0 70px 0 calc(147px + 70px);
  }

  &__container {
    max-width: 1920px;
    margin: 0 auto;
  }

  &__top {
    padding: 40px 0 25px;

    @media (min-width: 550px) {
      padding: 60px 0 25px;
    }

    @media (min-width: 1024px) {
      padding: 35px 0;
      display: flex;
      justify-content: space-between;
    }

    &-left {

      @media (min-width: 550px) {
        max-width: 560px;
        display: flex;
        justify-content: space-between;
      }

      @media (min-width: 1024px) {
        display: block;
        max-width: 260px;
      }

      & hr {
        display: block;
        width: 100%;
        height: 1px;
        background-color: #442657;
        outline: 0;
        border: 0;
        margin: 20px 0;

        @media (min-width: 550px) {
          display: none;
        }
      }
    }

    &-right {
      margin-top: 20px;
      max-width: 600px;

      @media (min-width: 1024px) {
        margin-left: 25px;
      }
    }

    &-menu {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 20px;
      white-space: nowrap;

      @media (min-width: 550px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
      }

      & a {
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: #fff
      }
    }

    &__social {
      margin-top: 15px;
      display: flex;
      flex-wrap: wrap;

      & a {
        margin-right: 20px;
      }
    }
  }

  &__contact-paragraph {
    margin: 0;
    text-transform: uppercase;

    @media (min-width: 550px) {
      margin-bottom: 50px;
    }

    @media (min-width: 1024px) {
      margin-bottom: 30px;
    }

    &:last-child {
      margin: 0;
    }

    & a {
      color: #fff;

      &:after {
        content: unset;

        @media (min-width: 550px) {
          content: '';
        }
      }
    }
  }

  &__social {
    display: none;

    @media (min-width: 550px) {
      margin-top: 20px;
      display: block;
    }

    & img {
      display: block;
    }
  }

  &__call-order {
    display: none;
  }

  &__bottom {

    @media (min-width: 550px) {
      padding: 25px 0;
      border-top: 1px solid #442657;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    & p {
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
      color: #62556b;

      @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
        width: calc(100% - 35px);
        font-size: 12px;
        line-height: 15px;
      }

      & a {
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        color: #62556b;

        @media (min-width: 768px) {
          margin-left: 20px;
        }
      }
    }

    & a {
      display: inline-block;
    }
  }

  & .scroll-to {
    display: none;

    @media (min-width: 550px) {
      display: block;
    }
  }

  &__mobile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;

    @media (min-width: 550px) {
      display: none;
    }

    & .scroll-to {
      display: block;

      @media (min-width: 550px) {
        display: none;
      }
    }

    & .footer__social {
      display: block;

      @media (min-width: 550px) {
        display: none;
      }
    }
  }
}

.contact-paragraph {
  font-weight: 500;
  font-size: 11px;
  line-height: 13px;

  & a {
    display: inline-block;
    font-size: 24px;
    line-height: 28px;
    font-weight: 400;
    margin-top: 5px;
  }
}

.icon__scroll-up {
  display: inline-block;
  width: 30px;
  height: 30px;
  background: url("../assets/image/icon/icon__scroll-up.svg") no-repeat center;
}
</style>