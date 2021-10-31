<template>
  <div class="picture-view">
    <div class="picture-view-body">
        <iframe :src="boardSrc" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$route.params.id);
  },
  computed: {
    boardSrc() {
      const boardSrcObj = {
        'a': 'http://www.newlights.net/bbs/zboard.php?id=gallery_newlights',        
        'b': 'http://www.newlights.net/bbs/zboard.php?id=gallery_jangnyun',
        'c': 'http://www.newlights.net/bbs/zboard.php?id=gallery_chungnyun',              
        'd': 'http://www.newlights.net/bbs/zboard.php?id=gallery',
      }
      return boardSrcObj[this.$route.params.id];
    }
  }
}
</script>

<style scoped>
.picture-view {
  margin-top: 16vh;
}
iframe {
  width: 100%;
  min-height: 1080px;
}
@media (max-width: 500px) {
    .picture-view {
      margin: 16vh 0;
    }  
    .picture-view-body {
        font-size: 0.8rem;
    }
}
</style>