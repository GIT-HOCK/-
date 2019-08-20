<template>
    <div>
        <mt-button size='small' type='primary' @click='add'>添加</mt-button>        
        <mt-button size='small' type='primary' @click='remove'>删除</mt-button> 
        <mt-button size='small' type='primary' @click='moveto'>位移</mt-button> 
        <hr>
        <transition-group name='list'>
            <span v-for="i of items" v-bind:key='i' class='list-item' :id='i'>
                {{i}}
            </span>
        </transition-group>       
    </div>
</template>
<script>
export default {
    data(){
    return{
        items:[0,1,2,3,4,5,6,7,8,9],
        nextNum:10
    }
  },
  methods:{
      randomIndex(){
          return Math.floor(Math.random()*this.items.length)
      },
      add(){
          this.items.splice(this.randomIndex(),0,this.nextNum++)
      },
      remove(){
          this.items.splice(this.randomIndex(),1)
      },
      moveto(){
          var zero=document.getElementById('0')
          
      }
      
  }
}
</script>
<style>
.list-item{
    display:inline-block;
    margin-right:10px;
}
.list-enter-active,.list-leave-active{
    transition:all 1s;
}/* 
.list-enter,.list-leave-to{
    transform:translateX(-30px);
    opacity:0
} */
.list-enter{
    transform:translateX(-30px);
}
.list-leave-to{
    transform:translateX(100px)
}
span>span{
    border-bottom:1px solid #000;
}
</style>
