<template lang="pug">
  .hello
    h1="{{msg}}"
    table.table.table-striped
      tr
        th="Direccion"
        th="Renta"
      tr(v-for="piso in pisos")
        td="{{piso.direccion}}"
        td="{{piso.renta}}"
</template>

<script>
import {APIService} from '../APIService';
const apiService = new APIService();

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data:() =>{
    return {
      pisos:[]
    }
  },
  methods:{
    getPisos(){
      apiService.getPisos().then((data) => {
        this.pisos=data.pisos
      })
    }
  },
  mounted(){
    this.getPisos()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
