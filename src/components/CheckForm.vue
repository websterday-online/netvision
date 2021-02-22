<template>
  <form action="#" method="post" class="check-form">
    <div class="check-form__top">
      <p><span>{{ $t('components.check-form.step-one') }}</span> {{ $t('components.check-form.step-one-description') }}</p>
      <p><span>{{ $t('components.check-form.step-two') }}</span> {{ $t('components.check-form.step-two-description') }}</p>
    </div>

    <div class="check-form__bottom">
      <div class="check-form__step-one">
        <div class="check-form__block">
          <input type="text" name="address" id="check-form__input-three" required="">
          <label for="check-form__input-three">{{ $t('components.check-form.address') }}</label>

          <div class="check-form__button-check">{{ $t('components.check-form.check') }} <span>{{ $t('components.check-form.availability') }}</span></div>
        </div>
      </div>

      <div class="check-form__step-two">
        <div class="check-form__block">
          <input type="tel" name="phone" id="check-form__input-four"
                 onkeyup="this.value = this.value.replace(/[^\d]/g,'');" required="">
          <label for="check-form__input-four">{{ $t('components.check-form.phone-number') }}</label>

          <button class="check-form__button">{{ $t('components.check-form.send') }}</button>
        </div>

        <p class="check-form__error">{{ $t('components.check-form.error.phone-number') }}</p>

        <div class="check-form__checkbox">
          <input type="checkbox" name="agree" value="agree" checked="" id="check-form__checkbox-agree-two"
                 required="">
          <div class="check-form__checkbox-icon"></div>
          <label for="check-form__checkbox-agree-two">
            {{ $t('components.check-form.agree-with') }} <a class="privacy-popup-open">{{ $t('components.check-form.processing-rules') }}</a> {{ $t('components.check-form.data') }}
          </label>
        </div>
      </div>

      <div class="check-form__loader">{{ $t('components.check-form.wait') }}</div>
    </div>
  </form>
</template>

<script>
export default {
  name: "CheckForm"
}
</script>

<style lang="scss">
.check-form {
  &__top {
    display: block;
    text-align: center;
    font-size: 10px;
    line-height: 17px;
    margin-bottom: 12px;

    @media (min-width: 550px) {
      font-size: 11px;
    }

    @media (min-width: 768px) {
      font-size: 12px;
    }

    @media (min-width: 1200px) {
      display: flex;
      align-items: center;
      font-size: 14px;
    }

    & p:last-child {
      display: none;
    }

    & span {
      display: block;

      @media (min-width: 1200px) {
        display: inline-block;
      }
    }
  }

  &__bottom {
    max-width: 270px;
    margin: 0 auto;

    @media (min-width: 768px) {
      max-width: 330px;
    }

    @media (min-width: 1024px) {
      max-width: 100%;
    }
  }

  &__step-one {
    position: relative;

    &:after {
      content: '';
      position: absolute;
      bottom: -6px;
      left: 0;
      width: 0;
      height: 3px;
      background-color: #9909e3;
      transition: width 1.5s ease-in-out;
    }

    &.check-form_loading:after {
      width: 100%;
    }

    &.check-form_loading .check-form__block input:valid ~ label,
    &.check-form_loading .check-form__block input {
      color: #cdcdcd !important;
    }

    &.check-form_loading .check-form__button-check {
      background: #8101c2;
      color: transparent;
      user-select: none;
      pointer-events: none;
      cursor: not-allowed;
    }

    &.check-form_loading .check-form__button-check:hover {
      background: #8101c2;
    }

    &.check-form_loading .check-form__button-check:after {
      content: '';
      position: absolute;
      width: 29px;
      height: 29px;
      top: 13px;
      right: 13px;
      background: #8002c2 url('../assets/image/icon/icon__loader.svg') no-repeat center right;
      animation: rotate 3s infinite ease-in-out;
    }
  }

  &__step-two {
    display: none;
  }

  &__block {
    position: relative;

    @media (min-width: 1024px) {

    }

    & input {
      width: 100%;
      height: 50px;
      padding: 22px 13px 0;
      font-size: 13px;
      background-color: #fff;
      border-radius: 3px;
      color: #000;
      border: 0;
      outline: none;

      @media (min-width: 1200px) {
        height: 55px;
        padding: 22px 190px 0 13px;
        font-size: 16px;
      }

      &:focus ~ label,
      &:valid ~ label {
        font-weight: 500;
        font-size: 12px;
        line-height: 12px;
        color: #9909e3;
        top: 10px;
      }
    }

    & label {
      position: absolute;
      color: #7e8082;
      font-size: 13px;
      line-height: 13px;
      top: calc((50px - 13px) / 2);
      left: 13px;
      transition: top .2s ease-in-out;

      @media (min-width: 1200px) {
        font-size: 16px;
        line-height: 16px;
        top: calc((100% - 16px) / 2);
      }
    }
  }

  &__button-check,
  &__button {
    top: 0;
    background: #9909e3 url('../assets/image/icon/icon__search.svg') no-repeat center right;
    border-radius: 3px;
    padding: 0 55px 0 0;
    text-align: center;
    transition: background .2s ease-in-out;
    cursor: pointer;
    outline: none;
    border: none;
    color: #fff;
    font-size: 14px;
    position: relative;
    right: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    margin-top: 10px;

    @media (min-width: 1200px) {
      position: absolute;
      right: -1px;
      width: 177px;
      height: 55px;
      line-height: 55px;
      margin: 0;
    }

    & span {
      display: inline-block;

      @media (min-width: 1200px) {
        display: none;
      }
    }

    &:hover {
      background: #8101c2 url("../assets/image/icon/icon__search.svg") no-repeat center right;
    }
  }

  &__error {
    display: none;
    font-size: 12px;
    line-height: 13px;
    color: #ff3939;
    margin-top: 9px;
    text-align: left;

    &_active {
      display: block;
    }
  }

  &__checkbox {
    width: 100%;
    height: 23px;
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10px;

    & input {
      position: absolute;
      width: 23px;
      height: 23px;
      opacity: 0;
      z-index: 1;
      cursor: pointer;
    }

    &-icon {
      width: 23px;
      height: 23px;
      border: 1px solid #9909e3;
      border-radius: 2px;
      background: transparent;

      &_error {
        border-color: #ff3939;
      }
    }

    & input:checked + .check-form__checkbox-icon {
      background: #9909e3 url("../assets/image/icon/icon__checkbox.svg") no-repeat center;
    }

    & label {
      font-size: 10px;
      line-height: 13px;
      margin-left: 10px;
      transition: .2s ease-in-out;

      @media (min-width: 768px) {
        font-size: 12px;
      }

      & a {
        color: #fff;
        text-decoration: underline;
        transition: .2s ease-in-out;

        &:hover {
          text-decoration-color: transparent;
        }
      }


    }

    &-label_error {
      color: #ff3939;

      & a {
        color: inherit;
      }
    }
  }

  &__loader {
    display: none;
    width: 100%;
    height: 50px;
    font-size: 12px;
    background-color: #9909e3;
    border-radius: 3px;
    padding: 13px;
    position: relative;
    justify-content: space-between;
    align-items: center;
    
    @media (min-width: 1024px) {
      height: 55px;
      font-size: 14px;
    }

    &.check-form__loader_active {
      display: flex;
    }

    &:after {
      position: relative;
      content: '';
      width: 29px;
      height: 29px;
      background: url("../assets/image/icon/icon__loader.svg") no-repeat center;
      animation: rotate 3s infinite ease-in-out;
    }
  }
}

input.error ~ label {
  color: #ff3939;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>