<template>
  <div class="about">
    <h1>crear</h1>
  </div>
  <div class="card-body">
    <form v-on:submit="addProductos">
      <div class="d-grid col-6 mx-auto mb-3">

      </div>
      <div class="input-group mb-3">
        <span class="input-group-text"></span>
        <input type="text" placeholder="nombre" v-model="name">
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text"></span>
        <input type="text" placeholder="descripcion" v-model="description">
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text"></span>
        <input type="text" placeholder="precio" v-model="price">
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text"></span>
        <input type="text" placeholder="stock" v-model="stock">
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text"></span>
        <input type="text" placeholder="imagen" v-model="image">
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text"></span>
        <input type="text" placeholder="id_categoria" v-model="id_category">
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text"></span>
        <input type="text" placeholder="id_user" v-model="id_user">
      </div>
      <button type="submit">Crear</button>
    </form>
  </div>
</template>

<script>
import {enviarsolicitud} from '../functions'

export default {
  data() {
    return {
      productos: null,
      cargando: false,
      name: '',
      description:'',
      price:'',
      stock:'',
      image:'',
      id_category:'',
      id_user:'',
      url:'http://127.0.0.1:8000/api/product/createProduct'
    }
  },
  methods: {
    addProductos() {
      event.preventDefault();
      
      if(this.name.trim()===''){
       console.log("No debe dejar el campo nombre vacio");
      }else if(this.description.trim()===''){
       console.log("No debe dejar el campo descripcion vacio");
      }else{
        var parametros = {name:this.name.trim(),description:this.description.trim(),price:this.price.trim(),stock:this.stock.trim(),image:this.image.trim(),id_category:this.id_category.trim(),id_user:this.id_user.trim()}
        enviarsolicitud('POST',parametros,this.url,'Producto enviado');
      }
      this.cargando = true;

    }
  }
}

</script>