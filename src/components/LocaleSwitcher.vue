<template>
  <ul class="lang-switcher">
    <li
        v-for="locale in supportedLocales"
        :key="locale"
        @click="switchLocale(locale)"
        v-bind:class="{'lang-switcher__item_active': locale === $i18n.locale}"
        class="lang-switcher__item underline"
    >
      {{ $t('language.' + locale) }}
    </li>
  </ul>
</template>

<script>
import {Trans} from '@/plugins/Translation'

export default {
  name: 'LocaleSwitcher',
  computed: {
    supportedLocales() {
      return Trans.supportedLocales
    },
  },
  methods: {
    switchLocale(locale) {
      if (this.$i18n.locale !== locale) {
        const to = this.$router.resolve({params: {locale}})
        return Trans.changeLocale(locale).then(() => {
          this.$router.push(to.location)
        })
      }
    }
  }
}
</script>

<style lang="scss">
.lang-switcher {
  display: flex;

  &__item {
    color: #685376;
    font-size: 14px;
    margin-right: 15px;
    cursor: pointer;

    &_active {
      color: #fff;
      pointer-events: none;

      &.underline:after {
        content: none;
      }
    }

    &:last-child {
      margin: 0;
    }
  }
}
</style>