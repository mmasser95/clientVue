<template lang="pug">
  div
    b-form(
      @submit="sub",
      )
      .row
        .col-lg
          b-form-group#nombre-g(
            label="Nombre: ",
            label-for="nombre"
          )
            b-form-input#nombre(
              type="text",
              v-model="form.nombre",
              required,
              placeholder="Nombre"
            )
        .col-lg
          b-form-group#apellidos-g(
            label="Apellidos: ",
            label-for="apellidos"
          )
            b-form-input#apellidos(
              type="text",
              v-model="form.apellidos",
              required,
              placeholder="Apellidos"
            )
      .row
        .col-lg
          b-form-group#direccion-g(
            label="Direccion: ",
            label-for="direccion"
          )
            b-form-input#direccion(
              type="text",
              v-model="form.direccion",
              required,
              placeholder="Direccion"
            )

      b-form-group#email-g(
        label="Email: ",
        label-for="email"
      )
        b-form-input#email(
          type="email",
          v-model="form.email",
          required,
          placeholder="Email"
        )
      b-button.w-100(
        type="submit",
        variant="primary"
      )="Enviar"
        
</template>

<script>
import {APIService} from '../APIService';
const apiService = new APIService();
export default {
  name:'AnadirInquilino',
  data:() => {
    return{
      form:{
        nombre:'',
        apellidos:''
      }
    }
  },
  methods:{
    sub(event){
      event.preventDefault();
      apiService.postInquilino(this.form).then((data) => {
        alert(JSON.stringify(data))
      })
    }
  }
}
</script>
