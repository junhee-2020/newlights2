<template>
    <div class="header">
        <div class="left-side">
            <router-link class="toolbar-menu" to="/">
                <img class="logo-img" src="../assets/logo_purple.png" alt="newlights logo">
            </router-link>
            <router-link class="toolbar-menu" to="/AboutChurchView">교회소개</router-link>            
            <router-link class="toolbar-menu" to="/NewLightNewsView">교회소식</router-link>
            <router-link class="toolbar-menu" to="/WorshipGuideView">예배시간</router-link>
            <router-link class="toolbar-menu" to="/GalleryView">새빛사진</router-link>
            <router-link class="toolbar-menu" to="/WayToComeView">오시는길</router-link>                        
            <a class="toolbar-menu" href="https://www.youtube.com/channel/UC_8Ly-tOUYDeuL85hB6TpEQ" target="_blank">온라인 예배</a>
        </div>
        <div class="right-side">
            <a href="https://www.youtube.com/channel/UC_8Ly-tOUYDeuL85hB6TpEQ" target="_blank">
                <img class="youtube-icon" src="../assets/youtube.png" alt="online-worship">
            </a>
            <a href="http://www.newlights.net/bbs/admin.php" target="_blank">
                <img class="admin-icon" src="../assets/admin.png" alt="admin">
            </a>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
	
.logo-img {
    width: 200px;
    object-fit: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    margin: 0 1rem;        
}

.youtube-icon {
    width: 30px;
    margin-right: 0.5rem;
}

.admin-icon {
    width: 30px;
    margin-left: 0.5rem;
}

.header {    
    display: flex;
    justify-content: space-between;
    margin: 1rem;
    padding: 0;
}

.left-side {
    display: flex;    
    align-items: center;
}

.right-side {
    display: flex;    
    align-items: center;
}

.toolbar-menu {
    font-size: 1.8rem;
    font-weight: bold;
    margin: 0 0.2rem;
    padding: 0 0.2rem;    
}
</style>