<template>
  <section class="coverage" id="promotion">
    <div class="content-container coverage__content-container">
      <h2 class="title coverage__title">{{ $t('components.coverage.title') }}</h2>

      <CheckForm class="coverage__check-form"/>

      <div class="coverage__rating">
        <span class="icon icon__rating"></span>
        {{ $t('rating') }}
      </div>
    </div>
  </section>
</template>

<script>
import CheckForm from "@/components/CheckForm";

export default {
  name: "CoverageForm",
  components: {CheckForm}
}
</script>

<style lang="scss">
.coverage {

  @media (max-width: 768px) {
    padding: 0;
  }

  &__content-container {
    padding: 0 28px 80px;
    background: #351b46;
    border-radius: 0;

    @media (min-width: 768px) {
      border-radius: 5px;
    }
  }

  &__title {
    max-width: 620px;
    color: #ffd66d;
    padding: 80px 0 30px;
    margin: 0 auto;
  }

  &__subtitle {
    max-width: 492px;
    font-size: 15px;
    line-height: 22px;
    text-align: center;
    margin: 0 auto 30px;
  }

  &__check-form {
    max-width: 590px;
    margin: 0 auto 10px;

    @media (min-width: 1024px) {
      margin: 0 auto 40px;
    }

    & .check-form__top {
      align-items: center;
    }
  }

  &__stock {
    display: none;
  }

  &__rating {
    max-width: 265px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 12px;
    line-height: 16px;
    margin: 0 auto;

    @media (min-width: 1024px) {
      max-width: 100%;
      flex-direction: row;
      font-size: 14px;
    }

    & .icon__rating {
      display: block;
      margin: 20px 0 15px;

      @media (min-width: 1024px) {
        margin: 0 10px 0 0;
      }
    }
  }
}
</style>