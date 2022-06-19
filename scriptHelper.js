// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
   if (testInput === ''){
    return "Empty";
   } else if (isNaN(Number(testInput)) === true){
    return "Not a Number";
   } else {
    return "Number";
   }
}

function formSubmission(document, pilot, copilot, fuelLevel, cargoMass) {
    if (validateInput(pilot) === "Number" || validateInput(copilot) === "Number"){
    alert("Invalid Entry. Pilot and Copilot names should be of type string");
    event.preventDefault();
   } else if (validateInput(fuelLevel)=== "Not a Number" || validateInput(cargoMass)=== "Not a Number"){
    alert("Invalid Entry. Fuel level and cargo mass should be numbers.");
    event.preventDefault();
   }
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

/*module.exports = {
    addDestinationInfo: addDestinationInfo,
    validateInput: validateInput,
    formSubmission: formSubmission,
    pickPlanet: pickPlanet,
    myFetch: myFetch
}*/

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
