<template>
    <div class="wapper">
        <admin-sidebar />
        <div class="create">
            <div className="form-container">
                <form onSubmit={handle_form} autoComplete="off" className="sign-in-form">
                <div className="input-field">
                    <label htmlFor="title">ProductName</label>
                    <input v-model="product_name" type="text"/>
                </div>
                <div className="input-field">
                    <label htmlFor="title">Brand</label>
                    <input v-model="brand" type="text"/>
                </div>
                <div className="input-field">
                    <label htmlFor="title">Price</label>
                    <input v-model="product_price" type="text"/>
                </div>
                <div className="radio-field">
                    <label htmlFor="title">CATEGORY</label>
                    <div className="arrange-radio">
                    <div className="selection"  @click="open_category" >
                        <p id="option-text">SELECT CATEGORY</p>
                        <div></div>
                    </div>
                    <div className="radio-container" id="category_holder">
                        <div className="radio">
                        <input @change="category = $event.target.value" type="radio" value="SHOES" name="category" id="dg" v-model="category" />
                        <label @click="set_category('SHOES')" for="dg">SHOES</label>
                        </div>
                        <div className="radio">
                        <input @change="category = $event.target.value" type="radio" value="DRESS" name="category" id="bc" v-model="category" />
                        <label @click="set_category('DRESS')" for="bc">DRESS</label>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="image-field">
                    <label htmlFor="">IMAGE</label>
                    <input @change="handle_image" type="file" className='custom-file-input' />
                </div>
                <div className="image-field">
                    <label htmlFor="">Op1</label>
                    <input @change="handle_op1" type="file" className='custom-file-input' />
                </div>
                <div className="image-field">
                    <label htmlFor="">Op2</label>
                    <input @change="handle_op2" type="file" className='custom-file-input' />
                </div>
                <div className="image-field">
                    <label htmlFor="">Op3</label>
                    <input @change="handle_op3" type="file" className='custom-file-input' />
                </div>
                <div className="paragraph-field">
                    <label htmlFor="">Description</label>
                    <textarea v-model="description"></textarea>
                </div>
                <button @click="create_product">SUBMIT PRODUCT FORM</button>
                </form>
            </div>
        </div>
    </div>
</template>

<style>

.wapper {
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.create {
  position: relative;
  padding: 20px;
  width: 100%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  overflow: scroll;
}

.create .path-container {
  margin-bottom: 16px;
}

.create .path-container h4 {
  font-size: 24px;
  font-weight: 500;
  color: #012970;
}

.create .path-container p {
  font-size: 14px;
  color: #4f6286;
}

.create .path-container p span:nth-child(1) {
  color: #899bbd;
}

.create .path-container p span:nth-child(2) {
  color: #51678f;
}

.create .form-container {
  background: #fff;
  padding: 20px;
  border-radius: 12px;
}

.create .form-container .input-field {
  display: flex;
  margin-bottom: 20px;
}

.create .form-container label {
  color: #444444;
  line-height: 1.5;
  padding: 7px 12px;
  width: 150px;
}

.create .form-container .input-field input {
  padding: 6px 12px;
  width: 100%;
  border-radius: 10px;
  border: 1px solid silver;
  color: #212529;
  font-size: 16px;
}

.create .form-container .radio-field {
  display: flex;
  margin-bottom: 20px;
}

.create .form-container .radio-field .arrange-radio {
  border: 1px solid silver;
  width: 100%;
  padding: 6px 12px;
  border-radius: 10px;
  position: relative;
}

.create .form-container .radio-field .arrange-radio .selection {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  user-select: none;
}

.create .form-container .radio-field .arrange-radio .selection p {
  color: #212529;
  letter-spacing: 1.5;
}

.create .form-container .radio-field .arrange-radio .selection div {
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  width: 10px;
  height: 10px;
  transform: rotate(-45deg);
  margin-bottom: 5px;
}

.create .form-container .radio-field .arrange-radio .radio-container {
  position: absolute;
  width: 100%;
  background: #212529;
  border-radius: 10px;
  top: 40px;
  left: 0;
  padding: 10px;
  display: flex;
  flex-direction: column;
  display: none;
}

.create .form-container .radio-field .arrange-radio .radio-container .radio {
  padding: 6px 12px;
  cursor: pointer;
}

.create .form-container .radio-field .arrange-radio .radio-container .radio:hover {
  background: #3b434b;
}

.create .form-container .radio-field .arrange-radio .radio-container .radio label {
  color: #fff;
}

.create .form-container .radio-field .arrange-radio .radio-container .radio input {
  display: none;
}

.create .form-container .image-field {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.create .form-container .image-field input {
  width: 100%;
  border-radius: 10px;
  border: 1px solid silver;
}

.custom-file-input::-webkit-file-upload-button {
  visibility: hidden;
}
.custom-file-input::before {
  content: 'Select some files';
  display: inline-block;
  border-radius: 3px;
  padding: 6px 10px;
  outline: none;
  white-space: nowrap;
  -webkit-user-select: none;
  cursor: pointer;
  background: #32333b;
  color: #fff;
}
.custom-file-input:hover::before {
  border-color: black;
}
.custom-file-input:active::before {
  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
}

.create .form-container .paragraph-field {
  display: flex;
  margin-bottom: 20px;
}

.create .form-container .paragraph-field textarea {
  width: 100%;
  height: 300px;
  border: 1px solid silver;
  border-radius: 10px;
  padding: 10px;
  resize: none;
  font-size: 16px;
}

.create .form-container button {
  margin-top: 40px;
  width: 100%;
  padding: 10px 0;
  border: none;
  border-radius: 20px;
  background: #29282e;
  cursor: pointer;
  color: #fff;
}

.create .form-container button:hover {
  background: #2e383d;
}

.preview {
  display: flex;
  margin: 20px 0;
  height: 120px;
  aspect-ratio: 16/9;
  border: 1px solid silver;
  border-radius: 15px;
  overflow: hidden;
}

.preview label {
  display: none;
}

.preview img {
  aspect-ratio: 16/9;
  height: 120px;
}

.last-preview {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.last-preview img {
  aspect-ratio: 16/9;
  width: 400px;
}

@media (max-width: 1200px) {
  .create {
    margin-left: 0;
  }
}

@media (max-width: 764px) {
  .create .form-container .paragraph-field,
  .create .form-container .input-field,
  .create .form-container .radio-field {
    flex-direction: column;
  }

  .preview label {
    display: none;
  }

  .create .form-container label {
    padding: 6px 0;
  }
}
</style>

<script>

var trigger = false
var form_data = new FormData()

import AdminSidebar from '../components/AdminSidebar.vue'
import { product_url } from '../url'
import axios from 'axios'

export default {
  components: {
    AdminSidebar: AdminSidebar
  },
  data(){
      return {
          product_name: '',
          brand: '',
          product_price: '',
          description: '',
          category: '',
          image: '',
          op1: '',
          op2: '',
          op3: ''
      }
  },
  methods: {
      create_product(e){
          e.preventDefault()
          const request_data = {
            product_name: this.product_name,
            product_price: this.product_price,
            brand: this.brand,
            image_path: this.image,
            op1: this.op1,
            op2: this.op2,
            op3: this.op3,
            product_description: this.description,
            category: this.category
          }
          try {
            axios.post(product_url + "/v1/upload/blogs_image", form_data, {headers: {"Content-Type": "multipart/form-data"}})
            axios.post(product_url + '/v1/product/create_product', request_data)
              .then((response) => {
                if (response.status === 200) alert('create success')
              })
          } catch (error) {
            alert('something went wrong')
          }

      },
      open_category(){
          let category = document.getElementById('category_holder')
          trigger = !trigger
          if (trigger){
              category.style.display = "flex"
          }else{
              category.style.display = "none"
          }
      },
      set_category(value){
          let option_text = document.getElementById('option-text')
          let category = document.getElementById('category_holder')
          option_text.innerHTML = value
          category.style.display = "none"
          trigger = false
      },
      handle_image(e){
        this.image = Date.now() + '-' + e.target.files[0].name
        const main_image = new File([e.target.files[0]], this.image, {type: e.target.files[0].type})
        form_data.append('image', main_image)
      },
      handle_op1(e){
        this.op1 = Date.now() + '-' + e.target.files[0].name
        const op1_image = new File([e.target.files[0]], this.op1, {type: e.target.files[0].type})
        form_data.append('image', op1_image)
      },
      handle_op2(e){
        this.op2 = Date.now() + '-' + e.target.files[0].name
        const op2_image = new File([e.target.files[0]], this.op2, {type: e.target.files[0].type})
        form_data.append('image', op2_image)
      },
      handle_op3(e){
        this.op3 = Date.now() + '-' + e.target.files[0].name
        const op3_image = new File([e.target.files[0]], this.op3, {type: e.target.files[0].type})
        form_data.append('image', op3_image)
      },
  },
  mounted(){
    axios.get(product_url + '/v1/user/me', {withCredentials: true})
            .then((response) => {
                if(response.status === 201) router.push('/list_product')
            })
            .catch((err) => {router.push('/adminlogin')})
    axios.get(product_url + '/v1/user/me', {withCredentials: true})
            .then((response) => {
                if(response.status === 201) router.push('/list_product')
            })
  }
}
</script>