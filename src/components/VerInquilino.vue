<template lang="pug">
  .VerInquilino
    .container-fluid
      .card
        .card-header
          h2.text-center="{{item.nombre}}"
        .card-body
          p.card-text="Direccion: {{item.direccion}}"
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
