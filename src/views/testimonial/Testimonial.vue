<template>
  <section class="testimonial">
    <div class="section-title text-center">
      <span class="subtitle">WHAT CLIENTS SAY</span>
      <h2 class="title">Testimonial</h2>
      <TestmonialSection></TestmonialSection>
    </div>
  </section>
</template>

<script>
import TestmonialSection from "./components/TestimonialSection.vue";
export default {
  components: {
    TestmonialSection,
  },
};
</script>

<style lang="scss">
@import "@core/assets/scss/swiper";
</style>