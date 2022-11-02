<template>
  <div class="PortfoLioCard">

    <div class="row p-4 ">
      <div @click="detail(i);$bvModal.show('bv-modal-example')" class=" col-lg-4 col-sm-6" v-for="portfolio,i in portfolios" :key="i">
        <div class="profile mt-5">
          <div class="profile-img rounded">
            <b-img class="rounded" :src="portfolio.img" fluid alt="">
            </b-img>
          </div>
          <div class="skill d-flex justify-content-between">
            <div class="name">{{ portfolio.skill }}</div>
            <div class="like">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class=""><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              {{ portfolio.like }}
            </div>
          </div>
          <h4 class="title">
            <a>
              {{  portfolio.title  }}
            <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=""><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </a>
          </h4>
        </div>
      </div>
    </div>
    <div>

      <b-modal id="bv-modal-example" class="modal" hide-footer>
        <Detail @hideDetail="isDetail = false" :portfolios="portfolios" :index="index"></Detail>
      </b-modal>
    </div>
  </div>


</template>

<script>
import Detail from "./Detail.vue"
export default {
  components: {
    Detail,
  },
  props:['portfolios'],
  data(){
    return {
      isDetail : false,
      index : null,

    }
  },
  methods:{
    detail(i){
      this.isDetail = true;
      this.index = i;
    }
  }


};
</script>

<style>

</style>