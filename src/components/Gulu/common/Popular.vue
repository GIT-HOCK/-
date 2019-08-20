<template>
    <div id='Popular'>
        <carou
            :items='items4'            
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
            items4:[
                require('../../../assets/13.png'),
                require('../../../assets/14.png'),
                require('../../../assets/15.png'),
            ],
            
        }
    }   
}
</script>
<style scoped>

</style>
