<template lang="pug">
  .veruno
    h1.text-center="{{id}}"
    .card
      .card-header
        h2.text-center="{{item.direccion}}"
      .card-body
        p="La renta del piso es de {{item.renta}}€"
      .card-footer
        p.text-secondary.text-center="{{item.tipo}}"

</template>

<script>
import {APIService} from '../APIService';
const apiService = new APIService();

export default {
  name:'VerPiso',
  props:{
    id:String
  },
  data:() => {
    return{
      item:{}
    }
  },
  methods:{
    getPiso(){
      apiService.getPiso(this.id).then((data) => {
        this.item=data
      })
    }
  },
  mounted(){
    this.getPiso()
  }
}
</script>

