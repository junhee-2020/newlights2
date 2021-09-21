<template>
    <div>
        <div class="main-view">        
            <div class="video-view">
                <div class="video-view-title">온라인 예배</div>
                <iframe src="https://www.youtube.com/embed/videoseries?list=PL03nHHWQGFZ-JazgO1Pygs863HMolWhWz" title="새빛교회 온라인예배" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  
            </div>                
            <div class="pic-view">
                <div class="pic-view-title">사역 사진</div>
                <div class="pic-view-img-list">
                    <div class="pic-view-img">
                        <router-link to="/GalleryView">
                            <img src="http://www.newlights.net/bbs/data/gallery_newlights/1627718947/IMG_4739.JPG" alt="gallery" />
                        </router-link>                          
                    </div>
                    <div class="pic-view-img">
                        <router-link to="/GalleryView">
                            <img src="http://www.newlights.net/bbs/data/gallery/photo36.jpg" alt="gallery" />
                        </router-link>            
                    </div>
                </div>
                <div class="pic-view-img-list">
                    <div class="pic-view-img">
                        <router-link to="/GalleryView">
                            <img src="http://www.newlights.net/bbs/data/gallery_chungnyun/1627718811/1.JPG" alt="gallery" />
                        </router-link>            
                    </div>              
                    <div class="pic-view-img">
                        <router-link to="/GalleryView">
                            <img src="http://www.newlights.net/bbs/data/gallery/2018/07/30/14369067735b5e9bf18d60f.JPG" alt="gallery" />
                        </router-link>            
                    </div>        
                </div>
            </div>
        </div>
        <div class="news">
            <div class="news-title">교회 소식</div>
                <div class="news-list">
                    <list-item></list-item>            
                </div>
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
 
    .main-view{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .video-view {
        width: 50vw;
        height: 50vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;            
    }
    
    .video-view-title{        
        width: 50vw;
        height: 4vh;       
        font-size: 1.8rem;
        font-weight: 600;        
        text-align: center;        
        background-color: #EFEFEF;        
        border-radius: 1rem; 
        margin-bottom: 1vh;     
        display: flex;
        justify-content: center;
        align-items: center;   
    }

    iframe {
        width: 50vw;
        height: 45vh;        
        border-radius: 1rem;        
    }

    .pic-view {
        width: 44vw;       
        height: 50vh; 
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;        
    }

    .pic-view-title {
        width: 44vw;
        height: 4vh;             
        font-size: 1.8rem;
        font-weight: 600;        
        text-align: center;        
        background-color: #EFEFEF;             
        border-radius: 1rem;      
        margin-bottom: 1vh; 
        display: flex;
        justify-content: center;
        align-items: center;         
    }

    .pic-view-img-list {
        width: 44vw;
        height: 22.5vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .pic-view-img {
        width: 21vw;
        height: 21vh;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 0.5vw;
    }

    .pic-view-img img {
        width: 21vw;
        height: 21vh;
        border-radius: 1rem;
        margin: 0.5vw;
    }

    .pic-view-img img:hover {
        opacity: 0.9;
    }
    
    .news {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 1rem 0;
    }
    
    .news-title {
        width: 94vw;   
        height: 4vh;    
        font-size: 1.8rem;
        font-weight: 600;        
        text-align: center;
        background-color: #EFEFEF;
        border-radius: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .news-list {
        width: 100vw;
    }
</style>