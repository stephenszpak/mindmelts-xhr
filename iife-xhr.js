var Predator = (function(showCarnivores){
	var output = document.getElementById("outputIt");
	var carnivoreArray = [];
	showCarnivores.getCarnivore = function(addCarnivore) {
		for (var i = 0; i < addCarnivore.meateaters.length; i++) {
			carnivoreArray = addCarnivore.meateaters.length[i]
		}
		outputIt.innerHTML = Predator.loadCarnivores(showCarnivores);
	};

  return showCarnivores

})(Predator || {});

// function showHerbivores () {

// }

// 	Predator.loadCarnivores(showCarnivores);

// 	var LangConverter = (function(german) {
// 	var englishToGerman = {
// 		Merry: "Frohe",
// 		Christmas: "Weihnachten",
// 		And: "und",
// 		Happy: "glücklich",
// 		New: "neu",
// 		Year: "Jahr"
// 	};
// 	var translatedGerman = [];
// 	german.getGerman = function(addedLang) {
// 		 for (var prop in englishToGerman) {
// 			 for (var i = 0; i < addedLang.length; i++) {
// 				if (addedLang[i] === prop) {
// 					translatedGerman.push(englishToGerman[prop]);
// 				}
// 			}
// 		}
// 		LangConverter.setLangConverter(translatedGerman);
// 	};
// return german;
// })(LangConverter || {});