<template>
  <div class="contact" id="welcome">
    <section class="contact__welcome">
      <h1 class="contact__welcome-title">{{ $t('pages.contact.welcome.title') }}</h1>
      <p class="contact__welcome-description">{{ $t('pages.contact.welcome.description') }}</p>

      <div class="contact__welcome-list">
        <div class="contact__welcome-item">
          <h3>{{ $t('technical-assistance') }}</h3>
          <p>{{ $t('around-clock') }}</p>
          <div class="contact__welcome-content">
            <p class="bold">66 100 100</p>
            <p class="bold">67 844 111 <span>{{ $t('tet-network') }}</span></p>
            <a href="mailto:support@netvision.lv"><span class="underline">support@netvision.lv</span></a>
          </div>
        </div>

        <div class="contact__welcome-item">
          <h3>{{ $t('subscriber-department') }}</h3>
          <p>{{ $t('subscriber-department-description') }}</p>
          <div class="contact__welcome-content">
            <a href="mailto:rekini@netvision.lv"><span class="underline">rekini@netvision.lv</span></a>
          </div>
        </div>

        <div class="contact__welcome-item">
          <h3>{{ $t('for-new-clients') }}</h3>
          <p>{{ $t('around-clock') }}</p>
          <div class="contact__welcome-content">
            <p class="bold">67 205 404</p>
            <a href="mailto:sales@netvision.lv"><span class="underline">sales@netvision.lv</span></a>
          </div>
        </div>
      </div>
    </section>

    <section class="contact__schedule">
      <h2>{{ $t('pages.contact.schedule.title') }}</h2>

      <div class="contact__schedule-list">
        <div class="contact__schedule-item">
          <h3>{{ $t('city.riga') }}</h3>

          <p>
            <span class="underline">{{ $t('pages.contact.schedule.streets.riga') }}</span>
            LV-1063
          </p>

          <p>
            <span>{{ $t('days.monday.short') }}–{{ $t('days.friday.short') }}</span>
            <span>9<sup>00</sup>-18<sup>00</sup></span>
          </p>
        </div>

        <div class="contact__schedule-item">
          <h3>{{ $t('city.livany') }}</h3>

          <p>
            <span class="underline">{{ $t('pages.contact.schedule.streets.livany') }}</span>
            LV-5316
          </p>

          <p>
            <span>{{ $t('days.monday.short') }}–{{ $t('days.friday.short') }}</span>
            <span>9<sup>00</sup>-12<sup>00</sup></span>
            <span>13<sup>00</sup>-17<sup>00</sup></span>
          </p>
        </div>

        <div class="contact__schedule-item">
          <h3>{{ $t('city.liepaya') }}</h3>

          <p>
            <span class="underline">{{ $t('pages.contact.schedule.streets.liepaya') }}</span>
            LV-3402
          </p>

          <p>
            <span>{{ $t('days.monday.short') }}–{{ $t('days.friday.short') }}</span>
            <span>9<sup>00</sup>-12<sup>00</sup></span>
            <span>13<sup>00</sup>-18<sup>00</sup></span>
          </p>
        </div>

        <div class="contact__schedule-item">
          <h3>{{ $t('city.yurmala') }}</h3>

          <p>
            <span class="underline">{{ $t('pages.contact.schedule.streets.yurmala') }}</span>
            LV-2016
          </p>

          <p>
            <span>{{ $t('days.monday.short') }}, {{ $t('days.wednesday.short') }}</span>
            <span>9<sup>00</sup>-13<sup>00</sup></span>
            <span>14<sup>00</sup>-18<sup>00</sup></span>
          </p>
        </div>

        <div class="contact__schedule-item">
          <h3>{{ $t('city.tukums') }}</h3>

          <p>
            <span class="underline">{{ $t('pages.contact.schedule.streets.tukums') }}</span>
            LV-3101
          </p>

          <p>
            <span>{{ $t('days.monday.short') }}–{{ $t('days.friday.short') }}</span>
            <span>10<sup>00</sup>-14<sup>00</sup></span>
            <span>15<sup>00</sup>-17<sup>00</sup></span>
          </p>
        </div>

        <div class="contact__schedule-item">
          <h3>{{ $t('city.valmiera') }}</h3>

          <p>
            <span class="underline">{{ $t('pages.contact.schedule.streets.valmiera') }}</span>
            LV-4201
          </p>

          <p>
            <span>{{ $t('days.monday.short') }}–{{ $t('days.friday.short') }}</span>
            <span>10<sup>00</sup>-12<sup>00</sup></span>
            <span>13<sup>00</sup>-17<sup>00</sup></span>
          </p>
        </div>
      </div>
    </section>

    <section class="contact__requisites">
      <h2>{{ $t('pages.contact.requisites.title') }}</h2>

      <div class="contact__requisites-list">
        <ul class="contact__requisites-item">
          <li>Netvision</li>

          <li>
            <span>{{ $t('recipient') }}:</span>
            <span>SIA Netvision <span class="icon icon__copy"></span></span>
          </li>

          <li>
            <span>{{ $t('registration-number') }}:</span>
            <span>LV40103243156 <span class="icon icon__copy"></span></span>
          </li>

          <li>
            <span>{{ $t('legal-address') }}:</span>
            <span>Maskavas iela 240-510, Rīga, LV-1063 <span class="icon icon__copy"></span></span>
          </li>

          <li>
            <span>Физ. адрес:</span>
            <span>Maskavas iela 240-508, Rīga LV-1063 <span class="icon icon__copy"></span></span>
          </li>

          <li>
            <span>{{ $t('score') }}:</span>
            <span>LV41HABA0551025914963 <span class="icon icon__copy"></span></span>
          </li>

          <li>
            <span>{{ $t('bank') }}:</span>
            <span>A/S SWEDBANK <span class="icon icon__copy"></span></span>
          </li>
        </ul>

        <ul class="contact__requisites-item">
          <li>Novalat</li>

          <li>
            <span>{{ $t('recipient') }}:</span>
            <span>SIA “NOVA” <span class="icon icon__copy"></span></span>
          </li>

          <li>
            <span>{{ $t('registration-number') }}:</span>
            <span>54103000261 <span class="icon icon__copy"></span></span>
          </li>

          <li>
            <span>{{ $t('legal-address') }}:</span>
            <span>Valmiera, Fabrikas iela 1, LV-4201 <span class="icon icon__copy"></span></span>
          </li>

          <li>
            <span>{{ $t('score') }}:</span>
            <span>LV73HABA0551004691757 <span class="icon icon__copy"></span></span>
          </li>

          <li>
            <span>{{ $t('bank') }}:</span>
            <span>A/S Swedbank <span class="icon icon__copy"></span></span>
          </li>

          <li>
            <span>{{ $t('telephone') }}:</span>
            <span>
              <a href="tel:+37164226050" target="_blank"><span class="underline">+371 64226050</span></a>,
              <a href="tel:+37129207642"><span class="underline">+371 29207642</span></a>
              <span class="icon icon__copy"></span>
            </span>
          </li>

          <li>
            <span>{{ $t('mail') }}:</span>
            <span>
              <a href="mailto:nova@novalat.lv" target="_blank"><span class="underline">nova@novalat.lv</span></a>
              <span class="icon icon__copy"></span>
            </span>
          </li>

          <li>
            <span>{{ $t('website') }}:</span>
            <span>
              <a href="www.novalat.lv" target="_blank"><span class="underline">www.novalat.lv</span></a>
              <span class="icon icon__copy"></span>
            </span>
          </li>
        </ul>

        <ul class="contact__requisites-item">
          <li>Kopideja</li>

          <li>
            <span>{{ $t('recipient') }}:</span>
            <span>SIA “KOPIDEJA” <span class="icon icon__copy"></span></span>
          </li>

          <li>
            <span>{{ $t('registration-number') }}:</span>
            <span>4000327632 <span class="icon icon__copy"></span></span>
          </li>

          <li>
            <span>{{ $t('legal-address') }}:</span>
            <span>Tukums, Pasta iela 4, LV-3101 <span class="icon icon__copy"></span></span>
          </li>

          <li>
            <span>{{ $t('score') }}:</span>
            <span>LV73HABA0551004295124 <span class="icon icon__copy"></span></span>
          </li>

          <li>
            <span>{{ $t('bank') }}:</span>
            <span>A/S Swedbank <span class="icon icon__copy"></span></span>
          </li>

          <li>
            <span>{{ $t('telephone') }}:</span>
            <span>
              <a href="tel:+37129495161" target="_blank"><span class="underline">+371 29495161</span></a>
              <span class="icon icon__copy"></span>
            </span>
          </li>

          <li>
            <span>{{ $t('mail') }}:</span>
            <span>
              <a href="mailto:info@kopideja.lv" target="_blank"><span class="underline">info@kopideja.lv</span></a>
              <span class="icon icon__copy"></span>
            </span>
          </li>

          <li>
            <span>{{ $t('website') }}:</span>
            <span>
              <a href="www.kopideja.lv" target="_blank"><span class="underline">www.kopideja.lv</span></a>
              <span class="icon icon__copy"></span>
            </span>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Contact"
}
</script>

<style lang="scss">
.contact {

  & h2 {
    font-weight: bold;
    font-size: 40px;
    line-height: 50px;
    color: #291536;
    padding: 90px 0 30px;

    @media (min-width: 768px) {
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

    &-title {
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

    &-description {
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
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 30px;

      @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
      }

      @media (min-width: 1024px) {
        grid-template-columns: 1fr 1fr 1fr;
      }
    }

    &-item {
      background-color: #FFFFFF;
      border-radius: 10px;
      padding: 25px 30px 30px;
      font-size: 15px;
      line-height: 20px;
      color: #000000;
      display: flex;
      flex-direction: column;

      @media (min-width: 1200px) {
        font-size: 16px;
        line-height: 22px;
      }

      @media (min-width: 1440px) {
        padding: 30px 40px 40px;
        font-size: 18px;
        line-height: 25px;
      }

      & h3 {
        font-weight: 600;
        font-size: 18px;
        line-height: 23px;
        width: calc(100% + 60px);
        margin: 0 -30px 20px;
        padding: 0 30px 20px;
        color: #000000;
        border-bottom: 1px solid #E9E9E9;

        @media (min-width: 1200px) {
          font-size: 20px;
          line-height: 25px;
        }

        @media (min-width: 1440px) {
          font-size: 24px;
          line-height: 29px;
          width: calc(100% + 80px);
          padding: 0 40px 20px;
          margin: 0 -40px 20px;
        }
      }

      & > p {
        margin-bottom: 30px;
      }

      & p span {
        font-weight: 400;
      }

      & p.bold {
        font-weight: 600;
      }

      & a {
        color: #000000;
        display: inline-block;
      }
    }

    &-content {
      margin-top: auto;
    }
  }

  &__schedule {
    &-list {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 30px;

      @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
      }

      @media (min-width: 1024px) {
        grid-template-columns: 1fr 1fr 1fr;
      }
    }

    &-item {
      border: 1px solid #E9E9E9;
      border-radius: 10px;
      padding: 25px 30px 30px;
      font-size: 15px;
      line-height: 20px;
      color: #000000;
      display: flex;
      flex-direction: column;

      @media (min-width: 1200px) {
        font-size: 16px;
        line-height: 22px;
      }

      @media (min-width: 1440px) {
        padding: 30px 40px 40px;
        font-size: 18px;
        line-height: 25px;
      }

      & h3 {
        font-weight: 600;
        font-size: 18px;
        line-height: 23px;
        width: calc(100% + 60px);
        margin: 0 -30px 20px;
        padding: 0 30px 20px;
        color: #000000;
        border-bottom: 1px solid #E9E9E9;

        @media (min-width: 1200px) {
          font-size: 20px;
          line-height: 25px;
        }

        @media (min-width: 1440px) {
          font-size: 24px;
          line-height: 29px;
          width: calc(100% + 80px);
          padding: 0 40px 20px;
          margin: 0 -40px 20px;
        }
      }

      & p {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 20px;

        &:last-child {
          margin-bottom: 0;

          & span:first-child {
            font-weight: 600;
          }
        }
      }
    }
  }

  &__requisites {
    padding-bottom: 55px;

    &-list {
      display: grid;
      grid-template-columns: 1fr;
      grid-column-gap: 35px;
      grid-row-gap: 55px;

      @media (min-width: 1024px) {
        grid-template-columns: 1fr 1fr;
      }

      @media (min-width: 1920px) {
        grid-template-columns: 1fr 1fr 1fr;
      }
    }

    &-item {

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
          justify-content: space-between;
        }

        &:first-child {
          font-weight: 600;
          font-size: 24px;
          line-height: 40px;
          color: #000000;
          padding-bottom: 25px;
        }

        &:last-child {
          border-bottom: 0;
        }

        & > span {

          &:first-child {
            width: 100%;
            color: #676E7F;

            @media (min-width: 550px) {
              width: 30%;
            }
          }

          &:last-child {
            width: 100%;
            max-width: 100%;
            color: #000000;

            @media (min-width: 550px) {
              max-width: 360px;
              width: 70%;
            }
          }
        }
      }
    }
  }
}
</style>