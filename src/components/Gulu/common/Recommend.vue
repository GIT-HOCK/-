<template>
    <div id='Recommend'>        
        <carou :items='items1'></carou>
        
    </div>    
</template>

<script>
import Carou from './carou'
export default {
    data(){
        return{
            items1:[
              require("../../../assets/1.png"),
              require("../../../assets/2.png"),
              require("../../../assets/3.png"),  
              require("../../../assets/4.png"),  
              require("../../../assets/5.png"),  
            ],
            
        }
    },
    components:{
        'carou':Carou
    }
}
</script>
<style scoped>

</style>
