<template>
  <footer>
    <div class="left">
      <h1>JEANNA SHOP</h1>
      <p>Find yourself by visit our</p>
      <span>shop</span>
    </div>
    <div class="middle">
      <h2>Category</h2>
      <div class="list">
        <p>SHIRT</p>
        <p>SHOES</p>
        <p>DRESS</p>
      </div>
    </div>
    <div class="right">
      <h2>Address</h2>
      <div class="list">
        <p>South Africa, The US</p>
        <p>tel +133232123</p>
      </div>
    </div>
  </footer>
</template>

<style>
footer {
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 250px;
  width: 100%;
  background: linear-gradient(to bottom, #000, rgb(0, 0, 0));
  padding: 0 120px;
}
footer h1 {
  font-size: 32px;
  margin-bottom: 30px;
  font-weight: 600;
}
footer h2 {
  font-size: 24px;
  margin-bottom: 20px;
}
footer p {
  font-size: 14px;
  margin-bottom: 10px;
}
</style>