<template>
  <div class="row">
    <div class="col-lg-5  mt-4 ">
      <div class="profile rounded p-4">
          <div class="profile-img rounded">
            <b-img :src="testimonial.img" fluid>
            </b-img>
          </div>
          <div>
            <span class="subtitle mt-4">{{ testimonial.subtitle }}</span>
            <h3 class="title">{{ testimonial.name }}</h3>
            <span class="designation">{{ testimonial.designation }}</span>
          </div>
        </div>
    </div>
    <div class="col-lg-7 mt-4">
        <div class="quote">
          <img src="@/assets/images/logo/quote.webp"/>
        </div>
        <div class="card-description position-relative rounded p-4">
          <div class="connect position-absolute"></div>
          <div class="d-flex rating rounded">
            <div class="m-1" v-for="i in 5" :key="i"> 
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjODdmODBhNy0wMzU3LWRlNGMtOTI5Yy1kZDcyNDQ4NmJhMmUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjVFMDFEMUQ3MkM4MTFFQjhCODlCNUQ0QkE3RDREMEUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjVFMDFEMUM3MkM4MTFFQjhCODlCNUQ0QkE3RDREMEUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Mjg4NmEzMDktYTk0Ny1lZTQ2LWE0YjktMTkxYzVmOWRlZWEzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmM4N2Y4MGE3LTAzNTctZGU0Yy05MjljLWRkNzI0NDg2YmEyZSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pvh9sZsAAACWSURBVHjaYmBAA/9XS80C4hno4oxoimSB1F0oV5kx9NljmBwTmsZKIGaF4koUE4GmTAfSZkCsBsQ8aBq/APEtID7HArICiI0YsAMeqNw7kNUBQLyfATcAyfkzQj3BBaSeAzEfmqJPQCwJ9NQ3mGf+YXEfzOp/yL7WQGLfg2KYvAayQiEgfgvEeUCsCcV5UDFBkAKAAAMAbGIhFGqpTJsAAAAASUVORK5CYII="
                alt="rating"
              />
            </div>
          </div>
          <div class="title-area">
            <h3 class="title">{{ testimonial.skill }}</h3>
            <span class="date">{{ testimonial.date }}</span>
          </div>
          <hr />
          <p class="discription">
            Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor
            aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in,
            lobortis mauris hendrerit ante. Ut tincidunt est ac dolor aliquam
            sodales phasellus smauris .
          </p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ["testimonial"],
};
</script>

<style>
</style>