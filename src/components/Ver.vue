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
      hover,
      responsive,
      :items="items",
      :fields="ths"
    )
      template(
        slot="link",
        slot-scope="data"
        variant="info"
      )
        router-link.btn.btn-primary(:to='"/verpiso/"+data.item._id', v-if="w==='pisos'")="Ver Piso"
        router-link.btn.btn-primary(:to='"/verinquilino/"+data.item._id', v-if="w==='inquilinos'")="Ver Inquilino"
        
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
        this.ths=["_id","direccion", "renta",{key:"link", label:"Link"}]
        this.w="pisos"
      })
    },
    getInquilinos(){
      apiService.getInquilinos().then((data) => {
        this.items=data.inquilinos
        this.ths=["email", "direccion",{key:"link", label:"Link"}]
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

