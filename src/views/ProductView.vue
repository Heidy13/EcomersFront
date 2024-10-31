<template>
  <div class="row">
    <div class="col-lg-8 offset-lg-2">
      <div class="table-responsive">
        <table class="table table-dark table-borderless">
          <thead>
            <tr>
              <th>#id</th>
              <th>name</th>
              <th>description</th>
              <th>price</th>
              <th>stock</th>
            </tr>
          </thead>
          <tbody class="table-group-divider" id="contenido">
            <tr v-if="this.cargando">
              <td colspan="6"><h3>Cargando....</h3></td>
            </tr>
            <tr v-else v-for="pro, i in this.productos" :key="pro.id">
              <td v-text="(i+1)"></td>
              <td v-text="pro.name"></td>
              <td v-text="pro.description"></td>
              <td v-text="pro.price"></td>
              <td v-text="pro.stock"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
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