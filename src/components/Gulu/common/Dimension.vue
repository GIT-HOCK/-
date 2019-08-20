<template>
    <div id='Dimension'>
        <carou
            :items='items3'
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
            items3:[
                require('../../../assets/10.png'),
                require('../../../assets/11.png'),
                require('../../../assets/12.png'),
            ],
            
        }
    }   
}
</script>
<style>

</style>
