import Vue from 'vue'
import VueI18n from 'vue-i18n'
import lv from '@/locales/lv.json'

Vue.use(VueI18n)

// Key - language to use the rule for, `'ru'`, in this case
// Value - function to choose right plural form
const pluralizationRules = {
    /**
     * @param choice {number} a choice index given by the input to $tc: `$tc('path.to.rule', choiceIndex)`
     * @param choicesLength {number} an overall amount of available choices
     * @returns a final choice index to select plural word by
     */
    'ru': function (choice, choicesLength) {
        // this === VueI18n instance, so the locale property also exists here

        if (choice === 0) {
            return 0;
        }

        const teen = choice > 10 && choice < 20;
        const endsWithOne = choice % 10 === 1;

        if (choicesLength < 4) {
            return (!teen && endsWithOne) ? 1 : 2;
        }
        if (!teen && endsWithOne) {
            return 1;
        }
        if (!teen && choice % 10 >= 2 && choice % 10 <= 4) {
            return 2;
        }

        return (choicesLength < 4) ? 2 : 3;
    }
}

const dateTimeFormats = {
    'lv': {
        short: {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        }
    },
    'ru': {
        short: {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        }
    }
}

const numberFormats = {
    'lv': {
        currency: {
            style: 'currency', currency: 'USD'
        }
    },
    'ru': {
        currency: {
            style: 'currency', currency: 'RUB'
        }
    }
}

export const i18n = new VueI18n({
    locale: process.env.VUE_APP_I18N_LOCALE || 'lv',
    fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'ru',
    messages: {lv},
    pluralizationRules,
    dateTimeFormats,
    numberFormats
})