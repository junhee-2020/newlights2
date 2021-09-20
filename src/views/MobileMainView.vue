<template>
    <div>
        <div class="video-view-title">온라인 예배</div>
        <div class="video-view">
            <iframe src="https://www.youtube.com/embed/videoseries?list=PL03nHHWQGFZ-JazgO1Pygs863HMolWhWz" title="새빛교회 온라인예배" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  
        </div>        
        <div class="pic-view-title">사역 사진</div>
        <div class="pic-view">                          
            <router-link to="/GalleryView">
                <img src="http://www.newlights.net/bbs/data/gallery_newlights/1627718947/IMG_4739.JPG" alt="gallery" />
            </router-link>                          
            <router-link to="/GalleryView">
                <img src="http://www.newlights.net/bbs/data/gallery/photo36.jpg" alt="gallery" />
            </router-link>                                          
            <router-link to="/GalleryView">
                <img src="http://www.newlights.net/bbs/data/gallery_chungnyun/1627718811/1.JPG" alt="gallery" />
            </router-link>                          
            <router-link to="/GalleryView">
                <img src="http://www.newlights.net/bbs/data/gallery/2018/07/30/14369067735b5e9bf18d60f.JPG" alt="gallery" />
            </router-link>            
        </div>   
        <div class="news-title">교회 소식</div>    
        <div class="news">
            <list-item></list-item>
        </div>    
    </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import ListMixin from '../mixins/ListMixin.js';

export default {
  components: {
    ListItem
  },
  mixins: [ListMixin]
};
</script>

<style scoped>
    iframe {
        width: 90vw;
        height: 50vh;
    }

    .video-view {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .video-view-title{
        margin: 1rem;        
        font-size: 2rem;
        font-weight: 600;
        text-decoration: underline;
        text-align: center;
    }

    .pic-view-title {        
        margin: 1rem;        
        font-size: 2rem;
        font-weight: 600;
        text-decoration: underline;
        text-align: center;
    }

    .pic-view {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;        
    }

    .pic-view img {
        margin: 0.1rem;
        width: 22vw;
        height: 10vh;
        border-radius: 1rem;
    }

    .pic-view img:hover {
        opacity: 0.9;
    }

    .news-title {
        margin: 1rem;        
        font-size: 2rem;
        font-weight: 600;
        text-decoration: underline;
        text-align: center;
    }
</style>