<template lang="pug">
  div
    h1="Hola cabrones"
    b-form(
      @submit="sub",
      @reset="reset",
      v-if="show"
    )
      b-form-group#direccion-g(
        label="Direccion: ",
        label-for="direccion"
      )
        b-form-input#direccion(
          type="text",
          v-model="form.direccion",
          required,
          placeholder="Direccion del piso"
        )
      b-form-group#renta-g(
        label="Renta: ",
        label-for="renta",
      )
        b-form-input#renta(
          type="number",
          v-model="form.renta",
          required,
          placeholder="€/mes"
        )
      b-form-group#tipo-g(
        label="Tipo: ",
        label-for="tipo"
      )
        b-form-select#tipo(
          v-model="form.tipo",
          :options="datatipo"
        )
      b-form-group#descripcion-g(
        label="Descripción: "
        label-for="descripcion"
      )
        b-form-textarea#descripcion(
          v-model="form.descripcion",
          placeholder="Introduce una descripción",
          :rows=3,
          :max-rows=6
        )
      b-button(
        type="submit",
        variant="primary"
        )="Enviar"
      
</template>

<script>
import {APIService} from '../APIService';
const apiService = new APIService();
export default {
  name:'AnadirPiso',
  data:() => {
    return{
      form:{
        direccion:'',
        renta:0,
        tipo:null,
        descripcion:''
      },
      datatipo:[
        {value:"Piso", text:"Piso"},
        {value:"Adosado", text:"Adosado"}
      ],
      show:true
    }
  },
  methods:{
    sub(event){
      event.preventDefault();
      alert(JSON.stringify(this.form))
      apiService.postPiso(this.form).then((data) => {
        alert(JSON.stringify(data.status))
      })
    },
    reset(){

    }
  }
}
</script>
