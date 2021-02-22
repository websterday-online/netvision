<template>
  <section class="button-block">
    <div class="button-block__list">
      <div class="button-block__item">
        <router-link :to="$i18nRoute({ name: 'Payment' })">
          <span class="icon icon__bill"></span>
          <span class="underline">{{ $t('components.button-block.pay-bill') }}</span>
        </router-link>
      </div>

      <div class="button-block__item">
        <a href="#promotion" class="scroll-to">
          <span class="icon icon__plus-blue"></span>
          <span class="underline">{{ $t('components.button-block.connect-service') }}</span>
        </a>
      </div>

      <div class="button-block__item">
        <router-link :to="$i18nRoute({ name: 'Contact' })">
          <span class="icon icon__ok"></span>
          <span class="underline">{{ $t('components.button-block.ask-question') }}</span>
        </router-link>
      </div>

      <div class="button-block__item">
        <router-link :to="$i18nRoute({ name: 'Shop' })">
          <span class="icon icon__cart"></span>
          <span class="underline">{{ $t('components.button-block.buy-equipment') }}</span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ButtonBlock"
}
</script>

<style lang="scss">
.button-block {

  &__list {
    padding: 15px;
    background-color: #fff;
    border-radius: 7px;
    display: grid;
    grid-template-columns: 1fr;

    @media (min-width: 550px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 1024px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }

  &__item {
    border-bottom: 1px solid #DDDDDD;

    &:last-child {
      border: 0;
    }

    @media (min-width: 550px) {
      &:nth-child(1) {
        border-right: 1px solid #DDDDDD;
      }

      &:nth-child(3) {
        border-bottom: 0;
        border-right: 1px solid #DDDDDD;
      }
    }

    @media (min-width: 1024px) {
      &:nth-child(1) {
        border-bottom: 0;
      }

      &:nth-child(2) {
        border-right: 1px solid #DDDDDD;
        border-bottom: 0;
      }
    }
  }

  &__item a {
    display: flex;
    align-items: center;
    min-height: 70px;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #351B46;
    padding: 0 20px;
    white-space: nowrap;

    @media (min-width: 1024px) {
      font-size: 16px;
    }

    & .icon__bill {
      margin-right: 13px;
    }

    & .icon__plus-blue {
      margin-right: 12px;
    }

    & .icon__ok {
      margin-right: 12px;
    }

    & .icon__cart {
      margin-right: 11px;
    }
  }
}
</style>