<template>
  <header>
    <div class="even-column">
      <h1>JEANIA SHOP</h1>
      <i id="hamburger" @click="nav_handle()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </i>
      <ul id="nav">
        <li><RouterLink to="/">SHOP</RouterLink></li>
        <li><RouterLink to="/shoes">SHOES</RouterLink></li>
        <li><RouterLink to="/dress">DRESS</RouterLink></li>
      </ul>
    </div>
    <div class="even-column">
      <i>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </i>
      <i id="cart">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
          @click="handle_cart"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
        <span id="number">{{ countOfCartProducts }}</span>
        <div class="check-out" id="check-out">
          <h4>Item Added To Cart</h4>
          <hr>
          <div class="list" v-for="cart in cartProductInfo" :key="cart._id">
            <p>{{cart.product_name}}({{ cart.size }})</p>
            <p>Quantity: {{ cart.quantity }}</p>
          </div>
          <div class="button-ct">
            <button @click="go_to_cart">View Cart</button>
            <button @click="go_to_checkout">Checkout</button>
          </div>
        </div>
      </i>
    </div>
  </header>
</template>




<style>


#number{
  position: absolute;
  top: -4px;
  right: -2px;
  background: rgb(145, 128, 240);
  font-size: 8px;
  border-radius: 50%;
  padding: 0 5px;
  color: #fff;
}

#cart{
  position: relative;
}

.check-out{
  position: absolute;
  top: 35px;
  right: -8px;
  width: 260px;
  height: fit-content;
  border: 1px solid lightslategray;
  border-radius: 20px;
  background: #fff;
  padding: 10px;
  color: #000;
  display: none;
}

.check-out hr{
  margin-bottom: 15px;
}

.check-out .list{
  margin-bottom: 5px;
}

.check-out h4,
.check-out p{
  font-size: 12px;
}

.check-out .button-ct{
  display: flex;
  flex-basis: 100%;
  gap: 10px;
  width: 100%;
  margin-top: 10px;
}

.check-out .button-ct button{
  font-size: 12px;
  border: 1px solid black;
  border-radius: 5px;
  width: 100%;
}

.check-out .button-ct button:nth-child(2){
  background: lightblue;
  color: #fff;
}

header {
  width: 100%;
  height: 80px;
  background: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 999;
  position: fixed;
}
header .even-column {
  display: flex;
  gap: 20px;
}
header .even-column h1 {
  font-size: 36px;
  color: #fff;
  cursor: pointer;
}
header .even-column ul {
  display: flex;
  align-items: center;
  gap: 10px;
}
header .even-column ul li {
  color: #fff;
  font-size: 16px;
  list-style: none;
  font-weight: 200;
  border-right: 1px solid silver;
  padding: 0 10px;
  cursor: pointer;
}
header .even-column ul li:nth-child(3) {
  border: none;
}

header .even-column i {
  width: 20px;
  height: 20px;
  color: silver;
  cursor: pointer;
}

#hamburger {
  width: 30px;
  height: 30px;
  align-self: center;
  cursor: pointer;
  display: none;
}

@media (max-width: 830px) {
  #hamburger {
    display: block;
  }

  header {
    position: fixed;
  }
  header .even-column:nth-child(1) {
    position: relative;
  }
  header .even-column ul {
    position: fixed;
    top: 80px;
    flex-direction: column;
    background: #2D2D2D;
    width: 300px;
    padding: 20px;
    height: 100vh;
    gap: 10px;
    left: 0;
    transform: translateX(-300px);
    transition: 0.5s ease-in-out;
  }
  header .even-column ul li {
    border: 0;
    padding: 10px 20px;
    width: 100%;
    border-radius: 10px;
  }
  header .even-column ul li:hover {
    background: #fff;
    color: #000;
  }

  main {
    padding-top: 80px;
  }
}
</style>

<script>

import router from '../router'

var trigger = true
var checkout = true

export default {
  name: 'header',
  methods: {
    nav_handle() {
      let nav = document.getElementById('nav')
      if (trigger) {
        nav.style.transform = 'translateX(0)'
        trigger = false
      } else {
        nav.style.transform = 'translateX(-300px)'
        trigger = true
      }
    },
    handle_cart(){
      let cart = document.getElementById('check-out')
      if (checkout){
        cart.style.display = "block"
        checkout = false
      }else{
        cart.style.display = "none"
        checkout = true
      }
    },
    go_to_cart(){
      router.push('/cart')
      checkout = true
    },
    go_to_checkout(){
      router.push('/shipping')
      checkout = true
    }
  },
  computed: {
    countOfCartProducts(){
      return this.$store.state.myCartProductList.length
    },
    cartProductInfo(){
      return this.$store.state.myCartProductList
    }
  },
}
</script>