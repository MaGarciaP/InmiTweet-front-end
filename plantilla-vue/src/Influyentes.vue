<template>

<div class="center">

  <h2>Tweets más influyentes</h2>
  <div id="contenedor-tweets-influyentes"></div>

</div>

</template>
<script>
export default {

  methods: {

    mostrarTweets: function(ids){
      var htmls = new Array(ids.length);
      var c = 0;
      for(var i in ids){
        (function(i){
          var id = ids[i];
          var embedUrl = `https://publish.twitter.com/oembed?url=https://twitter.com/Interior/status/${id}`;
          this.$http.jsonp(embedUrl)
          .then(response=>{
            var html = response.body.html;
            htmls[i] = html;
            c++;
            if(c == htmls.length){
              $("#contenedor-tweets-influyentes").empty();
              for(var h in htmls){
                $("#contenedor-tweets-influyentes").append(htmls[h]);
              }
            }
          }, response=>{
             console.log('error cargando tweet');
          });
        }.bind(this))(i);
      }
    }
  },

  mounted: function(){

    var ids = [
      "910183197253656576",
      "463440424141459456",
      "908161159953559552",
      "918299305756299264"
    ];

    // Las ID de los tweets debe ser la que se extrae del link de un tweet
    // por ejemplo:
    // https://twitter.com/JuddLegum/status/908161159953559552

    this.mostrarTweets(ids);

  }
}
</script>
