<template>
    <div>
        <div>
            <router-link to="" slot="left" type='none'>
                <mt-button  tag='a' icon="back" @click.native="$router.back(-1)"></mt-button>
            </router-link>            
        </div>
        <div class='img'>
            <img :src="list.imgUrl" alt="">            
        </div>
        <div style='position:relative;height:20px;'>
            <div class='radius' :style='radius'></div>
            <div class='radiusdiv' :style='radiusdiv'></div> 
        </div>               
        <div class='time'>
            <span>{{newdate || '0:00'}}</span>
            <span>{{lastdate=='NaN:NaN'?'0:00':lastdate || '0:00'}}</span>
        </div>
        <div class='title'>
            <div>   
                <img src="../../../assets/heart.png" alt="">        
            </div>         
            <div style='dispaly:flex;flex-direction:column '>
                <p style='font-size:16px'>{{list.songName}}</p>
                <p style='font-size:14px;opacity:.6'>{{list.userName}}</p>
            </div>
            <div>
                <img src="../../../assets/good.png" alt="">
            </div>            
        </div>
        <div class='between'>
            <img src="../../../assets/xiaoxi.png" alt="">
            <img src="../../../assets/jia.png" alt="">
            <img src="../../../assets/download.png" alt="">
            <img src="../../../assets/fenxiang.png" alt="">
        </div>
        <div class='play'>
            <img src="../../../assets/xunhuan.png" alt="">
            <img src="../../../assets/shangyishou.png" alt="">
            <img :src="isplay?require('../../../assets/bofang.png'):require('../../../assets/zanting.png')" alt="" @click='toplay'>
            <img src="../../../assets/xiayishou.png" alt="">
            <img src="../../../assets/caidan.png" alt="">
        </div>
        <audio  :src="list.url" id='play' autobuffer autoplay='true'></audio>
    </div>
</template>
<script>
export default {    
    data(){
        return{
            list:{
                url:''
            },
            isplay:true,
            newdate:'',
            lastdate:'',
            tap:false,
            width:'10px',
            radius:{                
                borderRadius:'50%',
                background:'green',
                position:'relative',
                top:'-8px', 
                zIndex:3,
                display:'flex',
                alignItems:'center'
            },
            radiusdiv:{              
                zIndex:2,                            
            },
            mousex:'',            
        }
    },
    methods:{    
        // 鼠标时间
        mouse:()=>{            
            var radius=document.getElementsByClassName('radius')[0]
            radius.addEventListener('touchstart',function(e){ 
                this.mousex=e.targetTouches[0].clientX,
                this.mousey=e.targetTouches[0].clientY,                   
                console.log('鼠标按下了')                
                console.log(this.mousex,this.mousey)
            },false),
            radius.addEventListener('touchmove',function(e){
                this.mousex=e.targetTouches[0].clientX,
                this.mousey=e.targetTouches[0].clientY, 
                                
                console.log('鼠标移动了')
                console.log(this.mousex,this.mousey)
            },false)
            radius.addEventListener('touchend',function(e){                
                console.log('鼠标抬起了')
                console.log(this.mousex,this.mousey)
            },false)            
        },        
        // 转换时间    
        datetime(value){
            // 将秒转换成分钟
            var second=Math.floor(value%60) 
            var minute=Math.floor(value/60)
            if(second<10){
                second='0'+second
            }
            return (minute+':'+second)
        },
        toplay(){           
            var play=document.getElementById('play');                                   
            if(this.isplay){
                this.isplay=false;                
                play.play(); 
            }else{
                this.isplay=true;
                play.pause();
            }            
            play.addEventListener('timeupdate',()=>{                  
            // console.log(this.datetime(play.currentTime),this.datetime(play.duration))

            this.newdate=this.datetime(play.currentTime);
            this.lastdate=this.datetime(play.duration) 

            this.$data.radiusdiv.width=' '+((play.currentTime/play.duration)*100+'%')
            this.$data.radius.left=' '+(((play.currentTime/play.duration)-0.01)*100+'%')    
            if(play.currenTime==play.duration-1){
                this.isplay=false
            }
            },false)
        },                     
    },    
    created(){        
        
    },
    // axios异步请求MP3
    beforeMount(){
        var list=this.$router.history.current.query;        
        this.list=list             
        var url='/url'            
        this.axios.get(url,{            
            params:{
            id:this.list.songId,
            quality:'flac',
            isRedirect:0
        }}).then(res=>{                
            this.list.url=res.data.data;
            window.localStorage.setItem('url',res.data.data)
            console.log(window.localStorage.getItem('url'))               
        })              
    },
    mounted(){  
        this.$data.radius.width=this.$data.radius.height=window.innerHeight*0.02+'px'        
        console.log(this.$data.radiusdiv.width)
        setTimeout(()=>{
            this.toplay()   
        },1000) 
        this.mouse(event)                      
    },
    watch: {
                
    }
}
</script>
<style scoped >
.radiusdiv{
    width:0px;
    background:#0f0 !important;
    height:2px;
    margin-top:-2px;
    position:absolute;
    top:0;
}
.play{
    margin-top:20px;
    display:flex;
    align-items:center;
}
.play img{
    height:30px;
}
.play>img:nth-child(3){
    height:50px;
}
.between{    
    width:70%;
    height:100%;
    margin:0 auto;
    margin-top:10%;
    display:flex;
    justify-content: space-around;
}
.between>img{    
    height:2em !important;
    opacity:.8;
}
.title{
    margin-top:20px;
    display:flex;
    justify-content: space-around;
}
.title p{
    margin-top:0;
    margin-bottom:5px;
}
.title img{
    width:60%;
}
.mint-button{
    background-color:transparent !important;
    position:fixed;
    top:9px;
    left:1px;  
}
.img{
    width:100%;
    height:24rem;
    border-bottom:2px solid rgb(110, 95, 128);
    z-index:1;
}
.img img{
    height:100%;
    width:100%;
}
.time{
    width:95%;
    margin:0 auto;
    margin-top:-10px;
    display:flex;
    justify-content:space-between;
}
.time span{
    font-size:14px
}
</style>
