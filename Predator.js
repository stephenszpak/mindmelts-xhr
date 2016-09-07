
var Predator = (function () {

  var carnivores = [];
  var herbivores = [];

  return {
    loadCarnivores: function () {
      console.log("load loadCarnivores")
      var loader = new XMLHttpRequest();
      loader.addEventListener("load", function () {
        carnivores = JSON.parse(this.responseText);
        console.log("carnivores", carnivores)
        showCarnivores(carnivores);
      });
      loader.open("GET","carnivores.json");
      loader.send();
    },
    loadHerbivores: function() {
      console.log("load loadHerbivores");
      var herbLoader = new XMLHttpRequest();
      herbLoader.addEventListener("load", function() {
        herbivores = JSON.parse(this.responseText);
        console.log("herbivores", herbivores)
        showHerbivores(herbivores);
      });
      herbLoader.open("GET", "herbivores.json");
      herbLoader.send();
    }
  }
})();    
