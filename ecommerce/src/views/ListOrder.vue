<template>
    <div class="wapper">
        <admin-sidebar />
        <div class="listing">
            <div v-for="order in orders" :key="order._id" class="box">
                <div class="description">
                    <h1>Order Id: {{ order._id }}</h1>
                    <div class="buttonss">
                        <button :key="renderKey" @click="mark_complete(order._id)" v-bind:style="[order.isShip ? {'background': '#E0E0E0'} : {}]">Mark Complete</button>
                        <button @click="read_detail(order._id)">Detail</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

.wapper{
    display: flex;
    width: 100%;
      height: 100vh;
  overflow: hidden;
}

.listing{
    position: relative;
    padding: 20px;
    width: 100%;
    overflow: scroll;
}

.listing .box{
    height: fit-content;
    width: 100%;
    display: flex;
    padding: 20px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 20px;
    margin-bottom: 20px;
}

.listing .box .description{
    padding: 10px;
}

.listing .box .description .buttonss{
    display: flex;
    gap: 10px;
    margin-top: 10px;
}

.listing .box .description .buttonss button{
    color: #fff;
    width: 150px;
    height: 30px;
    border-radius: 20px;
}

.listing .box .description .buttonss button:nth-child(1){
    background: lightcoral;
}

.listing .box .description .buttonss button:nth-child(2){
    background: #fff;
    color: #000;
    border: 1px solid black;
}

</style>

<script>
import AdminSidebar from '../components/AdminSidebar.vue'
import axios from 'axios'
import { product_url, image_url } from '../url'
import router from '../router'

export default {
    data(){
        return {
            orders: [],
            image_url: image_url,
            renderKey: 0
        }
    },
    components: {
        AdminSidebar: AdminSidebar
    },
    methods: {
        mark_complete(id){
            axios.put(product_url + '/v1/order/update_order_status/' + id)
                .then((response) => {
                    location.reload()
                })
        },
        read_detail(id){
            router.push({
                name: 'order_detail',
                params: {
                    id: id,
                }
            })
        }
    },  
    mounted(){
        window.scrollTo(0,0)
        axios.get(product_url + '/v1/user/me', {withCredentials: true})
            .then((response) => {
                if(response.status === 201) router.push('/list_order')
            })
            .catch((err) => {router.push('/adminlogin')})
        axios.get(product_url + '/v1/order/get_all_order')
            .then((response) => {
                this.orders = response.data
            })
    }
}
</script>