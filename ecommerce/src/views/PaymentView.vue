<template>
    <header-component />
    <main>
        <div class="align-box">
            <h2 style="font-size: 16px;">Home > Customer Information > Shipping Information > Payment Information</h2>
            <div class="product-box">
                <div class="list-product">
                    <form @submit.prevent="handleform">
                    <div class="card" style="flex-direction: column; gap: 20px; margin-bottom: 30px;">
                        <div style="align-items: center; width: 100%; display:flex; justify-content: space-between;">
                            <h1 style="font-size: 26px; font-weight: 300;">Customer Information</h1>
                            <a href="#" style="font-size: 12px; color: lightcoral;">The deliver will email once product arrived </a>
                        </div>
                        <input required v-model="email" type="text" placeholder="Email" style="border: 1px solid lightgrey; border-radius: 5px; padding: 2px 10px;">
                    </div>
                    <div class="card" style="flex-direction: column; gap: 20px; margin-bottom: 30px;">
                        <div style="align-items: center; width: 100%; display:flex; justify-content: space-between;">
                            <h1 style="font-size: 26px; font-weight: 300;">Payment Information</h1>
                            <!-- <a href="#" style="font-size: 12px; color: lightcoral;">The deliver will email once product arrived </a> -->
                        </div>
                        <div class="input">
                            <input required v-model="firstname" type="text" placeholder="First Name" style="flex: 1; border: 1px solid lightgrey; border-radius: 5px; padding: 2px 10px;">
                            <input required v-model="lastname" type="text" placeholder="Last Name" style="flex: 1; border: 1px solid lightgrey; border-radius: 5px; padding: 2px 10px;">
                        </div>
                        <input required v-model="company" type="text" placeholder="Company (optional)" style="border: 1px solid lightgrey; border-radius: 5px; padding: 2px 10px;">
                        <div class="input">
                            <input required v-model="card_number" type="text" placeholder="Card Number" style="flex: 2; border: 1px solid lightgrey; border-radius: 5px; padding: 2px 10px;">
                            <input required v-model="code" type="text" placeholder="Code" style="flex: 1; border: 1px solid lightgrey; border-radius: 5px; padding: 2px 10px;">
                        </div>
                        <div class="input">
                            <input required v-model="country" type="text" placeholder="Country" style="flex: 3; border: 1px solid lightgrey; border-radius: 5px; padding: 2px 10px;">
                            <input required v-model="state" type="text" placeholder="State" style="flex: 2; border: 1px solid lightgrey; border-radius: 5px; padding: 2px 10px;">
                            <input required v-model="zip" type="text" placeholder="Zip" style="flex: 1; border: 1px solid lightgrey; border-radius: 5px; padding: 2px 10px;">
                        </div>
                    </div>
                    <div class="card" style="flex-direction: column; gap: 20px; margin-bottom: 30px;">
                        <div style="align-items: center; width: 100%; display:flex; justify-content: space-between;">
                            <p></p>
                            <button type="submit" style="background: rgb(0, 102, 255); padding: 2px 25px; color: #fff; border: 0; border-radius: 3px;">Make Purchase</button>
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

    .input{
        display: flex; width: 100%; flex-basis: 100%; gap: 15px;
    }

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
        padding-bottom: 5px;
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
        .input{
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
                email: '',
                firstname: '',
                lastname: '',
                company: '',
                card_number: '',
                code: '',
                country: '',
                state: '',
                zip: '',
                u_id: ''
            }
        },
        methods: {
            handleform(e){
                e.preventDefault()
                let cart_info = {
                    email: this.email,
                    address: this.ship_info.location,
                    type: this.ship_info.type,
                    firstname: this.firstname,
                    lastname: this.lastname,
                    company: this.company,
                    card: this.card_number,
                    code: this.code,
                    country: this.country,
                    state: this.state,
                    zip: this.zip,
                    user_id: this.u_id
                }

                axios.post(product_url + '/v1/address/record_user_shipping_info', cart_info)
                .then((response) => {
                    
                })

                axios.post(product_url + '/v1/order/record_user_order', {user_id: this.u_id})
                .then((response) => {
                    if(response.status === 200){
                        this.$store.state.myCartProductList.forEach((product) => {
                            let product_id = JSON.parse(JSON.stringify(product._id))
                            let order_id = response.data._id
                            let size = JSON.parse(JSON.stringify(product.size))
                            let quantity = JSON.parse(JSON.stringify(product.quantity))
                            let post_obj = {
                                order_id: order_id,
                                product_id: product_id,
                                size: size,
                                quantity: quantity
                            }
                            axios.post(product_url + '/v1/cart/record_user_cart', post_obj)
                        })
                        this.$swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Purchase succesful ...',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        window.setTimeout(() => {router.push('/')}, 2000)
                    }
                })
            }
        },
        components: {
            HeaderComponent: HeaderComponent,
            FooterComponent: FooterComponent
        },
        mounted(){
            axios.get(product_url + '/v1/client/me', {withCredentials: true})
              .then((response) => {
                  if(response.status === 201 && this.ship_info.location) {
                    this.u_id = response.data.user.data._id
                    router.push('/payment')
                  }
                  else router.push('/shipping')
              })
              .catch((err) => router.push('/login'))
        },
        computed: {
            ship_info(){
                return JSON.parse(JSON.stringify(this.$store.state.myAddress))
            }
        },
    }
</script>