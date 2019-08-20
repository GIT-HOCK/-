<template>
    <div id='ranking'>
        <top></top>
        <div class='between'>
            <div class='wawa'>
                <router-link  to='/play?id=26&title=1' >
                    <img :src="require('../../assets/1.png')" alt="">
                    <p>咕噜巴拉榜</p>
                </router-link>            
            </div>
            <div class='wawa'>
                <router-link to='/play?id=27&title=2' >
                    <img src="../../assets/2.png" alt="">
                    <p>国风圈榜</p>
                </router-link>                
            </div>
            <div class='wawa'>
                <router-link to='/play?id=28&title=3' >
                    <img src="../../assets/3.png" alt="">
                 <p>次元汇榜</p>
                </router-link>                
            </div>
            <div class='wawa'>
                <router-link to='/play?id=29&title=4' >
                    <img src="../../assets/4.png" alt="">
                <p>流行集榜</p>
                </router-link>                
            </div>
        </div>        
        <!-- 底部导航栏 -->
        <mt-tabbar v-model='selected'>             
            <mt-tab-item id='index'>                 
                <router-link tag='span' to='/index'>
                    <div class="mint-tab-item-icon">
                        <img slot='icon' :src="selected=='index'?require('../../assets/music_on.png'):require('../../assets/music_off.png')"  alt="">
                    </div>
                    <div class="mint-tab-item-label">
                        音乐
                    </div>                    
                </router-link> 
            </mt-tab-item>
            <mt-tab-item id='ranking'>
                <router-link tag='span' to='/ranking'>
                    <div class="mint-tab-item-icon">
                        <img slot='icon'  :src="selected=='ranking'?require('../../assets/ranking_on.png'):require('../../assets/ranking_off.png')" alt="">
                    </div>
                    <div class="mint-tab-item-label">
                        排行榜
                    </div>                    
                </router-link>                
            </mt-tab-item>
            <mt-tab-item id='user'>
                <img slot='icon' :src="selected=='user'?require('../../assets/user_on.png'):require('../../assets/user_off.png')" alt="">
                我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
import top from './common/top'
export default {
    data(){
        return{
            selected:'ranking'
            
        }
    },
    components:{
        top
    }
}
</script>
<style scoped>
.header{
    position:relative;
    height:7%;
}
.between{
    height:82%;
}
.mint-tabbar{
    height:9%;
}
#ranking div.wawa{
    position:relative;
    height:25%;
}
#ranking img{
    width:100%;
    height:100%;
    opacity:.3;
}
.wawa a{
    display:inline-block;
    width:100%;
    height:100%;
}
#ranking>div p{
    font-size:18px;
    font-weight:bold;
    position:absolute;
    z-index:1;
    top:30%;
    left:45%;
}

</style>
