<template>
    <div>
        <ul class="item-list">
            <li v-for="item in fetchedListItem" :key="item.id" class="post">
                <!-- 인덱스 영역 -->
                <div class="key">
                    {{ item.key || 0 }}
                </div>
                <!-- 기타 정보 영역 -->
                <div>
                    <!-- 타이틀 영역 -->
                    <p class="item-title">
                        <template v-if="item.url">
                            <a :href="item.url" target="_blank">{{ item.title }}</a>
                        </template>
                        <template v-else>
                            {{ item.title }}
                        </template>
                    </p>
                    <div v-for="subItem in item.contents" :key="subItem.key">    
                        <small class="sub-text">
                            <span>{{ subItem }}</span>                            
                        </small>                      
                    </div>
                </div>
            </li>
        </ul>        
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['fetchedListItem'])
    }
}
</script>

<style scoped>
.item-list {
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

.sub-text {
  color: #828282;
  font-size: 1rem;
}
</style>