<template>
    <div id='zero'>  
        <!-- 页头 -->
        <top></top>  
        <!-- 导航按钮 -->
        <div class='but'>
            <a  @click.prevent='active="index1";'>推荐</a>
            <a  @click.prevent='active="index2";'>国风圈</a>
            <a  @click.prevent='active="index3";'>次元汇</a>
            <a  @click.prevent='active="index4";'>流行集</a>
            <a  @click.prevent='active="index5";'>歌单</a>            
        </div>        
        <mt-tab-container v-model='active' fixed>                    
            <!-- 子面板1 -->
            <mt-tab-container-item id='index1'>
                <carou
                :items='items2'
                ></carou>
                <recommend style='margin-top:.5em'></recommend>
            </mt-tab-container-item>
            <!-- 子面板2 -->
            <mt-tab-container-item id='index2'>
                <carou
                :items='items2'
                ></carou>
                <country></country>
            </mt-tab-container-item>
            <!-- 子面板3 -->
            <mt-tab-container-item id="index3">
                <carou
                :items='items2'
                ></carou>
                <dimension></dimension>
            </mt-tab-container-item>
            <!-- 子面板4 -->
            <mt-tab-container-item id="index4">
                <carou
                :items='items2'
                ></carou>
                <popular></popular>
            </mt-tab-container-item>
            <!-- 子面板5 -->
            <mt-tab-container-item id="index5">
                <carou
                :items='items2'
                ></carou>
                <song></song>
            </mt-tab-container-item>            
        </mt-tab-container> 
        <!-- 底部导航栏 -->
        <mt-tabbar v-model='selected' fixed>             
            <mt-tab-item id='index'>                 
                <img slot='icon' :src="selected=='index'?require('../../assets/music_on.png'):require('../../assets/music_off.png')"  alt="">
                音乐
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
import Top from './common/top'
import Recommend from './common/Recommend'
import Country from './common/Country'
import Dimension from './common/Dimension'
import Popular from './common/Popular'
import Song from './common/Song'
import Ranking from './ranking'
import carou from './common/carou'

export default {  
    components:{
        carou,
        'top':Top,
        'recommend':Recommend,
        'country':Country,
        'dimension':Dimension,
        'popular':Popular,
        'song':Song,
        "ranking":Ranking,
        
    }, 
    data(){
        return {
            active:'index1', 
            selected:'index',
            show:true,  
             items2:[
                require('../../assets/7.png'),
                require('../../assets/8.png'),
                require('../../assets/9.png'),
            ],              
        }
    },
    created(){
        window.addEventListener('resize', () => {
        this.helpHeight = window.innerHeight
      })
      console.log(document.getElementsByTagName('html')[0])
      console.log(window.innerHeight)
    }
}
</script>
<style scoped>
.but{
    display:flex;
    width:100%;
    justify-content: space-around;
    margin-top:10px;
    padding-bottom:2px;  
    margin-top:65px; 
}
.on_focus{
    /* background:#000; */
    border-bottom:1px solid #000;
    position:relative;
    top:2px;
}
.but_hr{
    margin-left:0;
    width:17%;
}
#zero,.mint-tab-container,.mint-tab-container-wrap,.mint-tab-container-item{
    height:100% !important;
} 
div.mint-tab-container>div{    
   height:100% !important;
   display:none;
}
#ranking{    
    height:529px;   
    display:flex;
    flex-direction: column;
    justify-content: space-around;
}
</style>

