<template>
    <div class="detail-view position-relative row m-0">
        <div class="col-lg-6 profile-detail d-flex align-items-center">
            <div class="profile-img rounded m-0">
                <b-img class="rounded" :src="portfolio.img" fluid >
                </b-img>
            </div> 
        </div>
        <div class="col-lg-6  py-4">
            <div class="text">
                <div class="section-title text-left mb-4 mt-3">
                    <span class="featured mb-3">Featured - {{ portfolio.skill }}</span>
                    <h3 class="title mb-3">{{ portfolio.title }}</h3>
                </div>
                <p class="discription">
                    Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.
                </p>
                <p class="discription">
                    Dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!
                </p>
                <a class="btn mt-4 " style="margin-right: 2rem;" href="#">LIKE THIS</a>
                <a class="btn mt-4" href="#">VIEW PROJECT<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></a>
            </div>
        </div>
        <!-- <a class="btn btn-circle rounded-circle p-0 position-absolute top-0 end-0 m-3 d-flex justify-content-center align-items-center"  @click="$emit('hideDetail')" href="#Portfolio"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a> -->
    </div>
</template>

<script>
export default {
    emits: ['hideDetail'],
    props: ['portfolios', 'index'],
    data(){
        return{
            portfolio: this.portfolios[this.index],
        }
    }
};
</script>

<style>
</style>