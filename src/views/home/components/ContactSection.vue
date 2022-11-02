<template>
    <section class="contact-me ">
        <hr>
            <div class="main-full ">
                <div class="subtitle  mt-5 mb-5 text-center">
                    <span >CONTACT</span>
                    <h2 class="title">Contact With Me</h2>
                </div>
                <div class="row cont-me d-flex">
                    <div class="col-lg-6 col-md-12 imf">
                        <div class="main-conta p-4">
                            <div class="imformation ">
                                <img  class="img-fluid" src="https://inbio-react.netlify.app/static/5930a183f9be0c913e9d25b1318416f9/3a710/contact1.webp" alt="">
                            </div>
                            <div class="title-area p-4">
                                <h4>Nevine Acotanza</h4>
                                <span class="job">Chief Operating Officer</span>
                                <div class="description mt-3">
                                    <p>I am available for freelance work. Connect with me via and call in to my account.</p>
                                    <span>
                                        <a href="">Phone: + 01234567890</a> <br>
                                        <a href="">Email: Admin@example.com</a>
                                    </span>
                                    <div class="name mt-4">FIND WITH ME</div>
                                </div>
                            </div>
                        </div>
                        <div class="social-area">
                            <ul class="social-icone social-share d-flex liststyle">
                                <div class="social">
                                    <div class="social-share d-flex ">
                                        <div class="social-share-icon">
                                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=""><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                            </a>
                                        </div>
                                        <div class="social-share-icon">
                                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=""><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                            </a>
                                        </div>
                                        <div class="social-share-icon">
                                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=""><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>               
                            </ul>
                        </div>         
                    </div>
                    <div class="col-lg-6 col-md-12 imfor py-3">
                        <form class="row w-100 m-auto">
                            <div class="col-md-6">
                                <label for="inputEmail4" class="form-label">YOUR NAME</label>
                                <input type="text" class="form-control" id="inputEmail4">
                            </div>
                            <div class="col-md-6 ">
                                <label for="inputPassword4" class="form-label">PHONE NUMBER</label>
                                <input type="text" class="form-control" id="inputPassword4">
                            </div>
                            <div class="col-12">
                                <label for="inputAddress" class="form-label">EMAIL</label>
                                <input type="email" class="form-control" id="inputAddress">
                            </div>
                            <div class="col-12">
                                <label for="inputAddress" class="form-label">SUBJECT</label>
                                <input type="text" class="form-control" id="inputAddress">
                            </div>
                            <div class="col-12">
                                <label for="lname" class="form-label">YOUR MESSAGE</label>
                                <textarea id="w3review" name="w3review"></textarea>  
                            </div>       
                            <div class="social-share-icon ">
                                <a href="" target="_blank" rel="noopener noreferrer">SEND MESSAGE->
                                </a>
                            </div> 
                        </form>
                    </div>
                </div>
        </div>
    </section>
</template>
<script>
export default {

}
</script>

<style lang="scss"  scoped>
  @import '@core/assets/scss/swiper';
  @import '../../../assets/scss/pages/home/contact';

</style>