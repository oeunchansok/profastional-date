<template>
  <div class="portfolio">
    <div class="section-title text-center">
      <span class="subtitle">Visit my portfolio and keep your feedback</span>
      <h2 class="title">My Portfolio</h2>
      <PortfoLioCard :portfolios="portfolios"></PortfoLioCard>
    </div>
  </div>
</template>

<script>
import PortfoLioCard from "./PortfoLioCard";
export default {
  components: {
    PortfoLioCard,
  },
  data() {
    return {
      portfolios: [
        {
          'img': "https://inbio-react.netlify.app/static/52fbdba80fc6c863953bbe0adbfdb8a6/8f351/portfolio-10.webp",
          skill: "development",
          like: "600",
          title: "The services provide for design",
        },
        {
          'img': "https://inbio-react.netlify.app/static/43214fe788f2f41e14c5c53a8ef55019/9102e/portfolio-11.webp",
          skill: "Application",
          like: "750",
          title: "Mobile app landing design & app maintain",
        },
        {
          'img': "https://inbio-react.netlify.app/static/a5413e80947039d673b5ea1515dd9a77/9102e/portfolio-12.webp",
          skill: "Photoshop",
          like: "630",
          title: "Logo design creativity & Application",
        },
        {
          'img': "https://inbio-react.netlify.app/static/91f13bb5e16a3bd6f783b5e2fc585411/9102e/portfolio-14.webp",
          skill: "Figma",
          like: "360",
          title: "Mobile app landing design & Services",
        },
        {
          'img': "https://inbio-react.netlify.app/static/7f1f99606e2e4e7f23e9d0e9f51fc8e2/9102e/portfolio-13.webp",
          skill: "Web Design",
          like: "600",
          title: "Design for tecnology & services",
        },
        {
          'img': "https://inbio-react.netlify.app/static/901b091ae1329570e9b06dda48884067/9102e/portfolio-15.webp",
          skill: "Web Design",
          like: "600",
          title: "App for tecnology & services",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../../../assets/scss/pages/portfolio/portfolio.scss";
</style>