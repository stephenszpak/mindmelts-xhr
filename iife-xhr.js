
var outputCarnivore = document.getElementById("outputIt");
var outputHerbivore = document.getElementById("herbOutput");

function showCarnivores (carnivore) {
	var rawr = "";
	for (var i = 0; i < carnivore.meateaters.length; i++) {

		rawr += "<div>";
		rawr += `<h4>${carnivore.meateaters[i].name}</h4>`;
		rawr += `<p>${carnivore.meateaters[i].size}</p>`;
		rawr += "</div>";
	}
	outputCarnivore.innerHTML = rawr;
};



function showHerbivores (herbivore) {
	var meow = "";
	for (var i = 0; i < herbivore.leafeaters.length; i++) {

		meow += "<div>";
		meow += `<h4>${herbivore.leafeaters[i].name}</h4>`;
		meow += `<p>${herbivore.leafeaters[i].size}</p>`;
		meow += "</div>";
	}
	outputHerbivore.innerHTML = meow;
};

Predator.loadCarnivores()
Predator.loadHerbivores()