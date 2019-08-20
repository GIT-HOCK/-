<template>
    <div id='Song'>
        <carou
            :items='items5'
        ></carou>
    </div>
</template>
<script>
import carou from './carou'
export default {
    components:{
        'carou':carou
    },
    data(){
        return{
            items5:[
                require('../../../assets/16.png'),
                require('../../../assets/17.png'),
                require('../../../assets/18.png'),
            ],
            
        }
    }   
}
</script>
<style>

</style>
