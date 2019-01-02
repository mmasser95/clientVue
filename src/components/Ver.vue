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
      li.nav-item
        a.nav-link(
          href="#"
          v-on:click="getPropietarios"
        )="Propietarios"
      li.nav-item
        a.nav-link(
          href="#"
          v-on:click="getInmuebles"
        )="Inmuebles"
      li.nav-item
        a.nav-link(
          href="#"
          v-on:click="getReservas"
        )="Reservas"
      li.nav-item
        a.nav-link(
          href="#"
          v-on:click="getPagos"
        )="Pagos"
      
    
    b-table(
      hover,
      primary,
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
        router-link.btn.btn-primary(:to='"/verpropietario/"+data.item._id', v-if="w==='propietarios'")="Ver Propietario"
        router-link.btn.btn-primary(:to='"/verinmueble/"+data.item._id', v-if="w==='inmuebles'")="Ver Inmueble"
        router-link.btn.btn-primary(:to='"/verreserva/"+data.item._id', v-if="w==='reservas'")="Ver Reserva"
        router-link.btn.btn-primary(:to='"/verpago/"+data.item._id', v-if="w==='pagos'")="Ver Pago"
        
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
        this.ths=["nombre", "apellidos", "email", {key:"link", label:"Link"}]
        this.w="propietarios"
      })
    },
    getInmuebles(){
      apiService.getInmuebles().then((data) => {
        this.items=data.inmuebles
        this.ths=["_id", "direccion", "renta", "poblacion", {key:"link", label:"Link"}]
        this.w="inmuebles"
      })
    },
    getReservas(){
      apiService.getReservas().then((data) => {
        this.items=data.reservas
        this.ths=["_id", "inmuebleId", "fecha_entrada", "fecha_salida", {key:"link", label:"Link"}]
        this.w="reservas"
      })
    },
    getPagos(){
      apiService.getPagos().then((data) => {
        this.items=data.pagos
        this.ths=["_id", "reservaId",{key:"link", label:"Link"}]
        this.w="pagos"
      })
    }
  }
}
</script>

