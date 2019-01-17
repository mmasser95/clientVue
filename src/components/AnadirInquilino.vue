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
      .row
        .col-lg
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
        .col-lg
          b-form-group#pass-g(
            label="Pass: ",
            label-for="pass"
          )
            b-form-input#pass(
              type="password",
              v-model="form.pass",
              required,
              placeholder="Pass"
            )
      
      .row
        .col-lg
          b-form-group#poblacion-g(
            label="Población: "
            label-for="poblacion"
          )
            b-form-input#poblacion(
              type="text"
              v-model="form.poblacion",
              placeholder="Población",
              required
            )
        .col-lg
          b-form-group#cp-g(
          label="CP: "
          label-for="cp"
          )
            b-form-input#cp(
              v-model="form.cp",
              type="number",
              placeholder="CP",
              required
            )
        
      .row
        .col-lg
          b-form-group#provincia-g(
            label="Provincia: "
            label-for="provincia"
          )
            b-form-input#provincia(
              v-model="form.provincia",
              type="text",
              placeholder="Provincia"
              required
            )
        .col-lg
          b-form-group#nacionalidad-g(
            label="Nacionalidad: "
            label-for="nacionalidad"
          )
            b-form-input#nacionalidad(
              v-model="form.nacionalidad",
              type="text",
              placeholder="Nacionalidad"
              required
            )
      .row
        .col-lg
          b-form-group#nif-g(
            label="NIF: ",
            label-for="nif"
          )
            b-form-input#nif(
              type="text"
              v-model="form.nif",
              placeholder="NIF",
              required
            )
      .row
        .col-lg
          b-form-group#estudios-g(
            label="Estudios: "
            label-for="estudios"
          )
            b-form-input#estudios(
              v-model="form.estudios",
              type="text",
              placeholder="Estudios"
            )
      
      .row
        .col-lg
          b-form-group#fecha_nacimiento-g(
            label="Fecha nacimiento: "
            label-for="fecha_nacimiento"
          )
            b-form-input#fecha_nacimiento(
              v-model="form.fecha_nacimiento",
              type="date",
              placeholder="Fecha nacimiento"
              required
            )
      
      .row
        .col-lg
          b-form-group#como_nos_conocio-g(
            label="Como nos conoció: "
            label-for="como_nos_conocio"
          )
            b-form-input#como_nos_conocio(
              v-model="form.como_nos_conocio",
              type="text",
              placeholder="Como nos conoció"
            )
      
      .row
        .col-lg
          b-form-group#descripcion-g(
            label="Descripción: "
            label-for="descripcion"
          )
            b-form-input#descripcion(
              v-model="form.descripcion",
              type="text",
              placeholder="Descripción"
              required
            )
      .row
        .col-lg
          b-form-group#telefono1-g(
            label="Teléfono: "
            label-for="telefono1"
          )
            b-form-input#telefono1(
              v-model="form.telefono1",
              type="tel",
              placeholder="Telf.",
              required
            )
        .col-lg
          b-form-group#telefono2-g(
            label="Teléfono secundario: "
            label-for="telefono2"
          )
            b-form-input#telefono2(
              v-model="form.telefono2",
              type="tel",
              placeholder="Telf.",
              required
            )
      
      

      b-button.w-100(
        type="submit",
        variant="primary"
      )="Añadir Inquilino"
        
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
        apellidos:'',
        email:'',
        nif:'',
        direccion:'',
        poblacion:'',
        provincia:'',
        cp:null,
        telefono1:null,
        telefono2:null
      },
      provinciaopt:[
        {value:'Valencia', text:'Valencia'},
        {value:'Madrid', text: 'Madrid'},
        {value:'Barcelona', text:'Barcelona'}
      ]
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
