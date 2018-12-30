<template lang="pug">
  #app.container-fluid
    .jumbotron
      h1.text-center="Aplicación"
    .row
      .col-lg-2
        ul.nav.flex-column.nav-pills.text-center
          li.nav-item
            router-link.nav-link(to="/home")="Index"
          li.nav-item
            router-link.nav-link(to="/ver")="Tabla"
          li.nav-item
            router-link.nav-link(to='/add')="Añadir"
      .col-lg-8
        router-view
      .col-lg
</template>


<script>

export default {
  name: 'app',
  
}
</script>
