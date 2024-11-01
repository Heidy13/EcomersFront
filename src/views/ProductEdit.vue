<template>
    <div class="about">
      <h1>editar</h1>
    </div>
  </template>
  
  <script>

  import axios from 'axios';

  export default {
    data () {
      return {
        productos:null,
        cargando:false

      }
    },
    mounted () {
      this.getProductos();
    },
    methods:{
      getProductos () {
        this.cargando = true;
        axios.get('http://127.0.0.1:8000/api/product/productAll').then (
          res => {
            this.productos = res.data;  
            this.cargando = false
            console.log(res);
          },
        );
      }
    }
  }

</script>