<template>
  <section>
    <PortfoLioSection></PortfoLioSection>
  </section>
</template>

<script>
  import PortfoLioSection from "./components/PortfoLioSection.vue"
  export default {
    name: 'Home',
    components: {
      PortfoLioSection,

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
