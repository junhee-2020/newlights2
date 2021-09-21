<template>
    <div>
        <div class="map-view">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12668.218001891904!2d126.8827874!3d37.4594351!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x22fe938e07ee8ec!2z7IOI67mb6rWQ7ZqM!5e0!3m2!1sko!2skr!4v1632243853234!5m2!1sko!2skr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
        <list-item></list-item>                    
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
}
</script>

<style scoped>
    
    .map-view {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    iframe {
        width: 90vw;
        height: 30vh;
    }

</style>