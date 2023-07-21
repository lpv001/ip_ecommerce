<template>
    <header-component />
    <main>
        <div class="align-box">
            <h2>Your Cart</h2>
            <div class="product-box">
                <div class="list-product">
                    <div class="card">
                        <div class="image-container">
                            <p>Item</p>
                        </div>
                        <p>Price</p>
                        <div class="quantity">
                            <p>Quantity</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="image-container">
                            <img src="../assets/images/amazon.jpeg" >
                            <div class="des">
                                <p>Title: Luxury Bag</p>
                                <p>Size: Small</p>
                            </div>
                        </div>
                        <p>$200.00</p>
                        <div class="quantity">
                            <p>1</p>
                        </div>
                    </div>
                    <div class="hr">
                        <p>
                            <span style="font-weight: 400;">Subtotal: </span>
                            <span style="font-weight: 600;">500$</span>
                        </p>
                    </div>
                    <div class="card">
                        <div class="image-container">
                            <img src="../assets/images/amazon.jpeg" >
                            <div class="des">
                                <p>Title: Luxury Bag</p>
                                <p>Size: Small</p>
                            </div>
                        </div>
                        <p>$200.00</p>
                        <div class="quantity">
                            <p>1</p>
                        </div>
                    </div>
                    <div class="hr">
                        <p>
                            <span style="font-weight: 400;">Subtotal: </span>
                            <span style="font-weight: 600;">500$</span>
                        </p>
                    </div>
                    <div class="card">
                        <div class="image-container">
                            <img src="../assets/images/amazon.jpeg" >
                            <div class="des">
                                <p>Title: Luxury Bag</p>
                                <p>Size: Small</p>
                            </div>
                        </div>
                        <p>$200.00</p>
                        <div class="quantity">
                            <p>1</p>
                        </div>
                    </div>
                    <div class="hr">
                        <p>
                            <span style="font-weight: 400;">Subtotal: </span>
                            <span style="font-weight: 600;">500$</span>
                        </p>
                    </div>
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
                    <hr />
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

    export default {
        name: 'detail',
        data (){
            return {}
        },
        components: {
            HeaderComponent: HeaderComponent,
            FooterComponent: FooterComponent
        }
    }
</script>