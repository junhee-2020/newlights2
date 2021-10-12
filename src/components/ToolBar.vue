<template>
    <div class="header">
        <div class="outer-side">
            <div class="inner-side">
                <router-link class="toolbar-menu" to="/">
                    <img class="logo-img" src="../assets/logo_purple.png" alt="newlights logo">
                </router-link>
                <router-link class="toolbar-menu" to="/AboutChurchView">예배시간</router-link>                            
                <router-link class="toolbar-menu" to="/WayToComeView">오시는길</router-link>                
                <router-link class="toolbar-menu" to="/NewLightNewsView">교회소식</router-link>                
                <router-link class="toolbar-menu" to="/WorshipGuideView">제자훈련</router-link>
                <router-link class="toolbar-menu" to="/GalleryView">새빛사진</router-link>                                        
                <a class="toolbar-menu" href="https://www.youtube.com/channel/UC_8Ly-tOUYDeuL85hB6TpEQ" target="_blank">온라인 예배</a>                
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
	
.logo-img {    
    height: 13vh;
    object-fit: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
}

.icon {
    width: 30px;
}

.header {    
    display: flex;
    justify-content: center;
    align-items: center;    
}

.outer-side {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    width: 94vw;
    height: 15vh;
    position: fixed;
    top:0;    
    background-color: white;
}

.inner-side {
    display: flex;    
    justify-content: space-between;
    align-items: center;    
    width: 100%;    
}

.toolbar-menu {
    font-size: 1.8rem;
    font-weight: bold;
}
</style>