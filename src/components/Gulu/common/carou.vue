<template>
    <div>
        <swiper :options='swiperOption'>
            <swiper-slide v-for='(item,i) in items' :key='i'>
                <img :src='item' style='width:100%' alt="">
            </swiper-slide>            
        </swiper>
    </div>
</template>
<script>
import {swiper,swiperSlide} from 'vue-awesome-swiper'
export default {
    props:{
        items:{string:''},        
    },
    components:{
        swiper,
        swiperSlide
    },
    data(){
        return{
            swiperOption:{                
                slidesPerView:'auto',
                centeredSlides:true,
                spaceBetween:10,
                loop:true,
                speed:1000,
                freeMode:false,                
                autoplay:true,
                waitForTransition:false,
                watchSlidesProgress : true,
                watchSlidesVisibility : true,
            }
        }
    }
}
</script>
<style speod>

</style>
