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
        return;
   } else if (validateInput(fuelLevel)=== "Not a Number" || validateInput(cargoMass)=== "Not a Number"){
        alert("Invalid Entry. Fuel level and cargo mass should be numbers.");
        event.preventDefault();
        return;
   } 
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let faultyItems = document.getElementById("faultyItems");
   let fuelStatus = document.getElementById("fuelStatus");
   let launchStatus = document.getElementById("launchStatus");
   let cargoStatus = document.getElementById("cargoStatus");

   pilotStatus.innerHTML = `Pilot ${pilot} Ready`;
   copilotStatus.innerHTML = `Co-Pilot ${copilot} Ready`;

   //console.log(pilotStatus.innerHTML);
   //console.log(copilotStatus.innerHTML);

   if (Number(fuelLevel) < 10000 ){
        faultyItems.style.visibility = "visible";
        fuelStatus.innerHTML = `Fuel level is less than 10000 liters. There is not enough fuel for the journey.`;
        launchStatus.innerHTML = "Shuttle not ready for launch."
        launchStatus.style.color = "red";
   };

    if (Number(cargoMass) > 10000){
        faultyItems.style.visibility = "visible";
        cargoStatus.innerHTML = `Mass is greater than 10000 kg. Too much mass for shuttle to take off.`;
        launchStatus.innerHTML = "Shuttle not ready for launch."
        launchStatus.style.color = "red";
    };

    if (Number(fuelLevel) >= 10000 && Number(cargoMass) <= 10000){
        launchStatus.innerHTML = "Shuttle is ready for launch."
        launchStatus.style.color = "green";
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
