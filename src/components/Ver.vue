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
      
    table.table.table-striped
      tr
        th(v-for="t in ths")="{{t}}"
      tr(v-for="item in items")
        td(v-if="w==='pisos'")="{{item.direccion}}"
        td(v-if="w==='pisos'")="{{item.renta}}"
        td(v-if="w==='pisos'")
          router-link(:to="'/verpiso/'+item._id")="Link"
        td(v-if="w==='inquilinos'")="{{item.email}}"
        td(v-if="w==='inquilinos'")="{{item.direccion}}"
        td(v-if="w==='inquilinos'")
          router-link(:to="'/verinquilino/'+item._id")="Enviar"
        
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
        this.ths=["Direccion", "Renta", "Link"]
        this.w="pisos"
      })
    },
    getInquilinos(){
      apiService.getInquilinos().then((data) => {
        this.items=data.inquilinos
        this.ths=["Email", "Direccion", "Ver"]
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

