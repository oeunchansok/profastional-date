<template>
  <div id="header">
    <section class="header-group">
        <b-navbar toggleable="lg">
          <div class="logo">
            <b-link href="Home">
              <b-img
                :src="require('@/assets/images/logo/man.webp')"
                fluid
                alt="manLogo"
              >
              </b-img>
            </b-link>
          </div>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" class="justify-content-end" is-nav>
            <b-navbar-nav class="text nav">
              <b-nav-item :style=" firstOpen ? 'border-bottom: 1.5px solid $primary;' : '' " @click="setActive('Home')" :class="{ active: isActive('Home') }" href="#Home">HOME</b-nav-item>
              <b-nav-item @click="setActive('about')" :class="{ active: isActive('about') }" href="#About">ABOUT</b-nav-item>
              <b-nav-item @click="setActive('Portfolio')" :class="{ active: isActive('Portfolio') }" href="#Portfolio">PORTFOLIO</b-nav-item>
              <b-nav-item @click="setActive('Testmonial')" :class="{ active: isActive('Testmonial') }" href="#Testmonial">TESTMONIAL</b-nav-item>
              <b-nav-item @click="setActive('Award')" :class="{ active: isActive('Award') }" href="#Award">AWARD</b-nav-item>
              <b-nav-item @click="setActive('Blog')" :class="{ active: isActive('Blog') }" href="#Blog">BLOG</b-nav-item>
              <b-nav-item class="btn-contact right-menu" href="#Contact"> Contact Me</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
        <div class="backto-top rounded-circle position-absolute cursor-pointer ">
          <a class="d-flex justify-content-center align-items-center" @click="setActive('Home')" :class="{ active: isActive('Home') }" href="#Home">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
          </a>
        </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return { activeItem: 'Home' , firstOpen : true}
  },
  methods: {
    isActive (menuItem) {
      return this.activeItem === menuItem
      
    },
    setActive (menuItem) {
      this.firstOpen = false
      this.activeItem = menuItem 
    }
  },

}
</script>
<style lang="scss">
@import "../../assets/scss/layout/header";

</style>
