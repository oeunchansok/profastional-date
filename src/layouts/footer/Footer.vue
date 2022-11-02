<template>
  <section class="footer overflow-hidden">
    <hr>
    <div class="footer-content">
      <div class=" text-center text-md-start mt-5" >
        <div class="row mt-4 py-4 footer-1">

          <div class="col col-md-6 col-sm-6 col-lg-2 col-xl-2 mx-auto mb-4 p-5">
            <div class="logo">
              <img src="@/assets/images/logo/man.webp" alt="">
            </div>

            <div class="social">
              <ul class="social-share d-flex ">
                <li class="social-share-icon">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=""><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                </li>

                <li class="social-share-icon">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=""><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                </li>

                <li class="social-share-icon">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=""><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-md-6 col-sm-6 col-lg-2 col-xl-2 mx-auto mb-4 p-5 ">
            <h6 class="text-uppercase fw-bold mb-4 title">PRODUCT</h6>
            <p>
              <a href="#!">Database</a>
            </p>
            <p>
              <a href="#!">Authentication</a>
            </p>
            <p>
              <a href="#!">Storage</a>
            </p>
            <p>
              <a href="#!">Support</a>
            </p>
            <p>
              <a href="#!">Pricing</a>
            </p>
          </div>

          <div class="col-md-6 col-sm-6 col-lg-2 col-xl-2 mx-auto mb-4 p-5">
            <h6 class="text-uppercase fw-bold mb-4 title">RESOURCES</h6>
            <p>
              <a href="#!">Authentication</a>
            </p>
            <p>
              <a href="#!">System Status</a>
            </p>
            <p>
              <a href="#!">Terms of service</a>
            </p>
            <p>
              <a href="#!">Pricing</a>
            </p>
            <p>
              <a href="#!">over right</a>
            </p>
          </div>

          <div class="col-md-6 col-sm-6 col-lg-2 col-xl-2 mx-auto mb-4 p-5">
            <h6 class="text-uppercase fw-bold mb-4 title">DEVELOPERS</h6>
            <p>
              <a href="#!">Documentation</a>
            </p>
            <p>
              <a href="#!">Authentication</a>
            </p>
            <p>
              <a href="#!">API Reference</a>
            </p>
            <p>
              <a href="#!">Support</a>
            </p>
            <p>
              <a href="#!">Open Source</a>
            </p>
          </div>
        </div>
        <hr>
          <!-- Copyright -->
          <div class="text-center p-5 copy-right">
            © 2022. All rights reserved by
            <a class="fw-bold" href="https://themeforest.net/user/rainbow-themes/portfolio" target="_blank">Rainbow-Themes.</a>
          </div>
          <!-- Copyright -->
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Footer",
  components: {},
  data() {
    return {
      serviceBackground: require("@/assets/images/cta_bg1.png"),
      visible: false,
    };
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/layout/footer";
</style>
