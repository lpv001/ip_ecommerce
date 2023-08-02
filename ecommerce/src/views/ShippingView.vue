<template>
    <header-component />
    <main>
        <div class="align-box">
            <h2 style="font-size: 16px;">Home > Customer Information > Shipping Information</h2>
            <div class="product-box">
                <div class="list-product">
                    <form>
                    <div class="card" style="flex-direction: column; gap: 20px; margin-bottom: 30px;">
                        <div style="align-items: center; width: 100%; display:flex; justify-content: space-between;">
                            <h1 style="font-size: 26px; font-weight: 300;">Shipping Address</h1>
                            <a href="#" style="font-size: 12px; color: blue;">Edit</a>
                        </div>
                        <input v-model="address" type="text" style="color: lightslategray; border: 1px solid lightslategray; padding-left: 10px; padding: 5px 10px;" required>
                        <!-- <p style="color: lightslategray;">12 Waldo Point Road, Mishauken, NY 120</p> -->
                    </div>
                    <div class="card" style="flex-direction: column; gap: 20px; margin-bottom: 30px; width: 100%;">
                        <div style="align-items: center; width: 100%; display:flex; justify-content: space-between;">
                            <h1 style="font-size: 26px; font-weight: 300;">Shipping Method</h1>
                            <!-- <a href="#" style="font-size: 12px; color: blue;">Edit</a> -->
                        </div>
                        <div style="font-size: 14px; color: lightslategray; display: flex; width: 100%; justify-content: space-between; align-items: center;">
                            <div style="display: flex; align-items: center; gap: 20px;">
                                <input name="ship" v-model="ship" value="ground" type="radio" id="ups_ground" checked>
                                <label for="ups_ground">UPS Ground</label>
                            </div>
                            <p style="text-align: end;">$2.20</p>
                        </div>
                        <div style="font-size: 14px; color: lightslategray; display: flex; width: 100%; justify-content: space-between; align-items: center;">
                            <div style="display: flex; align-items: center; gap: 20px;">
                                <input name="ship" v-model="ship" value="3day" type="radio" id="3-day">
                                <label for="3-day">UPS 3 Day Select</label>
                            </div>
                            <p style="text-align: end;">$5.20</p>
                        </div>
                        <div style="font-size: 14px; color: lightslategray; display: flex; width: 100%; justify-content: space-between; align-items: center;">
                            <div style="display: flex; align-items: center; gap: 20px;">
                                <input name="ship" v-model="ship" value="2nd" type="radio" id="4-day">
                                <label for="4-day">UPS 2nd Day Air</label>
                            </div>
                            <p style="text-align: end;">$9.50</p>
                        </div>
                        <div style="font-size: 14px; color: lightslategray; display: flex; width: 100%; justify-content: space-between; align-items: center;">
                            <div style="display: flex; align-items: center; gap: 20px;">
                                <input name="ship" v-model="ship" value="next" type="radio" id="ups_ground1">
                                <label for="ups_ground1">UPS Next Day Air</label>
                            </div>
                            <p style="text-align: end;">$12.40</p>
                        </div>
                    </div>
                    <div class="card" style="flex-direction: column; gap: 20px; margin-bottom: 30px;">
                        <div style="align-items: center; width: 100%; display:flex; justify-content: space-between;">
                            <p><RouterLink to="/cart">&lt; Return to Cart</RouterLink></p>
                            <button @click="handle_shipping" style="background: rgb(0, 102, 255); padding: 2px 25px; color: #fff; border: 0; border-radius: 3px;">Continue to Payment</button>
                        </div>
                    </div>
                    </form>
                </div>
                <div class="check-out">
                    <h4>Summary ( 4 Item )</h4>
                    <div class="bt">
                        <p>Subtotal</p>
                        <p>$1200.00</p>
                    </div>
                    <div class="bt">
                        <p>Shipping</p>
                        <p>-</p>
                    </div>
                    <div class="bt">
                        <p>Eat Taxs</p>
                        <p>-</p>
                    </div>
                    <hr>
                    <button>Checkout</button>
                </div>
            </div>
        </div>
    </main>
    <footer-component />
</template>

<style>
    .align-box{
        padding: 60px 30px;
        padding-bottom: 300px;
    }
    
    .align-box h2{
        font-size: 22px;
        letter-spacing: 1px;
        font-weight: 500;
        margin-bottom: 20px;
    }

    .align-box .product-box{
        display: flex;
        gap: 40px;
    }

    .align-box .product-box .list-product{
        flex: 3;
    }

    .align-box .product-box .list-product .hr{
        border-top: 1px solid silver;
        border-bottom: 1px solid silver;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
    }

    .align-box .product-box .list-product .card{
        display: flex;
        margin-bottom: 20px;
        margin-top: 20px;
    }

    .align-box .product-box .list-product .card:nth-child(1){
        padding-top: 10px;
        padding-bottom: 10px;
        border-top: 1px solid silver;
        margin: 0;
    }

    .align-box .product-box .list-product .card:nth-child(2){
        padding-top: 10px;
        padding-bottom: 50px;
        border-top: 1px solid silver;
        margin: 0;
    }

    .align-box .product-box .list-product .card:nth-child(3){
        padding-top: 10px;
        padding-bottom: 10px;
        border-top: 1px solid silver;
        margin: 0;
    }

    .align-box .product-box .list-product .card:nth-child(1) .image-container{
        border-radius: 0;
        height: fit-content;
    }

    .align-box .product-box .list-product .card .image-container{
        flex: 4;
        height: 120px;
        overflow: hidden;
        border-radius: 15px;
        display: flex;
        gap: 25px;
    }

    .align-box .product-box .list-product .card .image-container img{
        aspect-ratio: 16/9;
        object-fit: cover;
        height: 120px;
        border-radius: 15px;
    }

    .align-box .product-box .list-product .card p{
        flex: 1;
        font-size: 14px;
    }

    .align-box .product-box .list-product .card .quantity{
        flex: 1;
    }

    .align-box .product-box .check-out{
        flex: 1;
        border: 1px solid silver;
        padding: 20px;
    }

    .align-box .product-box .check-out h4{
        font-weight: 500;
        margin-bottom: 25px;
    }

    .align-box .product-box .check-out .bt{
        display: flex;
        font-size: 14px;
        justify-content: space-between;
        margin-bottom: 3px;
        font-weight: 300;
    }

    .align-box .product-box .check-out hr{
        margin-top: 30px;
        margin-bottom: 30px;
    }

    .align-box .product-box .check-out button{
        width: 100%;
        background: #581067;
        color: #fff;
        padding: 2px 0;
    }

    @media ( max-width: 830px ){
        .align-box{
            padding: 40px 20px;
        }
        .align-box .product-box{
            flex-direction: column;
        }
    }

    @media ( max-width: 550px ){
        .align-box .product-box .list-product{
            width: 100%;
        }
        .align-box .product-box .list-product .card{
            width: 100%;
        }
        .align-box .product-box .list-product .card .image-container{
            flex-direction: column;
        }
        .align-box .product-box .list-product .card p{
            display: none;
        }
        .align-box .product-box .list-product .card .quantity{
            display: none;
        }
    }

    

</style>

<script>
    import axios from 'axios'
    import HeaderComponent from '../components/HeaderComponent.vue'
    import FooterComponent from '../components/FooterComponent.vue'
    import { product_url } from '../url'
    import router from '../router'

    export default {
        name: 'detail',
        data (){
            return {
                address: '',
                ship: 'ground',
            }
        },
        methods: {
            handle_shipping(e){
                e.preventDefault()
                let address_info = {
                    location: this.address,
                    type: this.ship
                }
                this.$store.commit('SET_SHIP_ADDRESS', address_info)

                if (this.address !== '')
                router.push('/payment')
            }
        },
        components: {
            HeaderComponent: HeaderComponent,
            FooterComponent: FooterComponent
        },
        mounted(){
            axios.get(product_url + '/v1/client/me', {withCredentials: true})
              .then((response) => {
                  if(response.status === 201) router.push('/shipping')
                  
              })
              .catch((err) => router.push('/login'))
        }
    }
</script>