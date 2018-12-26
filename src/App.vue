<template lang="pug">
  #app.container-fluid
    .jumbotron
      h1.text-center="App"
    .row
      .col-lg
      .col-lg-6
        HelloWorld(msg="Table")
      .col-lg
</template>


<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>

</style>
