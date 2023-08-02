<template>
    <div class="wapper">
        <admin-sidebar />
        <div class="listing">
            <div v-for="product in products" :key="product._id" class="box">
                <img v-bind:src="image_url + '/' + product.image_path" alt="">
                <div class="description">
                    <h1>Product name: {{ product.product_name }}</h1>
                    <p>Brand: {{ product.brand }}</p>
                    <p>Description: {{ product.product_description }}</p>
                    <p>Price: {{ product.product_price }}$</p>
                    <div class="buttons">
                        <button>Edit</button>
                        <button @click="delete_product(product._id)">Delete</button>
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
    height: 180px;
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

.listing .box .description .buttons{
    display: flex;
    gap: 10px;
    margin-top: 10px;
}

.listing .box .description .buttons button{
    color: #fff;
    width: 90px;
    height: 30px;
    border-radius: 20px;
}

.listing .box .description .buttons button:nth-child(1){
    background: lightblue;
}

.listing .box .description .buttons button:nth-child(2){
    background: lightcoral;
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
            products: [],
            image_url: image_url
        }
    },
    components: {
        AdminSidebar: AdminSidebar
    },
    methods: {
        delete_product(_id){
            axios.delete(product_url + '/v1/product/delete/' + _id)
            this.products = this.products.filter(data => data._id != _id)
        }
    },  
    mounted(){
        window.scrollTo(0,0)
        axios.get(product_url + '/v1/user/me', {withCredentials: true})
            .then((response) => {
                if(response.status === 201) router.push('/list_product')
            })
            .catch((err) => {router.push('/adminlogin')})
        axios.get(product_url + '/v1/product/get_all_product')
        .then((response) => {
            this.products = response.data
        })
    }
}
</script>