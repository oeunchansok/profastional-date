<template>
  <div class="about">
    <div class="row">
      <div class="col-lg-5 ">
        <div class="profile p-4 rounded">
          <div class="profile-img w-100 rounded ">
            <b-img :src="require('../../../assets/images/logo/about.webp')" fluid alt="manLogo">
            </b-img>
          </div>
        </div>
      </div>
      <div class="col-lg-7 text">
        <div>
          <div class="text-left mb-4">
            <span class="subtitle text-uppercase">Visit my portfolio & Hire me</span>
            <h2 class="title mt-3 fw-bolder">About Me</h2>
          </div>
          <p class="discription">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum in eos
            saepe ipsa cupiditate accusantium voluptatibus quidem nam,
            reprehenderit, et necessitatibus adipisci labore sit veritatis vero
            tempore sequi at sed facere dolore. Quae obcaecati ius quasi doloribus
            illum minus fugit.
          </p>
          <p class="discription ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum in eos
            saepe ipsa cupiditate accusantium voluptatibus quidem nam,
            reprehenderit,
          </p>
          <a class="btn py-3 px-4" href="#">DOWNLOAD MY CV</a>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {};
</script>
  
<style lang="scss">
@import '../../../assets/scss/pages/about/about.scss';
</style>