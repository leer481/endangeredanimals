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

    // add name to animalContainer
    var animalName = document.createElement("h1");
    animalName.classList.add("animal-name");
    animalName.innerText = animal.fields.name;
    animalContainer.append(animalName);

    // add fields/ titles to animalContainer

    var animalPopulation = document.createElement("p");
    animalPopulation.classList.add("animal-population");
    animalPopulation.innerText = ("population: ")+animal.fields.population;
    animalContainer.append(animalPopulation);

    var animalConservation_status = document.createElement("p");
    animalConservation_status.classList.add("animal-conservation-status");
    animalConservation_status.innerText = ("conservation status: ")+animal.fields.conservation_status;
    animalContainer.append(animalConservation_status);

    var animalThreats = document.createElement("p");
    animalThreats.classList.add("animal-threats");
    animalThreats.innerText = ("this animal is threatened by: ")+animal.fields.threats;
    animalContainer.append(animalThreats);

    var animalActions_needed = document.createElement("p");
    animalActions_needed.classList.add("animal-actions_needed");
    animalActions_needed.innerText = ("actions that are needed: ")+animal.fields.actions_needed;
    animalContainer.append(animalActions_needed);

    // var animalResource = document.createElement("p");
    // animalResource.classList.add("animal-resource");
    // animalResource.innerHTML = ("learn more: ")+animal.fields.resource;
    // animalContainer.append(animalResource);


    // get genre field from airtable
    // loop through the array and add each genre as a class
    // a class to the animal container

    var animalActions = animal.fields.actions
    animalActions.forEach(function(actions) {
      animalContainer.classList.add(actions)
    })

    // // filter by actions
    // add event listener to our filter 
    // filter by palm-oil

    var filterPalmOil = document.querySelector(".js-palm-oil")
    filterPalmOil.addEventListener("click", function() {
      if (animalContainer.classList.contains("palm_oil")) {
        animalContainer.style.display = "inline-block";
      } else {
        animalContainer.style.display = "none";
      }
    })

    // filter by old-tech

    var filterOldTech = document.querySelector(".js-old-tech")
    filterOldTech.addEventListener("click", function() {
      if (animalContainer.classList.contains("old_tech")) {
        animalContainer.style.display = "inline-block";
      } else {
        animalContainer.style.display = "none";
      }
      })
        
    // filter by public-transportation

    var filterPublicTransportation = document.querySelector(".js-public-transportation")
    filterPublicTransportation.addEventListener("click", function() {
      if (animalContainer.classList.contains("public_transportation")) {
        animalContainer.style.display = "inline-block";
      } else {
        animalContainer.style.display = "none";
      }
      })

    // filter by buying-locally

    var filterBuyingLocally = document.querySelector(".js-buying-locally")
    filterBuyingLocally.addEventListener("click", function() {
      if (animalContainer.classList.contains("buying_locally")) {
        animalContainer.style.display = "inline-block";
      } else {
        animalContainer.style.display = "none";
      }
      })

    // filter by reusable-bags

    var filterReusableBags = document.querySelector(".js-reusable-bags")
    filterReusableBags.addEventListener("click", function() {
      if (animalContainer.classList.contains("reusable_bags")) {
        animalContainer.style.display = "inline-block";
      } else {
        animalContainer.style.display = "none";
      }
      })

    // filter by trimming-trees

    var filterTrimmingTrees = document.querySelector(".js-trimming-trees")
    filterTrimmingTrees.addEventListener("click", function() {
      if (animalContainer.classList.contains("trimming_trees")) {
        animalContainer.style.display = "inline-block";
      } else {
        animalContainer.style.display = "none";
      }
      })

    // filter by petroleum-free

    var filterPetroleumFree = document.querySelector(".js-petroleum-free")
    filterPetroleumFree.addEventListener("click", function() {
      if (animalContainer.classList.contains("petroleum_free")) {
        animalContainer.style.display = "inline-block";
      } else {
        animalContainer.style.display = "none";
      }
      })

    // filter by planting-trees

    var filterPlantingTrees = document.querySelector(".js-planting-trees")
    filterPlantingTrees.addEventListener("click", function() {
      if (animalContainer.classList.contains("planting_trees")) {
        animalContainer.style.display = "inline-block";
      } else {
        animalContainer.style.display = "none";
      }
      })

    // filter by less-meat

    var filterLessMeat = document.querySelector(".js-less-meat")
    filterLessMeat.addEventListener("click", function() {
      if (animalContainer.classList.contains("less_meat")) {
        animalContainer.style.display = "inline-block";
      } else {
        animalContainer.style.display = "none";
      }
      })

    // filter by composting

    var filterComposting = document.querySelector(".js-composting")
    filterComposting.addEventListener("click", function() {
      if (animalContainer.classList.contains("composting")) {
        animalContainer.style.display = "inline-block";
      } else {
        animalContainer.style.display = "none";
      }
      })

    // filter by less-seafood

    var filterLessSeafood = document.querySelector(".js-less-seafood")
    filterLessSeafood.addEventListener("click", function() {
      if (animalContainer.classList.contains("less_seafood")) {
        animalContainer.style.display = "inline-block";
      } else {
        animalContainer.style.display = "none";
      }
      })

    // filter by using-fans

    var filterUsingFans = document.querySelector(".js-using-fans")
    filterUsingFans.addEventListener("click", function() {
      if (animalContainer.classList.contains("using_fans")) {
        animalContainer.style.display = "inline-block";
      } else {
        animalContainer.style.display = "none";
      }
      })

    // filter by sustainable-wood

    var filterSustainableWood = document.querySelector(".js-sustainable-wood")
    filterSustainableWood.addEventListener("click", function() {
      if (animalContainer.classList.contains("sustainable_wood")) {
        animalContainer.style.display = "inline-block";
      } else {
        animalContainer.style.display = "none";
      }
      })

    // filter by buying-organic

    var filterBuyingOrganic = document.querySelector(".js-buying-organic")
    filterBuyingOrganic.addEventListener("click", function() {
      if (animalContainer.classList.contains("buying_organic")) {
        animalContainer.style.display = "inline-block";
      } else {
        animalContainer.style.display = "none";
      }
      })

    // filter by less-paper

    var filterLessPaper = document.querySelector(".js-less-paper")
    filterLessPaper.addEventListener("click", function() {
      if (animalContainer.classList.contains("less_paper")) {
        animalContainer.style.display = "inline-block";
      } else {
        animalContainer.style.display = "none";
      }
      })

    // filter by conserving-water

    var filterConservingWater = document.querySelector(".js-conserving-water")
    filterConservingWater.addEventListener("click", function() {
      if (animalContainer.classList.contains("conserving_water")) {
        animalContainer.style.display = "inline-block";
      } else {
        animalContainer.style.display = "none";
      }
      })

    // filter by reusable-bottle

    var filterReusableBottle = document.querySelector(".js-reusable-bottle")
    filterReusableBottle.addEventListener("click", function() {
      if (animalContainer.classList.contains("reusable_bottle")) {
        animalContainer.style.display = "inline-block";
      } else {
        animalContainer.style.display = "none";
      }
      })

    // filter by gardening

    var filterGardening = document.querySelector(".js-gardening")
    filterGardening.addEventListener("click", function() {
      if (animalContainer.classList.contains("gardening")) {
        animalContainer.style.display = "inline-block";
      } else {
        animalContainer.style.display = "none";
      }
      })

    // filter by turning-offlights

    var filterTurningOfflights = document.querySelector(".js-turning-offlights")
    filterTurningOfflights.addEventListener("click", function() {
      if (animalContainer.classList.contains("turning_offlights")) {
        animalContainer.style.display = "inline-block";
      } else {
        animalContainer.style.display = "none";
      }
      })

    // filter by ivory

    var filterIvory = document.querySelector(".js-ivory")
    filterIvory.addEventListener("click", function() {
      if (animalContainer.classList.contains("ivory")) {
        animalContainer.style.display = "inline-block";
      } else {
        animalContainer.style.display = "none";
      }
      })

    // filter by stop-eating-fish

    var filterStopEatingfish = document.querySelector(".js-stop-eating-fish")
    filterStopEatingfish.addEventListener("click", function() {
      if (animalContainer.classList.contains("stop_eating_fish")) {
        animalContainer.style.display = "inline-block";
      } else {
        animalContainer.style.display = "none";
      }
      })

    // filter by certified-products

    var filterCertifiedProducts = document.querySelector(".js-certified-products")
    filterCertifiedProducts.addEventListener("click", function() {
      if (animalContainer.classList.contains("certified_products")) {
        animalContainer.style.display = "inline-block";
      } else {
        animalContainer.style.display = "none";
      }
      })

      // filter by report-illegal

      var filterReportIllegal = document.querySelector(".js-report-illegal")
      filterReportIllegal.addEventListener("click", function() {
        if (animalContainer.classList.contains("report_illegal")) {
          animalContainer.style.display = "inline-block";
        } else {
          animalContainer.style.display = "none";
        }
        }) 

      // click animal container for more info

      animalContainer.addEventListener("click", function() {
      animalPopulation.classList.toggle("active");
      })

      animalContainer.addEventListener("click", function() {
      animalConservation_status.classList.toggle("active");
      })

      animalContainer.addEventListener("click", function() {
      animalThreats.classList.toggle("active");
      })
    
      animalContainer.addEventListener("click", function() {
      animalActions_needed.classList.toggle("active");
      })

      // animalContainer.addEventListener("click", function() {
      // animalResource.classList.toggle("active");
      // })
      
      animalContainer.addEventListener("click", function() {
      animalImage.classList.toggle("off");
      animalName.classList.toggle("off");
      })

    });
}

