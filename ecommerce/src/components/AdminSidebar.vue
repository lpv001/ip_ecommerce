<template>
  <div class="sidebar">
    <li>List Product</li>
    <li>Create Product</li>
    <li>Logout</li>
  </div>
</template>

<style>
.sidebar{
    position: fixed;
    width: 300px;
    top: 0;
    left: 0;
    background: rgb(17, 17, 17);
    height: 100vh;
    padding: 40px 20px 20px 20px;
    position: relative;
    border-right: 2px solid #000;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}

.sidebar li{
    list-style: none;
    color: #fff;
    width: 100%;
    padding: 10px 15px;
    border-radius: 10px;
    cursor: pointer;
}

.sidebar li:hover{
    background: #fff;
    color: #000;
}
</style>