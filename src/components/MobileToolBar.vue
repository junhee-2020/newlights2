<template>
    <div class="header">
        <div class="menu">
            <router-link class="toolbar-menu" to="/MenuPopupView">
                <img class="menu-icon" src="../assets/menu.png" alt="mobile menu">            
            </router-link>
        </div>
        <div class="logo">
            <router-link class="toolbar-menu" to="/">
                <img class="logo-icon" src="../assets/logo_gray.png" alt="logo">
            </router-link>
        </div>
        <div class="right-side">
            <a href="https://www.youtube.com/channel/UC_8Ly-tOUYDeuL85hB6TpEQ" target="_blank">
                <img class="youtube-icon" src="../assets/youtube.png" alt="online-worship">
            </a>
            <a href="http://www.newlights.net/login.html" target="_self">
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
    .header {    
        display: flex;
        justify-content: space-between;
        align-items: center;            
        margin: 0;
        padding: 0;
        width: 100vw;
        height: 15vh;
        position: fixed;
        top:0;
        background-color: white;
    }
    
    .menu {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 1rem;
    }

    .right-side {
        margin: 0 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .menu-icon{
        width: 50px;        
    }

    .logo {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .logo-icon{
        width: 100px;        
        border-radius: 1.5rem;        
        margin-left: 0.2rem;
    }

    .youtube-icon {
        width: 30px;        
        margin-right: 1rem;
    }

    .admin-icon {
        width: 30px;        
    }
</style>