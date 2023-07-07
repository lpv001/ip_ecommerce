<template>
    <header-component />
    <main>
        <div class="align-box">
            <div class="tag">
                <span>Home > Category > </span>
                <span>Product Title</span>
            </div>
            <div class="product-box">
                <div class="product-image">
                    <div class="main-img">
                        <img src="../assets/images/amazon.jpeg">
                    </div>
                    <div class="bottom-img">
                        <div class="box">
                            <img src="../assets/images/amazon.jpeg">
                        </div>
                        <div class="box">
                            <img src="../assets/images/amazon.jpeg">
                        </div>
                        <div class="box">
                            <img src="../assets/images/amazon.jpeg">
                        </div>
                    </div>
                </div>
                <div class="product-detail">
                    <h1>Gennility Bag Page</h1>
                    <h6>(Limited Edition)</h6>
                    <hr />
                    <div class="size">
                        <p>Size</p>
                        <p>Custom Size</p>
                    </div>
                    <div class="align-submit">
                        <div class="button">
                            <button>XS</button>
                            <button>S</button>
                            <button>M</button>
                        </div>
                        <hr />
                        <h5>Quantity</h5>
                        <div class="quantity">
                            <div>1</div>
                            <div>+</div>
                            <div>-</div>
                        </div>
                        <hr />
                        <div class="price">
                            <p>Total Price:</p>
                            <p>$9500</p>
                        </div>
                        <button id="add_to_card">ADD TO CART</button>
                    </div>
                </div>
            </div>
            <div class="related">
                <h2>RELATED PRODUCT</h2>
                <div class="related-box">
                    <div class="box">
                        <div class="image">
                            <img src="../assets/images/amazon.jpeg" >
                        </div>
                        <div class="text">
                            <h6>Sneaker Red</h6>
                            <span>From $1200</span>
                            <p>Gucci</p>
                        </div>
                    </div>
                    <div class="box">
                        <div class="image">
                            <img src="../assets/images/amazon.jpeg" >
                        </div>
                        <div class="text">
                            <h6>Sneaker Red</h6>
                            <span>From $1200</span>
                            <p>Gucci</p>
                        </div>
                    </div>
                    <div class="box">
                        <div class="image">
                            <img src="../assets/images/amazon.jpeg" >
                        </div>
                        <div class="text">
                            <h6>Sneaker Red</h6>
                            <span>From $1200</span>
                            <p>Gucci</p>
                        </div>
                    </div>
                    <div class="box">
                        <div class="image">
                            <img src="../assets/images/amazon.jpeg" >
                        </div>
                        <div class="text">
                            <h6>Sneaker Red</h6>
                            <span>From $1200</span>
                            <p>Gucci</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <footer-component />
</template>

<style>
    .align-box{
        padding: 60px 30px;
    }
    .align-box .tag{
        margin-bottom: 20px;
    }
    .align-box .tag span:nth-child(2){
        font-weight: 600;
    }
    .align-box .product-box{
        display: flex;
        flex-basis: 100%;
        gap: 20px;
        margin-bottom: 80px;
    }
    .align-box .product-box .product-image{
        flex: 3;
        border: 1px solid grey;
        display: flex;
        flex-direction: column;
    }
    .align-box .product-box .product-image .main-img
    {
        height: 400px;
        overflow: hidden;
        object-fit: cover;
        cursor: pointer;
    }
    .align-box .product-box .product-image .main-img img{
        object-fit: cover;
        height: 100%;
        width: 100%;
    }
    .align-box .product-box .product-image .bottom-img
    {
        height: 150px;
        border-top: 1px solid black;
        padding: 20px;
        display: flex;
        gap: 20px;
        object-fit: cover;
        overflow: hidden;
    }
    .align-box .product-box .product-image .bottom-img .box{
        object-fit: cover;
        height: 100%;
    }
    .align-box .product-box .product-image .bottom-img .box img{
        height: 100%;
        object-fit: cover;
        cursor: pointer;
    }
    .align-box .product-box .product-detail{
        flex: 2;
    }
    .align-box .product-box .product-detail h1{
        font-weight: 700;
        font-size: 24px;
    }
    .align-box .product-box .product-detail h6{
        font-size: 18px;
    }
    .align-box .product-box .product-detail hr{
        margin: 10px 0;
    }
    .align-box .product-box .product-detail .size{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        font-size: 14px;
        margin-bottom: 20px;
    }
    .align-box .product-box .product-detail .size p:nth-child(2){
        text-decoration: underline;
        color: blue;
    }
    .align-box .product-box .product-detail .align-submit{
        width: 75%;
    }
    .align-box .product-box .product-detail .align-submit .button{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .align-box .product-box .product-detail .align-submit .button button{
        border: 1px solid gray;
        width: 100px;
        height: 25px;
    }
    .align-box .product-box .product-detail .align-submit hr{
        margin-top: 30px;
    }
    .align-box .product-box .product-detail .align-submit h5{
        margin: 15px 0 !important;
        font-size: 14px;
    }
    .align-box .product-box .product-detail .align-submit .quantity{
        display: flex;
        margin-bottom: 50px;
    }
    .align-box .product-box .product-detail .align-submit .quantity div{
        width: 25px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid gray
    }
    .align-box .product-box .product-detail .align-submit .quantity div:nth-child(1){
        border-right: none;
        width: 125px;
    }
    .align-box .product-box .product-detail .align-submit .quantity div:nth-child(2){
        border-right: none;
        background: #000;
        color: #fff;
        cursor: pointer;
    }
    .align-box .product-box .product-detail .align-submit .quantity div:nth-child(3){
        background: #000;
        color: #fff;
        cursor: pointer;
    }
    .align-box .product-box .product-detail .align-submit .price{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        font-size: 14px;
        margin-bottom: 180px;
    }
    #add_to_card{
        width: 100%;
        height: 40px;
        background: purple;
        border-radius: 20px;
        color: #fff;
    }

    @media ( max-width: 830px ){
        .align-box{
            padding: 40px 20px;
        }
        .align-box .product-box{
            flex-direction: column;
        }
        .align-box .product-box .product-image .main-img{
            height: 350px;
        }
        .align-box .product-box .product-image .bottom-img{
            height: 120px;
        }
        .align-box .product-box .product-detail{
            position: relative;
        }
        #add_to_card{
            position: absolute;
            width: 100%;
            bottom: 40px;
        }
    }

    @media ( max-width: 550px ){
        .align-box .product-box .product-image .main-img{
            height: 280px;
        }
        .align-box .product-box .product-image .bottom-img{
            height: 90px;
        }
        #add_to_card{
            bottom: 80px;
        }
    }

    .align-box .related{
        padding: 0 60px;
    }

    .align-box .related h2{
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 24px;
    }

  .align-box .related .related-box{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 30px;
  }
  .align-box .related .related-box .box{
  }
  .align-box .related .related-box .box .image{
    height: 150px;
    border-radius: 10px;
    overflow: hidden;
  }
  .align-box .related .related-box .box .image img{
    width: 100%;
    object-fit: cover;
  }
  .align-box .related .related-box .box .text{
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  .align-box .related .related-box .box .text h6{
    font-size: 18px;
    font-weight: 600;
  }
  .align-box .related .related-box .box .text span{
    color: rgb(26, 126, 26);
    margin-bottom: 20px;
    font-size: 14px;
  }
  .align-box .related .related-box .box .text p{
    padding: 10px 0;
    font-size: 14px;
  }

  @media (max-width: 1200px){
    .align-box .related .related-box{
    }
  }

  @media (max-width: 1000px){
    .align-box .related .related-box{
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media (max-width: 830px){
    .align-box .related{
        padding: 0 20px;
    }
    .align-box .related .related-box{
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 550px){
    .align-box .related{
        padding: 0 10px;
    }
    .align-box .related .related-box{
      grid-template-columns: 1fr;
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