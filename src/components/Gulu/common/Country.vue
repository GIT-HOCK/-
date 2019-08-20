<template>
    <div id='country'>
        <carou
            :items='items2'
        ></carou>
    </div>
</template>
<script>
import carou from './carou'
export default {
    components:{
        carou
    },
    data(){
        return{
            items2:[
                require('../../../assets/7.png'),
                require('../../../assets/8.png'),
                require('../../../assets/9.png'),
            ],
            
        }
    }   
}
</script>
<style>

</style>
