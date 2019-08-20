<template>
    <div class='header'>
        <img src="../../../assets/search.png" alt="">
        <img src="../../../assets/gulubala.png" alt="">
        <img src="../../../assets/btn_disk.png" alt="">
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    }
}
</script>
<style>
body{
    margin:0;
}
.header{
    background:rgba(238, 232, 232, 0.2);    
    display:flex;
    justify-content:space-around; 
    align-items: center;
    padding:10px 0;   
    border-bottom:1px solid rgba(173, 169, 169,.6);
}
.header>img:first-child,.header>img:last-child{
    width:35px
}
.header>img:nth-child(2){
    height:1.5em;
}
</style>
