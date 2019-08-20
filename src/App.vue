<template>
  <div id="app" :style='style' >
    <router-view/>
  </div>
</template>
<script>
import index from './components/Gulu/index'
export default {
  components:{
    index
  },
    data(){
      return{
        fullHeight:0,
        style:{
          width:'',
          height:''
        }
      }
    },
  created(){  
    console.log(window.innerWidth,window.innerHeight)
    this.style.width=window.innerWidth+'px'
    this.style.height=window.innerHeight+'px'
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;   
}
</style>
