<template>
    <div>
        <div v-if="isMobile">            
            <div class="video-view-title">온라인 예배</div>
            <div class="video-view">
                <iframe src="https://www.youtube.com/embed/videoseries?list=PL03nHHWQGFZ-JazgO1Pygs863HMolWhWz" title="새빛교회 온라인예배" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  
            </div>        
            <div class="pic-view-title">사역 사진</div>
            <div class="pic-view">                          
                <router-link to="/PictureView/a">
                    <img src="http://www.newlights.net/bbs/data/gallery_newlights/1627718947/IMG_4739.JPG" alt="gallery" />
                </router-link>                          
                <router-link to="/PictureView/b">
                    <img src="http://www.newlights.net/bbs/data/gallery/photo36.jpg" alt="gallery" />
                </router-link>                                          
                <router-link to="/PictureView/c">
                    <img src="http://www.newlights.net/bbs/data/gallery_chungnyun/1627718811/1.JPG" alt="gallery" />
                </router-link>                          
                <router-link to="/PictureView/d">
                    <img src="http://www.newlights.net/bbs/data/gallery/2018/07/30/14369067735b5e9bf18d60f.JPG" alt="gallery" />
                </router-link>            
            </div>         
            <div class="list-item">
                <div class="news-title">
                    예배시간
                </div>
                <div class="news-contents">
                    <div>
                        <ul class="item-list">
                            <li class="post">
                                <!-- 인덱스 영역 -->
                                <div class="key">
                                    {{ 1 }}
                                </div>
                                <!-- 기타 정보 영역 -->
                                <div>
                                    <!-- 타이틀 영역 -->
                                    <p class="item-title">
                                        유초등부 예배
                                    </p>
                                    <div>    
                                        <small class="sub-text">
                                            <span>일시 : 주일 아침 9시</span>                            
                                        </small>                      
                                    </div>
                                    <div>    
                                        <small class="sub-text">
                                            <span>장소 : 새빛교회 본당</span>                            
                                        </small>                      
                                    </div>
                                </div>
                            </li>
                            <li class="post">
                                <!-- 인덱스 영역 -->
                                <div class="key">
                                    {{ 2 }}
                                </div>
                                <!-- 기타 정보 영역 -->
                                <div>
                                    <!-- 타이틀 영역 -->
                                    <p class="item-title">
                                        주일 낮 예배
                                    </p>
                                    <div>    
                                        <small class="sub-text">
                                            <span>일시 : 주일 아침 11시</span>                            
                                        </small>                      
                                    </div>
                                    <div>    
                                        <small class="sub-text">
                                            <span>장소 : 새빛교회 본당</span>                            
                                        </small>                      
                                    </div>
                                </div>
                            </li>
                            <li class="post">
                                <!-- 인덱스 영역 -->
                                <div class="key">
                                    {{ 3 }}
                                </div>
                                <!-- 기타 정보 영역 -->
                                <div>
                                    <!-- 타이틀 영역 -->
                                    <p class="item-title">
                                        젊은 예배
                                    </p>
                                    <div>    
                                        <small class="sub-text">
                                            <span>일시 : 주일 낮 2시</span>                            
                                        </small>                      
                                    </div>
                                    <div>    
                                        <small class="sub-text">
                                            <span>장소 : 새빛교회 본당</span>                            
                                        </small>                      
                                    </div>
                                </div>
                            </li>
                            <li class="post">
                                <!-- 인덱스 영역 -->
                                <div class="key">
                                    {{ 4 }}
                                </div>
                                <!-- 기타 정보 영역 -->
                                <div>
                                    <!-- 타이틀 영역 -->
                                    <p class="item-title">
                                        중고청 젊은 예배
                                    </p>
                                    <div>    
                                        <small class="sub-text">
                                            <span>일시 : 주일 낮 4시</span>                            
                                        </small>                      
                                    </div>
                                    <div>    
                                        <small class="sub-text">
                                            <span>장소 : 새빛교회 본당</span>                            
                                        </small>                      
                                    </div>
                                </div>
                            </li>
                            <li class="post-center">
                                <!-- 기타 정보 영역 -->
                                <div>
                                    <!-- 타이틀 영역 -->
                                    <p class="item-title2">
                                        * 예배 시간 변경 안내
                                    </p>
                                    <div>    
                                        <small class="sub-text-small">
                                            <span>코로나19로 오프라인 예배는 정부 규정에 따라 인원수에 맞춰 드려집니다.</span>                            
                                        </small>                      
                                    </div>
                                    <div>    
                                        <small class="sub-text-underline">
                                            <span>온라인 예배 : 유튜브 "새빛 교회" 검색</span>                            
                                        </small>                      
                                    </div>
                                    <div>    
                                        <small class="sub-text-small">
                                            <span>(어린이 예배 아침 9시, 대예배 오전 11시 실시간 온라인 예배)</span>                            
                                        </small>                      
                                    </div>
                                    <div>    
                                        <small class="sub-text2">
                                            <span>당분간 새벽 예배, 수요 예배는 집에서 각자 드리시기 바랍니다.</span>                            
                                        </small>                      
                                    </div>
                                </div>
                            </li>
                        </ul>        
                    </div>
                </div>
            </div>            
            <div class="list-item">
                <div class="news-title">
                    오시는길
                </div>
                <div class="news-contents">
                    <div>
                        <ul class="item-list">
                            <li class="post">
                                <!-- 인덱스 영역 -->
                                <div class="key">
                                    {{ 1 }}
                                </div>
                                <!-- 기타 정보 영역 -->
                                <div>
                                    <!-- 타이틀 영역 -->
                                    <p class="item-title">
                                        교회 주소
                                    </p>
                                    <div>    
                                        <small class="sub-text">
                                            <span>경기 광명시 하안로 258 경향빌딩 4층 새빛교회</span>                            
                                        </small>                      
                                    </div>
                                    <div>    
                                        <small class="sub-text">
                                            <span>[인근 지하철: 독산역(1호선), 철산역(7호선)]</span>                            
                                        </small>                      
                                    </div>
                                </div>
                            </li>
                        </ul>        
                    </div>
                </div>
            </div>
            <div class="map-view">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12668.218001891904!2d126.8827874!3d37.4594351!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x22fe938e07ee8ec!2z7IOI67mb6rWQ7ZqM!5e0!3m2!1sko!2skr!4v1632243853234!5m2!1sko!2skr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>      
        </div>
        <div v-else>   
            <div class="main-view">
                <div class="video-view">
                    <div class="video-view-title">온라인 예배</div>
                    <iframe src="https://www.youtube.com/embed/videoseries?list=PL03nHHWQGFZ-JazgO1Pygs863HMolWhWz" title="새빛교회 온라인예배" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  
                </div>                
                <div class="pic-view">
                    <div class="pic-view-title">사역 사진</div>
                    <div class="pic-view-img-list">
                        <div class="pic-view-img">
                            <router-link to="/PictureView/a">
                                <img src="http://www.newlights.net/bbs/data/gallery_newlights/1627718947/IMG_4739.JPG" alt="gallery" />
                            </router-link>                          
                        </div>
                        <div class="pic-view-img">
                            <router-link to="/PictureView/b">
                                <img src="http://www.newlights.net/bbs/data/gallery/photo36.jpg" alt="gallery" />
                            </router-link>            
                        </div>
                    </div>
                    <div class="pic-view-img-list">
                        <div class="pic-view-img">
                            <router-link to="/PictureView/c">
                                <img src="http://www.newlights.net/bbs/data/gallery_chungnyun/1627718811/1.JPG" alt="gallery" />
                            </router-link>            
                        </div>              
                        <div class="pic-view-img">
                            <router-link to="/PictureView/d">
                                <img src="http://www.newlights.net/bbs/data/gallery/2018/07/30/14369067735b5e9bf18d60f.JPG" alt="gallery" />
                            </router-link>            
                        </div>        
                    </div>
                </div>
            </div>
            <div class="main-view">
                <div class="list-item">
                    <div class="news-title">
                        예배시간
                    </div>
                    <div class="news-contents">
                        <div>
                            <ul class="item-list">
                                <li class="post">
                                    <!-- 인덱스 영역 -->
                                    <div class="key">
                                        {{ 1 }}
                                    </div>
                                    <!-- 기타 정보 영역 -->
                                    <div>
                                        <!-- 타이틀 영역 -->
                                        <p class="item-title">
                                            유초등부 예배
                                        </p>
                                        <div>    
                                            <small class="sub-text">
                                                <span>일시 : 주일 아침 9시</span>                            
                                            </small>                      
                                        </div>
                                        <div>    
                                            <small class="sub-text">
                                                <span>장소 : 새빛교회 본당</span>                            
                                            </small>                      
                                        </div>
                                    </div>
                                </li>
                                <li class="post">
                                    <!-- 인덱스 영역 -->
                                    <div class="key">
                                        {{ 2 }}
                                    </div>
                                    <!-- 기타 정보 영역 -->
                                    <div>
                                        <!-- 타이틀 영역 -->
                                        <p class="item-title">
                                            주일 낮 예배
                                        </p>
                                        <div>    
                                            <small class="sub-text">
                                                <span>일시 : 주일 아침 11시</span>                            
                                            </small>                      
                                        </div>
                                        <div>    
                                            <small class="sub-text">
                                                <span>장소 : 새빛교회 본당</span>                            
                                            </small>                      
                                        </div>
                                    </div>
                                </li>
                                <li class="post">
                                    <!-- 인덱스 영역 -->
                                    <div class="key">
                                        {{ 3 }}
                                    </div>
                                    <!-- 기타 정보 영역 -->
                                    <div>
                                        <!-- 타이틀 영역 -->
                                        <p class="item-title">
                                            젊은 예배
                                        </p>
                                        <div>    
                                            <small class="sub-text">
                                                <span>일시 : 주일 낮 2시</span>                            
                                            </small>                      
                                        </div>
                                        <div>    
                                            <small class="sub-text">
                                                <span>장소 : 새빛교회 본당</span>                            
                                            </small>                      
                                        </div>
                                    </div>
                                </li>
                                <li class="post">
                                    <!-- 인덱스 영역 -->
                                    <div class="key">
                                        {{ 4 }}
                                    </div>
                                    <!-- 기타 정보 영역 -->
                                    <div>
                                        <!-- 타이틀 영역 -->
                                        <p class="item-title">
                                            유초등부 예배
                                        </p>
                                        <div>    
                                            <small class="sub-text">
                                                <span>일시 : 주일 낮 4시</span>                            
                                            </small>                      
                                        </div>
                                        <div>    
                                            <small class="sub-text">
                                                <span>장소 : 새빛교회 본당</span>                            
                                            </small>                      
                                        </div>
                                    </div>
                                </li>                                
                            </ul>        
                        </div>
                    </div>
                </div>            
                <div class="list-item">
                    <div class="news-title">
                        오시는길
                    </div>
                    <div class="news-contents">
                        <div>
                            <ul class="item-list">
                                <li class="post">
                                    <!-- 인덱스 영역 -->
                                    <div class="key">
                                        {{ 1 }}
                                    </div>
                                    <!-- 기타 정보 영역 -->
                                    <div>
                                        <!-- 타이틀 영역 -->
                                        <p class="item-title">
                                            교회 이름
                                        </p>
                                        <div>    
                                            <small class="sub-text">
                                                <span>새빛교회</span>                            
                                            </small>                      
                                        </div>
                                    </div>
                                </li>
                                <li class="post">
                                    <!-- 인덱스 영역 -->
                                    <div class="key">
                                        {{ 2 }}
                                    </div>
                                    <!-- 기타 정보 영역 -->
                                    <div>
                                        <!-- 타이틀 영역 -->
                                        <p class="item-title">
                                            전화 번호
                                        </p>
                                        <div>    
                                            <small class="sub-text">
                                                <span>02-893-2017</span>                            
                                            </small>                      
                                        </div>
                                    </div>
                                </li>
                                <li class="post">
                                    <!-- 인덱스 영역 -->
                                    <div class="key">
                                        {{ 3 }}
                                    </div>
                                    <!-- 기타 정보 영역 -->
                                    <div>
                                        <!-- 타이틀 영역 -->
                                        <p class="item-title">
                                            교회 주소
                                        </p>
                                        <div>    
                                            <small class="sub-text">
                                                <span>경기 광명시 하안로 258 경향빌딩 4층 새빛교회</span>                            
                                            </small>                      
                                        </div>
                                        <div>    
                                            <small class="sub-text">
                                                <span>[인근 지하철: 독산역(1호선), 철산역(7호선)]</span>                            
                                            </small>                      
                                        </div>
                                    </div>
                                </li>
                                <li class="post">
                                    <!-- 인덱스 영역 -->
                                    <div class="key">
                                        {{ 4 }}
                                    </div>
                                    <!-- 기타 정보 영역 -->
                                    <div>
                                        <!-- 타이틀 영역 -->
                                        <p class="item-title">
                                            주차 정보
                                        </p>
                                        <div>    
                                            <small class="sub-text">
                                                <span>상가 내 작은주차장 (5대)</span>                            
                                            </small>                      
                                        </div>
                                    </div>
                                </li>
                            </ul>        
                        </div>
                    </div>
                </div>            
            </div>
            <div class="map-view">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12668.218001891904!2d126.8827874!3d37.4594351!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x22fe938e07ee8ec!2z7IOI67mb6rWQ7ZqM!5e0!3m2!1sko!2skr!4v1632243853234!5m2!1sko!2skr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
            <div class="list-item">                    
                <div class="news-contents">
                    <div>
                        <ul class="last-item-list">
                            <li class="post-center">
                                <!-- 기타 정보 영역 -->
                                <div>
                                    <!-- 타이틀 영역 -->
                                    <p class="item-title2">
                                        * 예배 시간 변경 안내
                                    </p>
                                    <div>    
                                        <small class="sub-text2">
                                            <span>코로나19로 오프라인 예배는 정부 규정에 따라 인원수에 맞춰 드려집니다.</span>                            
                                        </small>                      
                                    </div>
                                    <div>    
                                        <small class="sub-text-underline">
                                            <span>온라인 예배 : 유튜브 "새빛 교회" 검색</span>                            
                                        </small>                      
                                    </div>
                                    <div>    
                                        <small class="sub-text-small">
                                            <span>(어린이 예배 아침 9시, 대예배 오전 11시 실시간 온라인 예배)</span>                            
                                        </small>                      
                                    </div>
                                    <div>    
                                        <small class="sub-text2">
                                            <span>당분간 새벽 예배, 수요 예배는 집에서 각자 드리시기 바랍니다.</span>                            
                                        </small>                      
                                    </div>
                                </div>
                            </li>
                        </ul>        
                    </div>
                </div>
            </div>
        </div>  
    </div>          
</template>

<script>
export default {
    props: {
        isMobile: {
            type: Boolean,
            required: true
        }
    },
        
};
</script>

<style scoped>

@media (max-width: 1279px) {
    iframe {
        width: 90vw;
        height: 50vh;
        border-radius: 1rem;
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
        flex-direction: column;
        align-items: center;
        text-align: center;        
    }

    .pic-view img {
        margin: 0.1rem;
        width: 90vw;
        height: 30vh;
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

    .map-view {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .item-list {    
        width: 100vw;
        margin: 0;
        padding: 0;
    }

    .post {
        list-style: none;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #eee;
        margin: 1rem 0;
        padding: 1rem 0;
    }

    .post:hover {
        background-color: #eee;    
    }

    .post-center {
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #eee;
        margin: 1rem 0;
        padding: 1rem 0;
    }
    
    .post-center:hover {
        background-color: #eee;    
    }

    .key{
        width: 80px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #8a84ce;
        font-size: 1.5rem;
    }

    .item-title {
        margin: 0.3rem 0;
        text-decoration: underline;
        font-size: 1.5rem;
        font-weight: 600;
    }

    .item-title2 {
        margin: 0.3rem 0;
        text-decoration: underline;
        font-size: 1.5rem;
        font-weight: 600;
        display: flex;
        justify-content: center;
    }

    .sub-text {
        color: #828282;
        font-size: 1rem;
    }

    .sub-text2 {
        color: #828282;
        font-size: 0.9rem;
    }

    .sub-text-underline {
        color: #828282;
        font-size: 0.9rem;
        text-decoration: underline;
    }

    .sub-text-small {
        color: #828282;
        font-size: 0.8rem;
    }

 }

 @media (min-width: 1280px) {    
    .main-view{
        display: flex;
        justify-content: center;
        align-items: flex-start;
    }

    .video-view {
        width: 45vw;
        height: 50vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;            
    }
    
    .video-view-title{        
        width: 45vw;
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
        width: 45vw;
        height: 45vh;        
        border-radius: 1rem;        
    }

    .pic-view {
        width: 45vw;       
        height: 50vh; 
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;        
    }

    .pic-view-title {
        width: 45vw;
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
    
    .list-item {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 1rem 0;
    }
    
    .news-title {
        width: 45vw;
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

    .map-view {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .last-item-list {    
        width: 89vw;
        margin: 0;
        padding: 0;
    }

    .item-list {    
        width: 44vw;
        margin: 0;
        padding: 0;
    }

    .post {
        list-style: none;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #eee;
        margin: 1rem 0;
        padding: 1rem 0;
    }

    .post:hover {
        background-color: #eee;    
    }

    .post-center {
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #eee;
        margin: 1rem 0;
        padding: 1rem 0;
    }
    
    .post-center:hover {
        background-color: #eee;    
    }

    .key{
        width: 80px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #8a84ce;
        font-size: 1.5rem;
    }

    .item-title {
        margin: 0.3rem 0;
        text-decoration: underline;
        font-size: 1.5rem;
        font-weight: 600;
    }

    .item-title2 {
        margin: 0.3rem 0;
        text-decoration: underline;
        font-size: 1.5rem;
        font-weight: 600;
        display: flex;
        justify-content: center;
    }

    .sub-text {
        color: #828282;
        font-size: 1rem;
    }

    .sub-text2 {
        color: #828282;
        font-size: 1rem;
    }

    .sub-text-underline {
        color: #828282;
        font-size: 1rem;
        text-decoration: underline;
    }

    .sub-text-small {
        color: #828282;
        font-size: 1rem;
    }
 }
 
</style>