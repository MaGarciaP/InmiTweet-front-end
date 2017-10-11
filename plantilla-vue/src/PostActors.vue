<template>
<div class= "center">
<h2>Agregar Actores</h2>
  <div class="emmm">
      Nombre:
      <input type = "text" v-model="Actor.firstName"><br><br>
      Apellido:
      <input type = "text" v-model ="Actor.lastName"><br>
      <br>
      <button v-on:click="holaa">Registrar</button>
  </div>
</div>

</template>

<script>
export default {
  data(){
    return{
      Actor: {
        firstName:'',
        lastName: ''
      },
      alert: 'Holaa'
    }
  },
  methods: {
    holaa:function(){
      if(this.Actor.firstName == ''){
      }
      else{
        if(this.Actor.lastName == ''){

        }
        else{
        this.$http.post('http://localhost:8081/sakila-spring-backend/actors/', this.Actor)
        }
      }
    }
  }
}
</script>
