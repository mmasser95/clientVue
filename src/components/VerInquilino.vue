<template lang="pug">
  .VerInquilino
    .container-fluid
      .card
        .card-header
          h2.text-center="{{item.nombre}} {{item.apellidos}}"
        .card-body
          .row
            .col-lg-3
            .col-lg
              table.table
                tr
                  th="Direccion: "
                  td="{{item.direccion}}"
                tr
                  th="Poblacion: "
                  td="{{item.poblacion}}"
                tr
                  th="CP: "
                  td="{{item.cp}}"
                tr
                  th="Provincia: "
                  td="{{item.provincia}}"
                
            
         
          
        .card-footer
          p.text-center.text-secondary="{{item.email}}"
</template>

<script>
import {APIService} from '../APIService';
const apiService = new APIService();

export default {
  name:"VerInquilino",
  props:{
    id:String
  },
  data:() => {
    return{
      item:{}
    }
  },
  methods:{
    getInquilino(){
      apiService.getInquilino(this.id).then((result) => {
        this.item=result.data
      });
    }
  },
  mounted(){
    this.getInquilino()
  }
}
</script>
