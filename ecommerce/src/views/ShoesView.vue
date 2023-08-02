<template>
  <header-component/>
  <main>
    <section id="list">
      <div class="title">
        <h2>Shoes for Every Occasion</h2>
        <p>Deals Refresh Every 8 Hours</p>
      </div>
      <div class="listing">

        <div class="box" v-for="product in products" :key="product">
          <div class="image" @click="go_to_detail(product._id)">
            <img v-bind:src="image_url + '/' + product.image_path" alt="">
          </div>
          <div class="text">
            <h6 @click="go_to_detail(product._id)">{{product.product_name}}</h6>
            <span>From ${{product.product_price}}</span>
            <p>{{product.brand}}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
  <footer-component />
</template>

<style>

  #banner{
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 30px;
    color: #fff;
    background-position: center;
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url('../assets/images/charles-keith-home-s-summer-calling-week-25-1000x1333.jpeg');
  }

  #banner h1{
    font-size: 36px;
    max-width: 30ch;
    margin-bottom: 20px;
  }

  #banner p{
    font-size: 16px;
    margin-bottom: 20px;
  }

  #banner button{
    width: 150px;
    height: 40px;
    border-radius: 20px;
    background: #000;
    color: #fff;
    border: 0;
    box-sizing: content-box;
    padding: 0 20px;
  }
  #ship{
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background: #000;
    width: 100%;
  }
  #ship h1{
    font-size: 24px;
    color: #fff;
  }
  #ship i{
    width: 25px;
    height: 25px;
    color: #fff;
  }
  #sm-banner{
    padding: 0 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    margin-bottom: 60px;
    margin-top: 60px;
  }
  #sm-banner .even-column{
    padding: 40px 20px;
    flex-basis: 100%;
    aspect-ratio: 4/3;
    max-height: 200px;
    box-sizing: content-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    gap: 20px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 10px;
  }
  #sm-banner .even-column:nth-child(1){
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url('../assets/images/AdobeStock_320515749.png');
  }
  #sm-banner .even-column:nth-child(2){
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url('../assets/images/banner.png');
  }
  #sm-banner .even-column p{
    font-size: 22px;
    max-width: 15ch;
    color: #fff;
  }
  #sm-banner .even-column button{
    width: 120px;
    height: 30px;
    border: none;
    background: #fff;
    color: #000;
    border-radius: 20px;
  }

  @media ( max-width: 830px ){
    #sm-banner{
      flex-direction: column;
      width: 100%;
      padding: 0 60px;
      margin-bottom: 60px;
      margin-top: 60px;
    }
    #sm-banner .even-column{
      width: 100%;
      padding: 20px;
    }
  }

  #list{
    width: 100%;
    margin-bottom: 60px;
    margin-top: 60px;
  }
  #list .title{
    widows: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 40px;
  }
  #list .title h2{
    font-size: 28px;
    font-weight: 600;
  }
  #list .title p{
    color: rgb(43, 43, 43);
  }
  #list .listing{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 0 120px;
    gap: 30px;
  }
  #list .listing .box{
  }
  #list .listing .box .image{
    height: 150px;
    border-radius: 10px;
    overflow: hidden;
  }
  #list .listing .box .image img{
    width: 100%;
    object-fit: cover;
    cursor: pointer;
  }
  #list .listing .box .text{
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  #list .listing .box .text h6{
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
  }
  #list .listing .box .text span{
    color: rgb(26, 126, 26);
    margin-bottom: 20px;
    font-size: 14px;
  }
  #list .listing .box .text p{
    padding: 10px 0;
    font-size: 14px;
  }

  @media (max-width: 1200px){
    #list .listing{
      padding: 0 80px;
    }
  }

  @media (max-width: 1000px){
    #list .listing{
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media (max-width: 830px){
    #list .listing{
      padding: 0 70px;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 550px){
    #list .listing{
      padding: 0 40px;
      grid-template-columns: 1fr;
    }
  }
  

</style>


<script>

import axios from 'axios'
import HeaderComponent from '../components/HeaderComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
import {product_url, image_url} from '../url.js'
import router from '../router'

export default {
  name: 'homeview',
  data(){
    return {
      products: [],
      image_url: image_url,
    }
  },
  components: {
    HeaderComponent: HeaderComponent,
    FooterComponent: FooterComponent,
  },
  methods: {
    go_to_detail(id){
      router.push('/detail?id='+id)
    }
  },
  mounted(){
    axios.get( product_url + '/v1/product/get_product_by_category/shoes')
      .then((response) => {
        this.products = response.data
      })
  }
}

</script>
