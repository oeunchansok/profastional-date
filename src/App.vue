<template>
  <div class="wrap">
    <!-- Header -->
    <Header />
    <!-- <main class="wrap-content">
      <router-view/>
    </main> -->
    <Home id="Home"></Home>
    <About id="About"></About>
    <Portfolio id="Portfolio"></Portfolio>
    <Testmonial id="Testmonial"></Testmonial>
    <AwardSesion id="Award"></AwardSesion>
    <BlogSection id="Blog"></BlogSection>
    <CotactSection id="Contact"></CotactSection>
    <!-- Footer -->
    <Footer />
  </div>
</template>
<script>
  import Header from './layouts/header/Header.vue'
  import Footer from './layouts/footer/Footer.vue'
  import Home from '@views/home/Home.vue'
  import About from '@views/about/About.vue'
  import Portfolio from "@views/portfolio/PortfoLio.vue"
  import Testmonial from "@views/testimonial/Testimonial.vue"
  import AwardSesion from "@views/home/components/AwardSesion.vue"
  import BlogSection from "@views/home/components/BlogSection.vue"
  import CotactSection from "@views/home/components/ContactSection.vue"
  export default {
    name: 'LayoutWeb',
    components: {
      Header,
      Footer,
      Home,
      About,
      Portfolio,
      Testmonial,
      AwardSesion,
      BlogSection,
      CotactSection,
    }
    
  };
</script>


<style lang="scss">
.wrap{
  overflow: hidden;

}

</style>
