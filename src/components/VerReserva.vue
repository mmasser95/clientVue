<template lang="pug">
  .VerReserva
    .container-fluid
      .card
        .card-header
          h2.text-center="{{item._id}}"
        .card-body
          .row
            .col-lg
              
            .col-lg-6
              table.table.table-hover
                tr
                  th="Renta: "
                  td="{{item.renta.$numberDecimal}}€"
                tr
                  th="Fecha de Entrada: "
                  td="{{item.fecha_entrada}}"
            .col-lg
        .card-footer
          p.text-center.text-secondary="{{item.tipo}}"

</template>

<script>
import {APIService} from '../APIService';
const apiService = new APIService();
export default {
  name:"VerReserva",
  props:{
    id:String
  },
  data:() => {
    return{
      item:{}
    }
  },
  methods:{
    getReserva(){
      apiService.getReserva(this.id).then((res) => {
        this.item=res.data
      });
    }
  },
  mounted(){
    this.getReserva()
  }
}
</script>

<style>

</style>
