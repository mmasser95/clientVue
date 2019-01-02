<template lang="pug">
  .VerInmueble
    .container-fluid
      .card
        .card-header
          h2.text-center="{{item._id}}"
        .card-body
          .row
            .col-lg
            .col-lg-8
              table.table
                tr
                  th="Direccion: "
                  td="{{item.direccion}}, {{item.numero}}, {{item.escalera}}"
                tr
                  th="Renta: "
                  td="{{item.renta}}€"
            .col-lg
        .card-footer
          .text-info.text-center="{{item.poblacion}}, {{item.provincia}} ({{item.cp}})"

</template>

<script>
import {APIService} from '../APIService';
const apiService = new APIService();
export default {
    name:'VerInmueble',
    props:{
      id:String
    },
    data:() => {
      return{
        item:{}
      }
    },
  methods:{
    getInmueble(){
      apiService.getInmueble(this.id).then((res) => {
          this.item=res.data
      })
    }
  },
  mounted(){
    this.getInmueble()
  }
}
</script>
