<template lang="pug">
  .hello
    ul.nav.nav-pills
      li.nav-item
        a.nav-link(
          href="#",
          v-on:click="getPisos"
        )="Pisos"
      li.nav-item
        a.nav-link(
          href="#",
          v-on:click="getInquilinos"
        )="Inquilinos"
      
    
    b-table(
      striped,
      hover,
      :items="items",
      :fields="ths"
    )
        
</template>

<script>
import {APIService} from '../APIService';
const apiService = new APIService();

export default {
  name: 'Ver',
  data:() =>{
    return {
      items:[],
      ths:[],
      w:""
    }
  },
  methods:{
    getPisos(){
      apiService.getPisos().then((data) => {
        this.items=data.pisos
        this.ths=["_id","direccion", "renta"]
        this.w="pisos"
      })
    },
    getInquilinos(){
      apiService.getInquilinos().then((data) => {
        this.items=data.inquilinos
        this.ths=["email", "direccion"]
        this.w="inquilinos"
      })
    },
    getPropietarios(){
      apiService.getPropietarios().then((data) => {
        this.items=data.propietarios
      })
    },
    getInmuebles(){
      apiService.getInmuebles().then((data) => {
        this.items=data.inmuebles
      })
    }
  }
}
</script>

