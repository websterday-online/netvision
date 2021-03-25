<template>
  <div class="about" id="welcome">
    <section class="about__welcome">
      <div class="about__welcome-top">
        <p>{{ $t('pages.about.welcome.description') }}</p>

        <div class="about__welcome-image">
          <img src="../assets/image/mini-logotype.png" alt="Netvision logotype">
        </div>
      </div>

      <div class="about__welcome-bottom">
        <p>
          <span>16+</span>
          {{ $t('pages.about.welcome.achievements.years') }}
        </p>
        <p>
          <span>70+</span>
          {{ $t('pages.about.welcome.achievements.employees') }}
        </p>
        <p>
          <span>15+</span>
          {{ $t('pages.about.welcome.achievements.settlements') }}
        </p>
      </div>
    </section>

    <section class="about__team">
      <h2>{{ $t('pages.about.team.about-title') }}</h2>

      <p>{{ $t('pages.about.team.description') }}</p>

      <div class="about__team-image">
        <img src="../assets/image/logotype-banner.jpg" alt="Netvision banner logotype">
      </div>

      <h2>{{ $t('pages.about.team.benefits') }}</h2>

      <div class="about__team-list">
        <div class="about__team-item">
          <div class="about__team-item__image">
            <img src="../assets/image/about__team-one.jpg" alt="Широкая зона покрытия">
          </div>

          <div class="about__team-item__content">
            <h3>{{ $t('pages.about.team.coverage-area') }}</h3>
            <p>{{ $t('pages.about.team.coverage-area-description') }}</p>
          </div>
        </div>

        <div class="about__team-item">
          <div class="about__team-item__image">
            <img src="../assets/image/about__team-two.jpg" alt="Инновационные технологии">
          </div>

          <div class="about__team-item__content">
            <h3>{{ $t('pages.about.team.innovative-technologies') }}</h3>
            <p>{{ $t('pages.about.team.innovative-technologies-description') }}</p>
          </div>
        </div>

        <div class="about__team-item">
          <div class="about__team-item__image">
            <img src="../assets/image/about__team-three.jpg" alt="Современная техническая база">
          </div>

          <div class="about__team-item__content">
            <h3>{{ $t('pages.about.team.technical-base') }}</h3>
            <p>{{ $t('pages.about.team.technical-base-description') }}</p>
          </div>
        </div>

        <div class="about__team-item">
          <div class="about__team-item__image">
            <img src="../assets/image/about__team-four.jpg" alt="Надежная связь высокой отказоустойчивости">
          </div>

          <div class="about__team-item__content">
            <h3>{{ $t('pages.about.team.resilient-communication') }}</h3>
            <p>{{ $t('pages.about.team.resilient-communication-description') }}</p>
          </div>
        </div>

        <div class="about__team-item">
          <div class="about__team-item__image">
            <img src="../assets/image/about__team-five.jpg" alt="Высокая квалификация специалистов">
          </div>

          <div class="about__team-item__content">
            <h3>{{ $t('pages.about.team.qualified-specialists') }}</h3>
            <p>{{ $t('pages.about.team.qualified-specialists-description') }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="about__legal">
      <h2 v-html="$t('pages.about.legal.title')"></h2>

      <div class="about__legal-list">
        <div class="about__legal-item">
          <span class="icon icon__adobe"></span>
          <a href="/documents/electronic-communications-service-agreement.pdf" target="_blank" download=""><span>{{ $t('pages.about.legal.documents.service-agreement') }}</span></a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "About"
}
</script>

<style lang="scss">
.about {
  & h2 {
    font-weight: 700;
    font-size: 22px;
    line-height: 32px;
    letter-spacing: -0.02em;
    color: #202124;
    text-align: left;
    padding: 50px 0 35px;

    @media (min-width: 550px) {
      font-size: 35px;
      line-height: 45px;
      padding: 65px 0 40px;
    }

    @media (min-width: 768px) {
      padding: 80px 0 60px;
      font-size: 45px;
      line-height: 55px;
    }

    @media (min-width: 1024px) {
      font-size: 56px;
      line-height: 67px;
      padding: 130px 0 25px;
    }
  }

  &__welcome {
    padding-top: 120px;
    padding-bottom: 35px;
    background-color: #D2CEEC;
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    @media (min-width: 768px) {
      padding-top: 115px;
      padding-bottom: 85px;
    }

    @media (min-width: 1024px) {
      min-height: unset;
    }

    &-top {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      margin-bottom: 100px;

      @media (min-width: 768px) {
        margin-bottom: 150px;
        flex-direction: row;
        justify-content: space-between;
      }

      & p {
        width: 100%;
        max-width: 100%;
        font-weight: 500;
        color: #291536;
        font-size: 16px;
        line-height: 26px;

        @media (min-width: 550px) {
          max-width: 750px;
          width: 80%;
          font-size: 20px;
          line-height: 30px;
        }

        @media (min-width: 768px) {
          font-size: 22px;
          line-height: 33px;
        }

        @media (min-width: 1024px) {
          font-size: 26px;
          line-height: 37px;
        }

        @media (min-width: 1366px) {
          font-size: 32px;
          line-height: 43px;
        }
      }
    }

    &-image {
      margin: 0 0 25px 0;
      width: 150px;

      @media (min-width: 550px) {
        max-width: 230px;
        width: 100%;
      }

      @media (min-width: 768px) {
        margin: 0 0 0 25px;
      }

      @media (min-width: 1024px) {
        margin: 0 25px;
      }

      & img {
        max-width: 100%;
      }
    }

    &-bottom {
      display: flex;
      justify-content: space-between;
      margin: auto 0 0 0;
      max-width: 100%;

      @media (min-width: 1024px) {
        max-width: 750px;
      }

      & p {
        font-size: 12px;
        color: #000;
        display: flex;
        flex-direction: column;

        @media (min-width: 550px) {
          font-size: 17px;
        }

        & span {
          font-size: 50px;
          line-height: 55px;
          color: #fff;

          @media (min-width: 550px) {
            font-size: 90px;
            line-height: 95px;
          }

          @media (min-width: 768px) {
            font-size: 100px;
            line-height: 105px;
          }

          @media (min-width: 1024px) {
            font-size: 110px;
            line-height: 115px;
          }

          @media (min-width: 1366px) {
            font-size: 120px;
            line-height: 125px;
          }
        }
      }
    }
  }

  &__team {

    & > p {
      max-width: 100%;
      font-size: 14px;
      line-height: 22px;
      color: rgba(45, 51, 58, .8);

      @media (min-width: 550px) {
        max-width: 600px;
        font-size: 15px;
        line-height: 25px;
      }

      @media (min-width: 768px) {
        max-width: 750px;
        font-size: 16px;
        line-height: 24px;
      }

      @media (min-width: 1024px) {
        font-size: 20px;
        line-height: 28px;
      }
    }

    &-image {
      width: 100%;
      margin: 30px 0 0 0;

      @media (min-width: 550px) {
        margin: 50px 0 0 0;
      }

      @media (min-width: 768px) {
        margin: 90px 0 0 0;
      }

      & img {
        max-width: 100%;
        border-radius: 10px;
      }
    }

    &-list {

      @media (min-width: 550px) {
        margin: 65px 0 0 0;
      }
    }

    &-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 50px;

      &:nth-child(2n) {
        flex-direction: column-reverse;

        .about__team-item__image {
          order: 2;
        }

        .about__team-item__content {
          order: 1;

          @media (min-width: 768px) {
            margin: 0 40px 0 0;
          }

          @media (min-width: 1024px) {
            margin: 0 75px 0 0;
          }
        }
      }

      &:last-child {
        margin: 0;
      }

      @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 80px;

        &:nth-child(2n) {
          flex-direction: row;
        }
      }

      &__image {
        max-width: 700px;

        & img {
          max-width: 100%;
          border-radius: 10px;
        }
      }

      &__content {
        width: 100%;
        margin: 30px 0 0 0;

        @media (min-width: 768px) {
          margin: 0 0 0 40px;
        }

        @media (min-width: 1024px) {
          max-width: 450px;
          margin: 0 0 0 75px;
        }

        & h3 {
          font-weight: 500;
          font-size: 27px;
          line-height: 33px;
          color: #291536;
          margin-bottom: 15px;

          @media (min-width: 1024px) {
            font-size: 32px;
            line-height: 38px;
          }
        }

        & p {
          font-size: 15px;
          line-height: 20px;
          letter-spacing: -0.01em;
          color: rgba(45, 51, 58, .8);

          @media (min-width: 1024px) {
            font-size: 20px;
            line-height: 25px;
          }
        }
      }
    }
  }

  &__legal {
    padding-bottom: 100px;

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
      display: flex;
      align-items: center;
      border: 1px solid #E9E9E9;
      border-radius: 10px;
      padding: 25px;

      @media (min-width: 1200px) {
        padding: 35px 40px;
      }

      & a {
        display: inline-block;
        font-size: 15px;
        line-height: 20px;
        color: #676E7F;
        margin-left: 20px;

        & span {
          border-bottom: 1px solid rgba(153, 9, 227, 0.5);
          transition: all .25s ease-in-out;
        }

        &:hover span {
          border-color: transparent;
        }
      }
    }
  }
}
</style>