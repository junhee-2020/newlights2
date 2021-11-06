<template>
  <div id="app">
    <tool-bar v-if="!isMobile"/>
    <mobile-tool-bar v-else/>
    <transition name="page">
      <router-view class="router-view" :isMobile="isMobile" />      
    </transition>
    <spinner :loading="loadingStatus"></spinner>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
import MobileToolBar from './components/MobileToolBar.vue';
import Spinner from './components/Spinner.vue';
import bus from './utils/bus.js';

export default {
  name: 'App',
  components: {
    ToolBar,
    MobileToolBar,
    Spinner
  },
  data() {
    return {
      loadingStatus: false,
      isMobile: false
    }
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    },
    onResize () {
      this.isMobile = window.innerWidth < 1280;
    }
  },
  created() {
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
  },
  mounted() {
    this.onResize();
    window.addEventListener('resize', this.onResize, { passive: true });
  },
  beforeDestroy() {
    bus.$off('start:spinner');
    bus.$off('end:spinner');
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize, { passive: true });
    }
  }  
}
</script>

<style>

@font-face {
  font-family: "NanumBarunGothic";
  src: local("NanumBarunGothic"),
   url(./fonts/NanumBarunGothic/NanumBarunGothic.ttf) format("truetype");
}

body {
  padding: 0;
  margin: 0;
  font-family: 'NanumBarunGothic';  
}

.page-enter-active, .page-leave-active {
  transition: opacity .3s;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

a {
  color: #34495e;
  text-decoration: none;
}

a:hover {
  color: #8c99ee;
  opacity: .9;  
}

a.router-link-exact-active {
  color: #8c99ee;  
}

.router-view {
  margin-top: 16vh;
}

</style>
