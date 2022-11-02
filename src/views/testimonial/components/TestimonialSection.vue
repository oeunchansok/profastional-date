<template>
  <swiper class="swiper" :options="swiperOption" :slides-per-view="3" :space-between="50" navigation>

    <swiper-slide class="swiper-slide" v-for="(testimonial, i) in testimonials" :key="i">
      <SwiperTestimonial :testimonial="testimonial"></SwiperTestimonial>
    </swiper-slide>

    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev rounded" slot="button-prev"></div>
    <div class="swiper-button-next rounded" slot="button-next"></div>

  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import SwiperTestimonial from "./SwiperTestimonial";

export default {
  components: {
    SwiperTestimonial,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },

      testimonials: [
        {
          name: "Nevine Acotanza",
          subtitle: "Rainbow-Themes",
          designation: "Chief Operating Officer",
          img: "https://inbio-react.netlify.app/static/229567c875e90b8f5241d1d6c857225f/cb807/final-home--1st.webp",
          skill: "Android App Development",
          rate: 5,
          date: "Upwork - Mar 4, 2015 - Aug 30, 2021",
        },
        {
          name: "Jone Duone Joe",
          subtitle: "Bound - Trolola",
          designation: "Operating Officer",
          img: "https://inbio-react.netlify.app/static/2fd26de92fcdc48f7eb014e1c27943e4/cb807/final-home--2nd.webp",
          skill: "Web App Development",
          rate: 4,
          date: "Upwork - Mar 4, 2016 - Aug 30, 2021",
        },
        {
          name: "Nevine Dhawan",
          subtitle: "Glassfisom",
          designation: "CEO Of Officer",
          img: "https://inbio-react.netlify.app/static/c8ecf8daa5a49503c12618f5781acb48/cb807/final-home--3rd.webp",
          skill: "Android App Design",
          rate: 5,
          date: "Fiver - Mar 4, 2015 - Aug 30, 2021",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
@import "@core/assets/scss/swiper";
</style>