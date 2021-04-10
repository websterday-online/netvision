<template>
  <div class="payment" id="welcome">
    <section class="payment__welcome">
      <h1>{{ $t('pages.payment.welcome.title') }}</h1>
      <p>{{ $t('pages.payment.welcome.description') }}</p>

      <ul class="payment__welcome-list">
        <li>
          <span>{{ $t('recipient') }}:</span>
          <span>SIA Netvision <span class="icon icon__copy"></span></span>
        </li>
        <li>
          <span>{{ $t('registration-number') }}:</span>
          <span>LV40103243156 <span class="icon icon__copy"></span></span>
        </li>
        <li>
          <span>{{ $t('bank') }}:</span>
          <span>A/S SWEDBANK <span class="icon icon__copy"></span></span>
        </li>
        <li>
          <span>{{ $t('score') }}:</span>
          <span>LV41HABA0551025914963 <span class="icon icon__copy"></span></span>
        </li>
      </ul>
    </section>

    <section class="payment__instruction">
      <h2>{{ $t('pages.payment.instruction.first-subtitle') }}</h2>

      <div class="payment__instruction-list">
        <div class="payment__instruction-item">
          <div class="payment__instruction-content">
            <h3>{{ $t('pages.payment.instruction.list.login.title') }}</h3>

            <p>{{ $t('pages.payment.instruction.list.login.description') }}</p>
          </div>

          <div class="payment__instruction-image">
            <ImageApp
                :path="'payment__instruction-image__one.jpg'"
                :alt="'Autorizējaties internet bankā'"
            />
          </div>
        </div>

        <div class="payment__instruction-item">
          <div class="payment__instruction-content">
            <h3>{{ $t('pages.payment.instruction.list.create.title') }}</h3>

            <p>{{ $t('pages.payment.instruction.list.create.description') }}</p>
          </div>

          <div class="payment__instruction-image">
            <ImageApp
                :path="'payment__instruction-image__two.jpg'"
                :alt="'Izveidojiet maksājuma uzdevumu'"
            />
          </div>
        </div>

        <div class="payment__instruction-item">
          <div class="payment__instruction-content">
            <h3>{{ $t('pages.payment.instruction.list.fill-in.title') }}</h3>

            <p v-html="$t('pages.payment.instruction.list.fill-in.description')"></p>
          </div>

          <div class="payment__instruction-image">
            <ImageApp
                :path="'payment__instruction-image__three.jpg'"
                :alt="'Aizpildiet laukus'"
            />
          </div>
        </div>

        <div class="payment__instruction-item">
          <div class="payment__instruction-content">
            <h3>{{ $t('pages.payment.instruction.list.payment.title') }}</h3>

            <p>{{ $t('pages.payment.instruction.list.payment.description') }}</p>
          </div>

          <div class="payment__instruction-image">
            <ImageApp
                :path="'payment__instruction-image__four.jpg'"
                :alt="'Apmaksa'"
            />
          </div>
        </div>
      </div>

      <h2>{{ $t('pages.payment.instruction.second-subtitle') }}</h2>

      <div class="payment__instruction-list">
        <div class="payment__instruction-item payment__instruction-item_reverse">
          <div class="payment__instruction-content">
            <h3>{{ $t('pages.payment.instruction.list.maxima.title') }}</h3>

            <p>{{ $t('pages.payment.instruction.list.maxima.description') }}</p>
          </div>

          <div class="payment__instruction-image">
            <ImageApp
                :path="'payment__instruction-image__maxima.jpg'"
                :alt="'Rēķina apmaksa tirdzniecības centrā Maxima'"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ImageApp from "@/components/ImageApp";

export default {
  name: "Payment",
  components: {ImageApp}
}
</script>

<style lang="scss">
.payment {

  & h2 {
    font-size: 27px;
    line-height: 37px;
    padding: 50px 0 30px;
    color: #291536;

    @media (min-width: 768px) {
      font-size: 36px;
      line-height: 42px;
      padding: 90px 0 70px;
    }

    @media (min-width: 1024px) {
      font-size: 56px;
      line-height: 67px;
    }
  }

  &__welcome {
    background-color: #EFF1F2;
    padding-top: 30px;
    padding-bottom: 60px;

    @media (min-width: 768px) {
      padding-top: 55px;
      padding-bottom: 85px;
    }

    & h1 {
      font-weight: bold;
      color: #291536;
      font-size: 40px;
      line-height: 45px;
      padding-bottom: 25px;

      @media (min-width: 768px) {
        font-size: 56px;
        line-height: 67px;
        padding-bottom: 30px;
      }
    }

    & p {
      max-width: 510px;
      font-weight: 500;
      color: #291536;
      font-size: 17px;
      line-height: 25px;
      margin-bottom: 50px;

      @media (min-width: 768px) {
        font-size: 25px;
        line-height: 35px;
        margin-bottom: 100px;
      }

      @media (min-width: 1200px) {
        max-width: 755px;
        font-size: 32px;
        line-height: 44px;
        margin-bottom: 145px;
      }
    }

    &-list {
      width: 100%;
      max-width: 100%;
      background-color: #FFFFFF;
      border-radius: 10px;
      padding: 20px 30px;

      @media (min-width: 768px) {
        max-width: 600px;
        padding: 30px 40px;
      }

      @media (min-width: 1200px) {
        max-width: 755px;
        padding: 35px 50px;
      }

      & li {
        border-bottom: 1px solid #E9E9E9;
        font-size: 15px;
        line-height: 40px;
        display: flex;
        flex-direction: column;

        @media (min-width: 550px) {
          font-size: 16px;
          line-height: 45px;
          flex-direction: row;
        }

        @media (min-width: 1200px) {
          font-size: 18px;
          line-height: 48px;
        }

        &:last-child {
          border-bottom: 0;
        }

        & > span {
          display: inline-block;

          &:first-child {
            width: 100%;
            color: #676E7F;

            @media (min-width: 550px) {
              width: 40%;
            }

            @media (min-width: 768px) {
              width: 45%;
            }
          }

          &:last-child {
            color: #000000;
          }
        }
      }
    }
  }

  &__instruction {
    padding-bottom: 70px;

    @media (min-width: 768px) {
      padding-bottom: 120px;
    }

    &-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 50px;

      @media (min-width: 768px) {
        margin-bottom: 80px;
      }

      @media (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-between;
      }

      &:last-child {
        margin-bottom: 0;
      }

      &:nth-child(2n) {
        @media (min-width: 1024px) {
          flex-direction: row-reverse;

          .payment__instruction-content {
            margin: 0 0 0 80px;
          }
        }
      }

      &_reverse {
        @media (min-width: 1024px) {
          flex-direction: row-reverse;

          .payment__instruction-content {
            margin: 0 0 0 80px;
          }
        }
      }
    }

    &-content {
      max-width: 600px;
      order: 2;

      @media (min-width: 1024px) {
        max-width: 370px;
        order: unset;
        margin: 0 80px 0 0;

        &:nth-child(2n) {
          margin: 0 0 0 80px;
        }
      }

      & h3 {
        font-weight: 500;
        font-size: 20px;
        line-height: 30px;
        color: #291536;
        margin: 15px 0;

        @media (min-width: 768px) {
          font-size: 30px;
          line-height: 35px;
        }

        @media (min-width: 1024px) {
          margin: 0 0 15px 0;
        }

        @media (min-width: 1200px) {
          font-size: 32px;
          line-height: 38px;
        }
      }

      & p {
        font-size: 15px;
        line-height: 20px;
        color: rgba(45, 51, 58, 0.8);

        @media (min-width: 768px) {
          font-size: 17px;
          line-height: 23px;
        }

        @media (min-width: 1200px) {
          font-size: 20px;
          line-height: 25px;
        }
      }
    }

    &-image {
      max-width: 705px;
      width: 100%;
      order: 1;

      @media (min-width: 1024px) {
        order: unset;
      }

      & img {
        max-width: 100%;
        border-radius: 10px;
      }
    }
  }
}
</style>