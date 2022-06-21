// Write your JavaScript code here!
//import { formSubmission } from "./scriptHelper.js";

window.addEventListener("load", function() {
    let form = document.querySelector("form");
    let launchStatus = document.getElementById("launchStatus");

    form.addEventListener("submit", function(event){
        pilotName = document.querySelector("input[name=pilotName]").value;
        copilotName = document.querySelector("input[name=copilotName]").value;
        fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        cargoMass = document.querySelector("input[name=cargoMass]").value;
                
        if (pilotName === "" || copilotName ==="" || fuelLevel=== "" || cargoMass === ""){
            alert("All fields are required!");
            event.preventDefault();
        } else { 
            formSubmission(document, pilotName, copilotName, fuelLevel, cargoMass)
        };  
        
        console.log(pilotName);
        console.log(copilotName);
        console.log(fuelLevel);
        console.log(cargoMass);
  
    });

    
    

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })

});


