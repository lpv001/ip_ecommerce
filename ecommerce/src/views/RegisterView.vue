<template>
  <div class="alig">
    <div class="container">
      <h1 class="title">Register</h1>
      <form>
        <input v-model="username" type="text" class="form-control" name="username" placeholder="Username">
        <input v-model="email" type="text" class="form-control" name="username" placeholder="Email">
        <input v-model="password" type="password" class="form-control" name="password" placeholder="Password">
        <input @click="register" class="btn" value="Register">
        <p class="mt-[5px] text-blue-900 cursor-pointer"><RouterLink to="/login">Login</RouterLink></p>
      </form>
      <p class="h-[20px] text-sm font-light text-gray-500 dark:text-gray-400">
        {{ (exception) ? (exception) : (null) }}
      </p>
    </div>
  </div>
</template>

<style>
.alig{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}

.container {
  width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

.form-control {
  width: 100%;
  padding: 8px 12px;
  margin: 8px 0;
  display: block;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
}

.btn {
  background-color: #000;
  color: #fff;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

.btn:hover {
  background-color: #444;
}
</style>


<script>

  import axios from 'axios'
  import { product_url } from '../url'
  import router from '../router'

  export default {
    data(){
        return {
            email: '',
            password: '',
            username: ''
        }
    },
    methods: {
        register(){
          const request_data = {email: this.email, password: this.password, username: this.username}
          axios.post(product_url + '/v1/client/register', request_data)
            .then((response) => {
              if (response.status === 201)
                router.push('/shipping')
            })
        }
    },  
    mounted(){
        window.scrollTo(0,0)
        axios.get(product_url + '/v1/client/me', {withCredentials: true})
            .then((response) => {
                if(response.status === 201) router.push('/list_product')
            })
    }
}

</script>