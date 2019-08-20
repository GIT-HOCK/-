<template>
    <div>
        <div class='header'>
            <router-link to="" slot="left">
                <mt-button tag='a' icon="back" @click.native="$router.back(-1)"></mt-button>
            </router-link>
            <span>{{title}}</span>
            <img src="../../../assets/btn_disk.png" alt="">
        </div>        
        <div style='margin-top:52px;'>
            <div class='play'>
                <img src="../../../assets/video.png" alt="">
                <span>全部播放（共{{num}}首）</span>
                <img src="../../../assets/shenglue.png" alt="">
            </div>
            <div class="video" v-for='(item,i) of list.songs' :key='i'>
                <div>
                    {{i+1}}
                    <img src="../../../assets/heng.png">
                </div>
                <div @click='toVideo(item)'>                    
                    <img :src="item.al.picUrl" >
                    <div style='text-align:left;'>
                        <p>{{item.name}}</p>
                        <p>{{item.ar[0].name}}</p>
                    </div>                                        
                </div>
                <img src="../../../assets/shenglue.png" alt="" >    
            </div>                    
        </div>        
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[],     
            id:[],
            title:'', 
            num:0               
        }
    }, 
    methods:{
        // https://v1.itooi.cn/netease/search?keyword=%E5%8F%A4%E5%85%B8&type=songList&pageSize=20&page=0
        aja(){
                var url='/search'  
                var obj = {keyword:this.title,type:'song',pageSize:30,page:0};
                this.axios.get(url,{                    
                    params:obj
                    }).then((res)=>{
                    // console.log(res.data.data)
                    this.list=res.data.data; 
                    this.num=res.data.data.songs.length
                    window.localStorage.setItem('list',this.list)
                    console.log(window.localStorage.getItem('list'))
                })                     
        },
        toVideo(i){
            console.log(i)
            this.$router.push({
                path:"/videoPlay",
                query:{                    
                    imgUrl:i.al.picUrl,
                    songName:i.name,
                    userName:i.ar[0].name,
                    songId:i.id,
            }})               
        }     
    },   
    created:function(){                     
        this.id=window.location.search.slice(4,6)
        this.title=window.location.search.slice(13)        
        if(this.title==1){
            this.title='咕噜巴拉榜'
        }else if(this.title==2){
            this.title='国风圈榜'
        }else if(this.title==3){
            this.title='二次元'
        }else if(this.title==4){
            this.title='流行集榜'
        }
        console.log(this.id,this.title)  
        setTimeout(()=>{
            this.aja() 
        },100)     
    }
}
</script>
<style>
.video{
    display:flex;    
    padding:10px 20px;
    justify-content: space-between;
    align-items:center;
}
.video>div:first-child{    
    display:flex;
    flex-direction: column;
    align-items:center;
    margin-right:20px;
}
.video>div:first-child img{
    width:15px;
    height:10px;
}
.video>div:nth-child(2){
    width:90%;
    display:flex; 
    align-items:center; 
    margin-right:10%;   
}
.video>div:nth-child(2) img{
    height:50px;
    width:50px;
    margin-right:20px;
}
.video>img{
    height:20px;
}
.video P{
    margin:0;
    font-size:14px;
}
.video p:last-child{
    font-size:6px;
    color:rgb(199, 171, 171);
}
body{
    margin:0;
}
.header{
    position:fixed;
    top:0;
    width:100%;
    background:rgb(238, 232, 232);    
    display:flex;
    justify-content:space-between; 
    align-items: center;
    padding:5px 0;   
    border-bottom:1px solid rgba(173, 169, 169,.6);
}
.header>img:first-child,.header>img:last-child{
    width:20px;
    padding:10px;
}
.header>span{
    font-size:18px;
}
.play{
    padding:10px 20px;    
    display:flex;
    justify-content: space-between;
    font-size:15px;
}
.play>img{    
    height:20px;
}
.play>span{
    margin-left:-120px;    
}
.mint-button--default{
    margin-left:10px;
    background-color:#eee8e8 !important;
    -webkit-box-shadow:none !important;
    box-shadow:none !important;
}
</style>
