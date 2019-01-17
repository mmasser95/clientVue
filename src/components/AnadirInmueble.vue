<template lang="pug">
  .anadirinmueble
    b-form(
      @submit="sub"
    )
      .row
        .col-lg
          b-form-group#calle-g(
            label="Calle: ",
            label-for="calle"
          )
            b-form-input#calle(
              type="text",
              v-model="form.calle",
              required,
              placeholder="Calle"
            )
        .col-lg
          b-form-group#numero-g(
            label="Numero: ",
            label-for="numero"
          )
            b-form-input#numero(
              type="text",
              v-model="form.numero",
              required,
              placeholder="Numero"
            )
        .col-lg
          b-form-group#escalera-g(
            label="Escalera: ",
            label-for="escalera"
          )
            b-form-input#escalera(
              type="text",
              v-model="form.escalera",
              placeholder="Escalera"
            )
        .col-lg
          b-form-group#puerta-g(
            label="Puerta: ",
            label-for="puerta"
          )
            b-form-input#puerta(
              type="text",
              v-model="form.puerta",
              placeholder="Puerta"
            )
      .row
        .col-lg
          b-form-group#poblacion-g(
            label="Provincia: ",
            label-for="poblacion"
          )
            b-form-input#poblacion(
              type="text",
              v-model="form.poblacion",
              placeholder="Poblacion"
            )
        .col-lg
          b-form-group#provincia-g(
            label="Provincia: ",
            label-for="provincia"
          )
            b-form-input#provincia(
              type="text",
              v-model="form.provincia",
              placeholder="Provincia"
            )
      
      .row
        .col-lg
          b-form-group#renta-g(
            label="Renta: ",
            label-for="renta"
          )
            b-form-input#renta(
              type="text",
              v-model="form.renta",
              placeholder="Renta"
            )
        .col-lg
          b-form-group#fianza-g(
            label="Fianza: ",
            label-for="fianza"
          )
            b-form-input#fianza(
              type="text",
              v-model="form.fianza",
              placeholder="Fianza"
            )

      b-button.w-100(
        type="submit",
        variant="primary"
      )="Añadir Inmueble"
        
</template>
  
<script>
import {APIService} from '../APIService';
const apiService = new APIService();
export default {
  name:'Anadir Inmueble',
  data:() => {
    return{
      form:{
        calle:'',
        numero:'',
        escalera:'',
        puerta:'',
        poblacion:'',
        provincia:''
      }
    }
  },
  methods:{
    sub(event){
      event.preventDefault();
      apiService.postInmueble(this.form).then((result) => {
        alert(JSON.stringify(result))
      });
    }
  },
  mounted(){

  }
}
</script>

<style>

</style>
