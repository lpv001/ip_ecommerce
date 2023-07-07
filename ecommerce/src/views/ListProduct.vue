<template>
    <div class="wapper">
        <admin-sidebar />
        <div class="listing">
            <div class="box">
                <img src="../assets/images/amazon.jpeg" alt="">
                <div class="description">
                    <h1>Product name: Jinro</h1>
                    <p>Brand: Louis</p>
                    <p>Description: No</p>
                    <p>Price: 12$</p>
                    <div class="buttons">
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                </div>
            </div>
            <div class="box">
                <img src="../assets/images/amazon.jpeg" alt="">
                <div class="description">
                    <h1>Product name: Jinro</h1>
                    <p>Brand: Louis</p>
                    <p>Description: No</p>
                    <p>Price: 12$</p>
                    <div class="buttons">
                        <button>Edit</button>
                        <button>Delete</button>
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
export default {
    components: {
        AdminSidebar: AdminSidebar
    }
}
</script>