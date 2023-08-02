<template>
    <div class="bts">
        he
    </div>
</template>

<style>

.bts{
    padding: 20px;
}

</style>


<script>

import axios from 'axios'
import { product_url } from '../url'
import router from '../router'

export default {
    data(){
        return {
            orders: [],
        }
    },

    methods: {
        
    },  
    mounted(){
        let id = this.$route.params.id
        console.log(id)
    }
}
</script>
