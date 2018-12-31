<template lang="pug">
  #app.container
    b-jumbotron(header="App")
    .row
      .col-lg-2
        b-nav.w-100(vertical)
          b-nav-item
            router-link.nav-link(to="/home")="Index"
          b-nav-item
            router-link.nav-link(to="/ver")="Tabla"
          b-nav-item-dropdown#ddown1.w-100(
            text="Añadir"
          )
            b-dropdown-item
              router-link.nav-link(to="/anadirpiso")="Añadir Piso"
            b-dropdown-item
              router-link.nav-link(to="/anadirinquilino")="Añadir Inquilino"
      .col-lg-9
        router-view
      .col-lg
</template>


<script>

export default {
  name: 'app',
  
}
</script>
