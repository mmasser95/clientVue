<template lang="pug">
  .VerPropietario
    .container-fluid
      .card
        .card-header
          h2.text-center="{{item.nombre}}"
        .card-body
        .card-footer

</template>

<script>
import {APIService} from '../APIService';
const apiService = new APIService();
export default {
  
	name:"VerPropietario",
	props:{
		id:String
	},
	data:() => {
		return{
      item:{}
    }
  },
  methods:{
    getPropietario(){
      apiService.getPropietario(this.id).then((res) => {
        this.item=res.data
      });
    }
  },
  mounted(){
    this.getPropietario()
  }
}
</script>
