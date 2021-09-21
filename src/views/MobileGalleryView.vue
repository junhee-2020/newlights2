<template>
  <div>
    <div class="gallery-title">[우리는 새빛]</div>
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div
      class="image lazy"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"      
      :style="{ backgroundImage: 'url(' + image + ')', width: '45vw', height: '45vw' }"      
    ></div>
  </div>
</template>
 
<script>
  import VueGallery from 'vue-gallery';
  import bus from '../utils/bus.js';
  import {images} from './galleryView/imageLink.js';

  export default {
    data: function () {
      return {
        images,
        index: null        
      };
    }, 
    components: {
      'gallery': VueGallery
    },    
    mounted() {    
      bus.$emit('end:spinner');
      this.initImage();    
    },
    methods: {
      initImage() {
        let lazyloadImages;

        if ("IntersectionObserver" in window) {
          this.initIntersectionObserver(lazyloadImages);
        } else {
          this.initUnIntersectionObserver(lazyloadImages);
        }

      },
      initIntersectionObserver(lazyloadImages) {
        lazyloadImages = document.querySelectorAll(".lazy");
        
        const imageObserver = new IntersectionObserver(function(entries) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              const image = entry.target;
              image.classList.remove("lazy");
              imageObserver.unobserve(image);
            }
          });
        });
    
        lazyloadImages.forEach(function(image) {
          imageObserver.observe(image);
        });
      },
      initUnIntersectionObserver(lazyloadImages) {
        let lazyloadThrottleTimeout;
        lazyloadImages = document.querySelectorAll(".lazy");
        
        function lazyload () {
          if(lazyloadThrottleTimeout) {
            clearTimeout(lazyloadThrottleTimeout);
          }    
    
          lazyloadThrottleTimeout = setTimeout(function() {
            const scrollTop = window.pageYOffset;
            lazyloadImages.forEach(function(img) {
                if(img.offsetTop < (window.innerHeight + scrollTop)) {
                  img.src = img.dataset.src;
                  img.classList.remove('lazy');
                }
            });
            if(lazyloadImages.length == 0) { 
              document.removeEventListener("scroll", lazyload);
              window.removeEventListener("resize", lazyload);
              window.removeEventListener("orientationChange", lazyload);
            }
          }, 20);
        }
    
        document.addEventListener("scroll", lazyload);
        window.addEventListener("resize", lazyload);
        window.addEventListener("orientationChange", lazyload);
    }
  }
}
</script> 

<style scoped>
  .gallery-title{
    margin: 1rem;        
    font-size: 2rem;
    font-weight: 600;
    text-decoration: underline;    
  }

  .image {
    float: left;    
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px; 
    border-radius: 1rem;   
    transition: .2s ease-in;   
  }

  .lazy {
     background-image: none !important;    
     background-color: #F1F1FA;     
  }

  .lazy::after {
    content: "Loading...💕";
    font-size: 2rem;
    color: #34495e;
  }
</style> 