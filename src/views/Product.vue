<template>
    <div class="about">
      <h1>crear</h1>
    </div>
  <div class="card-body">
    <form>
      <div class="d-grid col-6 mx-auto mb-3">

      </div>
      <div class="input-group mb-3">
        <span class="input-group-text"></span>

      </div>
    </form>
  </div>
  </template>

  <script>

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