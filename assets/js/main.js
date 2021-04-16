// FOLLOW THE COMMENTS STEP BY STEP
// log in to you your Airtable account
// make sure you have a base set up with at least one table with data inside it
// go to Account settings
// click the generate API key button
// copy and paste it into line 13 below
// then go to this link https://airtable.com/api?utm_source=google&utm_medium=cpc&utm_extra5=kwd-826617918193&utm_extra2=936407691&utm_extra10=110555501161&creative=465926015426&device=c&cx=us&targetid=kwd-826617918193&campaignid=936407691&adgroupid=110555501161&utm_campaign=brand_creator&utm_content=bofu_freetrial&gclid=Cj0KCQjwmIuDBhDXARIsAFITC_5ScBkfOcfy68SuLtNsXhLoTp8JoYwFlBuOK6yDpmKnA_eCAXZ3kKsaAptkEALw_wcB
// select your base
// copy and paste the base ID into line 14 below
console.log("is our script working");


// load the airtable library, call it "Airtable";
let Airtable = require("airtable");
console.log(Airtable);

// use airtable library, connect to our base using API key;
var base = new Airtable({ apiKey: "keyyxuPdxKx0PGmgZ" }).base(
  "app4XBu0PK3b9snic"
);

// get our collection base, select all the records
// specify functions that will receive the data
base("endangered-animals").select({}).eachPage(gotPageOfAnimals, gotAllAnimals);

// an empty array to hold our data
var animals = [];


// callback function that receives our data
function gotPageOfAnimals(records, fetchNextPage) {
  console.log("gotPageOfAnimals()");
  // add the records from this page to our books array
  animals.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllAnimals(err) {
  console.log("gotAllAnimals()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading data");
    console.error(err);
    return;
  }
  
  // call function to show the books
  consoleLogAnimals();
  showAnimals();
}

// just loop through the animals and console.log them
function consoleLogAnimals() {
  console.log("consoleLogAnimals()");
  animals.forEach(animal => {
    console.log("Animal:", animal);
  });
}

// look through our airtable data, create elements
function showAnimals() {
  console.log("showAnimals()");
  animals.forEach((animal) => {

    // creating a new div container
    var animalContainer = document.createElement("div");
    animalContainer.classList.add("animal-container");
    document.querySelector(".container").append(animalContainer)

     // adding image to animal-container
     var animalImage = document.createElement("img");
     animalImage.classList.add("animal-image");
     animalImage.src = animal.fields.image[0].url;
     animalContainer.append(animalImage);

    // add titles to animalContainer
    var animalName = document.createElement("h1");
    animalName.classList.add("animal-name");
    animalName.innerText = animal.fields.name;
    animalContainer.append(animalName);

    // add titles to animalContainer

    var animalPopulation = document.createElement("p");
    animalPopulation.classList.add("animal-population");
    animalPopulation.innerText = animal.fields.population;
    animalContainer.append(animalPopulation);

    var animalThreats = document.createElement("p");
    animalThreats.classList.add("animal-threats");
    animalThreats.innerText = animal.fields.threats;
    animalContainer.append(animalThreats);

    var animalActions_needed = document.createElement("p");
    animalActions_needed.classList.add("animal-actions_needed");
    animalActions_needed.innerText = animal.fields.actions_needed;
    animalContainer.append(animalActions_needed);

    // get genre field from airtable
    // loop through the array and add each genre as a class
    // a class to the song container

    var animalActions = animal.fields.actions
    animalActions.forEach(function(actions) {
      animalContainer.classList.add(actions)
    })

    // // filter by actions

    // var actions = "animal-container";

    // function actions (actions) {
    // actions = actions
      
    // filterAnimals();
    // }
      
    // function filterAnimals() {
    // console.log("filter animals", actions);
    // }
       
    // // hide all animals
          
    const animalContainers = document.querySelectorAll(".animal-container");
    for (s of animalContainers) {
    s.style.display = "none";
    }

    // add event listener to our filter 
    // filter by palmoil

    var filterPalmOil = document.querySelector(".js-palm-oil")
    filterPalmOil.addEventListener("click", function() {
      if (animalContainer.classList.contains("palm_oil")) {
        animalContainer.style.opacity = "100%";
      } else {
        animalContainer.style.opacity = "0%";
      }
    })
          
    // //show animals if actions match
    // const filteredContainers = document.querySelectorAll(
    // "." + actions 
    // );
    // console.log(filteredContainers);
    // for (s of filteredContainers) {
    // s.style.display = "inline-block";
    // }
    
    });
}

