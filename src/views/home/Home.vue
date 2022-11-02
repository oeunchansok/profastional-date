<template>
  <div class="home app">
    <section class="home">
      <HomeSesion></HomeSesion>
    </section>
  </div>
</template>

<script>
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import HomeSesion from "./components/HomeSesion.vue"
export default {
  name: 'Home',
  components: {
    HomeSesion,
  },
  data() {
    return {
      assetUrl: process.env.VUE_APP_ASSET_URL + '/',
      serviceBackground: require('@/assets/images/list-service.png'),
    };
  },

};
</script>
<style lang="scss">
@import '@core/assets/scss/swiper';
// @import '../../assets/scss/pages/home/home';
</style>
