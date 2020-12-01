// Write your JavaScript code here!
/*This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

// First box for fetching data
window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      response.json().then( function(json) {
         //console.log(json);
         const div = document.getElementById("missionTarget");
         // Add HTML that includes the JSON data
         div.innerHTML = `
         <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[3].name}</li>
               <li>Diameter: ${json[3].diameter}</li>
               <li>Star: ${json[3].star}</li>
               <li>Distance from Earth: ${json[3].distance}</li>
               <li>Number of Moons: ${json[3].moons}</li>
            </ol>
            <img src="${json[3].image}">
         <h2>
         `;
      })
   });


// Second box for input 
   let getSubmitButton = document.getElementById("formSubmit");
   getSubmitButton.addEventListener("click", function(event){
      event.preventDefault();

      let pilotNameInput = document.querySelector("input[name=pilotName]");
      if (pilotNameInput.value.length == 0) {
         alert("All fields are required!");
         event.preventDefault();
      }
      if (typeof pilotNameInput.value !== "string"){
         alert("Make sure to enter valid information for each field!");
         event.preventDefault();
      }
      
      
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      if (copilotNameInput.value.length == 0) {
         alert("All fields are required!")
         event.preventDefault();
      }
      if (typeof copilotNameInput.value !== "string"){
         alert("Make sure to enter valid information for each field!");
         event.preventDefault();
      } 
      
      // Valid information for the fields means that the user submits a value that is easily converted to the correct data type. 
      // JavaScript has a built-in method called isNaN(value) that returns true if value is NaN and false if value is not NaN.
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let fuelLevelInputValue = Number(fuelLevelInput.value);
      if (isNaN(fuelLevelInputValue)){
         alert("Make sure to enter valid information for each field!");
         event.preventDefault();
      } 
      if (fuelLevelInputValue.length == 0) {
         alert("All fields are required!")
         event.preventDefault();
      }
      // Valid information for the fields means that the user submits a value that is easily converted to the correct data type.
      // JavaScript has a built-in method called isNaN(value) that returns true if value is NaN and false if value is not NaN.
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      let cargoMassInputValue = Number(cargoMassInput.value);
      if (cargoMassInputValue.length == 0) {
         alert("All fields are required!");
         event.preventDefault();
      }

      if (isNaN(cargoMassInputValue)){
         alert("Make sure to enter valid information for each field!");
         event.preventDefault();
      }

         // Third box for displaying status
      let faultyItems = document.getElementById("faultyItems"); 
      let pilot = document.getElementById("pilotStatus");
      let copilot = document.getElementById("copilotStatus");
      let fuel = document.getElementById("fuelStatus");
      let cargo = document.getElementById("cargoStatus");
      
      // case 1: not enough fuel (less than 10000 liters) and cargo mass is low enough (under 10000 kg)
      if (fuelLevelInput.value < 10000 & cargoMassInput.value < 10000) { 
         let status  = document.getElementById("launchStatus");
         faultyItems.style.visibility = "visible";
         status.innerHTML = `Shuttle is not ready for launch.`;
         status.style.color = "red";

         pilot.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;
         copilot.innerHTML = `Co-pilot ${copilotNameInput.value} is ready for launch`;
         fuel.innerHTML = `Fuel level is too low for launch`;
         cargo.innerHTML = `Cargo mass is low enough for launch`;    
      } 
      // case 2: enough fuel and cargo mass is too high
      else if (fuelLevelInput.value > 10000 & cargoMassInput.value > 10000) { 
         let status  = document.getElementById("launchStatus");
         faultyItems.style.visibility = "visible";
         status.innerHTML = `Shuttle is not ready for Launch.`;
         status.style.color = "red";

         pilot.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;
         copilot.innerHTML = `Co-pilot ${copilotNameInput.value} is ready for launch`;
         fuel.innerHTML = `Fuel level is enough for launch`;
         cargo.innerHTML = `Cargo mass is too high for launch`;    
      }
      // case 3: enough fuel and cargo mass is low enough
      else if (fuelLevelInput.value > 10000 & cargoMassInput.value < 10000) {
         let status  = document.getElementById("launchStatus");
         faultyItems.style.visibility = "visible";
         status.innerHTML = `Shuttle is ready for launch.`;
         status.style.color = "green";
      
         pilot.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;
         copilot.innerHTML = `Co-pilot ${copilotNameInput.value} is ready for launch`;
         fuel.innerHTML = `Fuel level is enough for launch`;
         cargo.innerHTML = `Cargo mass is low enough for launch`; 

      } 
      // case 4: not enough fuel and cargo mass is too high 
      else if (fuelLevelInput.value < 10000 & cargoMassInput.value > 10000) {
         let status  = document.getElementById("launchStatus");
         faultyItems.style.visibility = "visible";
         status.innerHTML = `Shuttle is not ready for launch.`;
         status.style.color = "red";
      
         pilot.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;
         copilot.innerHTML = `Co-pilot ${copilotNameInput.value} is ready for launch`;
         fuel.innerHTML = `Fuel level is too low for launch`;
         cargo.innerHTML = `Cargo mass is to high for launch`; 
      }  

   })
   
});


