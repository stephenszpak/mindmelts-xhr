var Predator = (function () {
  var carnivores = [];
  return {
    loadCarnivores: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();
      loader.addEventListener("load", function () {
        carnivores = JSON.parse(this.responseText);
      });
    } 
  }
console.log(Predator)
})();    