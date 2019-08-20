<template>
    <div>        
        <mt-tabbar v-model='selected' fixed>            
            <mt-tab-item id='index'>                 
                <img slot='icon' :src="selected=='index'?require('../../../assets/music_on.png'):require('../../../assets/music_off.png')"  alt="">
                音乐
            </mt-tab-item>
            <mt-tab-item id='ranking'>
                <img slot='icon'  :src="selected=='ranking'?require('../../../assets/ranking_on.png'):require('../../../assets/ranking_off.png')" alt="">
                排行榜
            </mt-tab-item>
            <mt-tab-item id='user'>
                <img slot='icon' :src="selected=='user'?require('../../../assets/user_on.png'):require('../../../assets/user_off.png')" alt="">
                我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
export default {
    data(){
        return{
            selected:'index'
        }
    },
    methods:{

    }
}
</script>
<style>
.mint-tabbar>.mint-tab-item{
    color:#999999
}
.mint-tabbar>.mint-tab-item.is-selected{
    color:rgb(95, 161, 95) !important;
}
</style>
