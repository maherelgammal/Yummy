// Define global variables
let Array = [];
let sNarray = [];
let sLarray = [];
let catArray = [];
let catOneArray = [];
let detailsArray = [];
let detailsArray1 = [];
let detailsArray2 = [];
let detailsArray3 = [];
let detailsCatArray = [];
let areaArray = [];
let areaMealsArray = [];
let ingreArray = [];
let ingreMealsArray = [];
let detailsAreaMealsArray = [];
let detailsingreMealsArray = [];
let ingredient;
let id;
let idFromCat;
let idFromSearch;
let idFromSearchbyName;
let mealId;
let areaName;
let areaMealId;
let ingreName;
let ingreMealId;

// Define DOM elements
let main = document.getElementById("main");
let cate = document.getElementById("cate");
let clicked = document.getElementById("clickedCateDetails");
let searcher = document.getElementById("searchResult");
let searchName = document.getElementById("SbyN");
let searchFirstLetter = document.getElementById("SbyFL");
let details = document.getElementById("details");
let searchDetails = document.getElementById("searchDetails");
let catDetails = document.getElementById("cateDetails");
let area = document.getElementById("area")
let areaMeals = document.getElementById("areaMeals")
let areaMealsDetails = document.getElementById("areaMealsDetails")
let ingre = document.getElementById("ingre")
let ingreMeals = document.getElementById("ingreMeals")
let ingreMealsDetails = document.getElementById("ingreMealsDetails")

// Get meals from API by search term
async function getMeal() {
  $('#spinner').show()
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=`
  );
  let final = await response.json();
  Array = final.meals.slice(0, 20);
  displayMeals()
  $('#spinner').hide()
}
getMeal()
// Display meals in the main section
function displayMeals() {
    let cartona = "";
    for (let i = 0; i < Array.length; i++) {
      cartona += `
        <div class="col-md-3 p-3 cartona">
          <div class="position-relative overflow-hidden card">
            <img src="${Array[i].strMealThumb}" class="w-100 h-100" alt="">
            <div class="layer w-100 h-100 bg-black bg-white position-absolute d-flex align-items-center fw-bold p-5 fs-2">
              ${Array[i].strMeal}
              <p class="d-none">${Array[i].idMeal}</p>
            </div>
          </div>
        </div>
      `;
    }
    main.innerHTML = cartona;
  
    $(".cartona").click(async function (e) {
      id = this.children[0].children[1].children[0].innerHTML;
      $("#main").addClass("d-none")
    await getDetails();
    displayMealDetails();
    });
  }


// Get meals in Specific category
async function getMealsforSpecificCategory() {
  $('#spinner').show()
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${idFromCat}`)
    let final = await response.json()
    detailsArray = final.meals
    console.log(detailsArray);
   $('#spinner').hide()
}
// Get meal details from API
async function getDetails() {
  $('#spinner').show()
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    let final = await response.json()
    console.log(id);
    detailsArray1 = final.meals
    console.log(detailsArray1);
    $('#spinner').hide()
}
async function getDetailstoSearchName() {
  $('#spinner').show()
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idFromSearchbyName}`)
    let final1 = await response.json()
    console.log(idFromSearchbyName);
    detailsArray2 = final1.meals
    console.log(detailsArray2);
    $('#spinner').hide()
}
async function getDetailstoSearchLetter() {
  $('#spinner').show()
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idFromSearch}`)
    let final = await response.json()
    console.log(idFromSearchbyName);
    detailsArray3 = final.meals
    console.log(detailsArray3);
    $('#spinner').hide()
}

  // Display meals details
function displayMealDetailsforSearchLetter() {
    let cartona = "";
    for (let i = 0; i < detailsArray3.length; i++) {
        cartona = `
        <div class="col-md-4 text-white">
            <img src="${detailsArray3[i].strMealThumb}" alt="" class="w-100 card">
            <h1>${detailsArray3[i].strMeal}strMeal</h1>
        </div>
        <div class="col-md-8 text-white">
            <div class="px-5">
                <h4 class="pb-4">Instructions</h4>
                <p class="py-4">${detailsArray3[i].strInstructions}</p>
                <h4 class="py-3">Area: ${detailsArray3[i].strArea}</h4>
                <h4 class="py-3">Category: ${detailsArray3[i].strCategory}</h4>
                <h4 class="py-3">Recipes :</h4>
                <div class="py-3 ingr">
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray3[i].strMeasure1}  ${detailsArray3[i].strIngredient1}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray3[i].strMeasure2}  ${detailsArray3[i].strIngredient2}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray3[i].strMeasure3}  ${detailsArray3[i].strIngredient3}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray3[i].strMeasure4}  ${detailsArray3[i].strIngredient4}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray3[i].strMeasure5}  ${detailsArray3[i].strIngredient5}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray3[i].strMeasure6}  ${detailsArray3[i].strIngredient6}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray3[i].strMeasure7}  ${detailsArray3[i].strIngredient7}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray3[i].strMeasure8}  ${detailsArray3[i].strIngredient8}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray3[i].strMeasure9}  ${detailsArray3[i].strIngredient9}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray3[i].strMeasure10}  ${detailsArray3[i].strIngredient10}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray3[i].strMeasure11}  ${detailsArray3[i].strIngredient11}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray3[i].strMeasure12}  ${detailsArray3[i].strIngredient12}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray3[i].strMeasure13}  ${detailsArray3[i].strIngredient13}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray3[i].strMeasure14}  ${detailsArray3[i].strIngredient14}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray3[i].strMeasure15}  ${detailsArray3[i].strIngredient15}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray3[i].strMeasure16}  ${detailsArray3[i].strIngredient16}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray3[i].strMeasure17}  ${detailsArray3[i].strIngredient17}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray3[i].strMeasure18}  ${detailsArray3[i].strIngredient18}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray3[i].strMeasure19}  ${detailsArray3[i].strIngredient19}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray3[i].strMeasure20}  ${detailsArray3[i].strIngredient20}</p>
                </div>  
                <h4>Tags :</h4> 
                <p id="tags" class="tags text-dark p-1 m-1 rounded-1">${detailsArray3[i].strTags}</p>
                <button class="px-4 py-2 mt-4 me-3 btn btn-success"><a target="_blank" href="${detailsArray3[i].strSource}" class="text-decoration-none text-white">Source</a></button>
                <button class="px-4 py-2 mt-4 btn btn-danger"><a target="_blank" href="${detailsArray3[i].strYoutube}" class="text-decoration-none text-white">Youtube</a></button>
            </div>
        </div>
        `
    }
    details.innerHTML= cartona;
    hideWhiteSpaces();
    // $("#main").addClass("d-none")
    $("#details").removeClass("d-none")
}
function displayMealDetailsforSearchName() {
    let cartona = "";
    for (let i = 0; i < detailsArray2.length; i++) {
        cartona = `
        <div class="col-md-4 text-white">
            <img src="${detailsArray2[i].strMealThumb}" alt="" class="w-100 card">
            <h1>${detailsArray2[i].strMeal}strMeal</h1>
        </div>
        <div class="col-md-8 text-white">
            <div class="px-5">
                <h4 class="pb-4">Instructions</h4>
                <p class="py-4">${detailsArray2[i].strInstructions}</p>
                <h4 class="py-3">Area: ${detailsArray2[i].strArea}</h4>
                <h4 class="py-3">Category: ${detailsArray2[i].strCategory}</h4>
                <h4 class="py-3">Recipes :</h4>
                <div class="py-3 ingr">
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray2[i].strMeasure1}  ${detailsArray2[i].strIngredient1}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray2[i].strMeasure2}  ${detailsArray2[i].strIngredient2}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray2[i].strMeasure3}  ${detailsArray2[i].strIngredient3}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray2[i].strMeasure4}  ${detailsArray2[i].strIngredient4}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray2[i].strMeasure5}  ${detailsArray2[i].strIngredient5}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray2[i].strMeasure6}  ${detailsArray2[i].strIngredient6}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray2[i].strMeasure7}  ${detailsArray2[i].strIngredient7}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray2[i].strMeasure8}  ${detailsArray2[i].strIngredient8}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray2[i].strMeasure9}  ${detailsArray2[i].strIngredient9}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray2[i].strMeasure10}  ${detailsArray2[i].strIngredient10}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray2[i].strMeasure11}  ${detailsArray2[i].strIngredient11}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray2[i].strMeasure12}  ${detailsArray2[i].strIngredient12}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray2[i].strMeasure13}  ${detailsArray2[i].strIngredient13}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray2[i].strMeasure14}  ${detailsArray2[i].strIngredient14}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray2[i].strMeasure15}  ${detailsArray2[i].strIngredient15}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray2[i].strMeasure16}  ${detailsArray2[i].strIngredient16}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray2[i].strMeasure17}  ${detailsArray2[i].strIngredient17}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray2[i].strMeasure18}  ${detailsArray2[i].strIngredient18}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray2[i].strMeasure19}  ${detailsArray2[i].strIngredient19}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray2[i].strMeasure20}  ${detailsArray2[i].strIngredient20}</p>
                </div>  
                <h4>Tags :</h4> 
                <p id="tags" class="tags text-dark p-1 m-1 rounded-1">${detailsArray2[i].strTags}</p>
                <button class="px-4 py-2 mt-4 me-3 btn btn-success"><a target="_blank" href="${detailsArray2[i].strSource}" class="text-decoration-none text-white">Source</a></button>
                <button class="px-4 py-2 mt-4 btn btn-danger"><a target="_blank" href="${detailsArray2[i].strYoutube}" class="text-decoration-none text-white">Youtube</a></button>
            </div>
        </div>
        `
    }
    details.innerHTML= cartona;
    hideWhiteSpaces();
    $("#details").removeClass("d-none")
}
function displayMealDetails() {
    let cartona = "";
    for (let i = 0; i < detailsArray1.length; i++) {
        cartona = `
        <div class="col-md-4 text-white">
            <img src="${detailsArray1[i].strMealThumb}" alt="" class="w-100 card">
            <h1>${detailsArray1[i].strMeal}strMeal</h1>
        </div>
        <div class="col-md-8 text-white">
            <div class="px-5">
                <h4 class="pb-4">Instructions</h4>
                <p class="py-4">${detailsArray1[i].strInstructions}</p>
                <h4 class="py-3">Area: ${detailsArray1[i].strArea}</h4>
                <h4 class="py-3">Category: ${detailsArray1[i].strCategory}</h4>
                <h4 class="py-3">Recipes :</h4>
                <div class="py-3 ingr">
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray1[i].strMeasure1}  ${detailsArray1[i].strIngredient1}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray1[i].strMeasure2}  ${detailsArray1[i].strIngredient2}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray1[i].strMeasure3}  ${detailsArray1[i].strIngredient3}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray1[i].strMeasure4}  ${detailsArray1[i].strIngredient4}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray1[i].strMeasure5}  ${detailsArray1[i].strIngredient5}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray1[i].strMeasure6}  ${detailsArray1[i].strIngredient6}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray1[i].strMeasure7}  ${detailsArray1[i].strIngredient7}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray1[i].strMeasure8}  ${detailsArray1[i].strIngredient8}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray1[i].strMeasure9}  ${detailsArray1[i].strIngredient9}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray1[i].strMeasure10}  ${detailsArray1[i].strIngredient10}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray1[i].strMeasure11}  ${detailsArray1[i].strIngredient11}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray1[i].strMeasure12}  ${detailsArray1[i].strIngredient12}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray1[i].strMeasure13}  ${detailsArray1[i].strIngredient13}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray1[i].strMeasure14}  ${detailsArray1[i].strIngredient14}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray1[i].strMeasure15}  ${detailsArray1[i].strIngredient15}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray1[i].strMeasure16}  ${detailsArray1[i].strIngredient16}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray1[i].strMeasure17}  ${detailsArray1[i].strIngredient17}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray1[i].strMeasure18}  ${detailsArray1[i].strIngredient18}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray1[i].strMeasure19}  ${detailsArray1[i].strIngredient19}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsArray1[i].strMeasure20}  ${detailsArray1[i].strIngredient20}</p>
                </div>  
                <h4>Tags :</h4> 
                <p id="tags" class="tags text-dark p-1 m-1 rounded-1">${detailsArray1[i].strTags}</p>
                <button class="px-4 py-2 mt-4 me-3 btn btn-success"><a target="_blank" href="${detailsArray1[i].strSource}" class="text-decoration-none text-white">Source</a></button>
                <button class="px-4 py-2 mt-4 btn btn-danger"><a target="_blank" href="${detailsArray1[i].strYoutube}" class="text-decoration-none text-white">Youtube</a></button>
            </div>
        </div>
        `
    }
    details.innerHTML= cartona;
    hideWhiteSpaces();
    $("#details").removeClass("d-none")
    
}

// Display meals details
function CatDisplayMealDetails() {
    let cartona = "";
    for (let i = 0; i < detailsCatArray.length; i++) {
        cartona = `
        <div class="col-md-4 text-white">
            <img src="${detailsCatArray[i].strMealThumb}" alt="" class="w-100 card">
            <h1>${detailsCatArray[i].strMeal}strMeal</h1>
        </div>
        <div class="col-md-8 text-white">
            <div class="px-5">
                <h4 class="pb-4">Instructions</h4>
                <p class="py-4">${detailsCatArray[i].strInstructions}</p>
                <h4 class="py-3">Area: ${detailsCatArray[i].strArea}</h4>
                <h4 class="py-3">Category: ${detailsCatArray[i].strCategory}</h4>
                <h4 class="py-3">Recipes :</h4>
                <div class="py-3 ingr">
                    <p class="text-dark p-1 m-1 rounded-1">${detailsCatArray[i].strMeasure1}  ${detailsCatArray[i].strIngredient1}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsCatArray[i].strMeasure2}  ${detailsCatArray[i].strIngredient2}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsCatArray[i].strMeasure3}  ${detailsCatArray[i].strIngredient3}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsCatArray[i].strMeasure4}  ${detailsCatArray[i].strIngredient4}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsCatArray[i].strMeasure5}  ${detailsCatArray[i].strIngredient5}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsCatArray[i].strMeasure6}  ${detailsCatArray[i].strIngredient6}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsCatArray[i].strMeasure7}  ${detailsCatArray[i].strIngredient7}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsCatArray[i].strMeasure8}  ${detailsCatArray[i].strIngredient8}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsCatArray[i].strMeasure9}  ${detailsCatArray[i].strIngredient9}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsCatArray[i].strMeasure10}  ${detailsCatArray[i].strIngredient10}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsCatArray[i].strMeasure11}  ${detailsCatArray[i].strIngredient11}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsCatArray[i].strMeasure12}  ${detailsCatArray[i].strIngredient12}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsCatArray[i].strMeasure13}  ${detailsCatArray[i].strIngredient13}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsCatArray[i].strMeasure14}  ${detailsCatArray[i].strIngredient14}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsCatArray[i].strMeasure15}  ${detailsCatArray[i].strIngredient15}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsCatArray[i].strMeasure16}  ${detailsCatArray[i].strIngredient16}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsCatArray[i].strMeasure17}  ${detailsCatArray[i].strIngredient17}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsCatArray[i].strMeasure18}  ${detailsCatArray[i].strIngredient18}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsCatArray[i].strMeasure19}  ${detailsCatArray[i].strIngredient19}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsCatArray[i].strMeasure20}  ${detailsCatArray[i].strIngredient20}</p>
                </div>  
                <h4>Tags :</h4> 
                <p id="tags" class="tags text-dark p-1 m-1 rounded-1">${detailsCatArray[i].strTags}</p>
                <button class="px-4 py-2 mt-4 me-3 btn btn-success"><a target="_blank" href="${detailsCatArray[i].strSource}" class="text-decoration-none text-white">Source</a></button>
                <button class="px-4 py-2 mt-4 btn btn-danger"><a target="_blank" href="${detailsCatArray[i].strYoutube}" class="text-decoration-none text-white">Youtube</a></button>
            </div>
        </div>
        `
    }
    clicked.innerHTML= cartona;
    hideWhiteSpaces();
    // $("#main").addClass("d-none")
    $("#clickedCateDetails").removeClass("d-none")
}

// Get meals from API by meal name
async function getMealbyName() {
  $('#spinner').show()
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchName.value}`
  );
  let final = await response.json();
  console.log("Got Data Well, Go to Displaying it and clicking it");
  sNarray = final.meals.slice(0, 20);
  $('#spinner').hide()
}


// // Get meals from API by first letter of meal name
async function getMealbyFL() {
  $('#spinner').show()
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFirstLetter.value}`
  );
  let final = await response.json();
  console.log("Got Data Well");
  sLarray = final.meals.slice(0, 20);
  $('#spinner').hide()
}

// Get meal categories from API
async function getMealsbyCategory() {
  $('#spinner').show()
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );
  let final = await response.json();
  catArray = final.categories;
  console.log(catArray);
  $('#spinner').hide()
}
$(".categ").click(async function() {
  $("#cate").removeClass("d-none")
  closeDoor()
  await getMealsbyCategory()
  console.log(catArray);

  displayCategories()
})



// Get specific mealdetails from specific category from API
async function getOneMealDetails() {
  $('#spinner').show()
    let response = await fetch(`https:/www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    let final = await response.json()
    detailsCatArray = final.meals
    console.log(detailsCatArray);
    $('#spinner').hide()
}

//Get by Area
async function getAreas() {
  $('#spinner').show()
    let response = await fetch(`https:/www.themealdb.com/api/json/v1/1/list.php?a=list`)
    let final = await response.json()
    areaArray = final.meals
    console.log(areaArray);
    $('#spinner').hide()
}
$(".areaLi").click(async function () {
    closeDoor()
    await getAreas()
    displayAreas()
  })

// Display Areas
function displayAreas() {
    let cartona = "";
    for (let i = 0; i < areaArray.length; i++) {
      cartona += `
        <div class="col-md-3 p-3 cartona">
          <div class="py-4">
            <div class="bg-black d-flex justify-content-center flex-column align-items-center fw-bold p-5 fs-2">
                <i class="area-icons fa-solid fa-house text-white fa-2x"></i>    
                <h3 class="text-white py-4">${areaArray[i].strArea}</h3>
            </div>
          </div>
        </div>
      `;
    }
    area.innerHTML = cartona;
    $("#area").removeClass("d-none");
    $(".cartona").click(async function (e) {
        areaName = this.children[0].children[0].children[1].innerHTML;
        await getAreasMeals();
        displayAreaMeals();
        $("#area").addClass("d-none")
        $("#areaMeals").removeClass("d-none")
      });
}
//Get by Area
async function getAreasMeals() {
  $('#spinner').show()
    let response = await fetch(`https:/www.themealdb.com/api/json/v1/1/filter.php?a=${areaName}`)
    let final = await response.json()
    areaMealsArray = final.meals
    console.log(areaMealsArray);
    $('#spinner').hide()
}
function displayAreaMeals() {
    let cartona = "";
    for (let i = 0; i < areaMealsArray.length; i++) {
      cartona += `
        <div class="col-md-3 p-3 cartona">
          <div class="position-relative overflow-hidden card">
            <img src="${areaMealsArray[i].strMealThumb}" class="w-100 h-100" alt="">
            <div class="layer w-100 h-100 bg-black bg-white position-absolute d-flex align-items-center fw-bold p-5 fs-2">
              ${areaMealsArray[i].strMeal}
              <p class="d-none">${areaMealsArray[i].idMeal}</p>
            </div>
          </div>
        </div>
      `;
    }
    areaMeals.innerHTML = cartona;
  
    $(".cartona").click(async function (e) {
        areaMealId = this.children[0].children[1].children[0].innerHTML;
        $("#areaMeals").addClass("d-none")
        await getAreaMealDetails();
        displayAreaMealDetails();
    });
}
  async function getAreaMealDetails() {
    $('#spinner').show()
    let response = await fetch(`https:/www.themealdb.com/api/json/v1/1/lookup.php?i=${areaMealId}`)
    let final = await response.json()
    detailsAreaMealsArray = final.meals;
    console.log(detailsAreaMealsArray);
    $('#spinner').hide()
}

// Display area meal details
function displayAreaMealDetails() {
    let cartona = "";
    for (let i = 0; i < detailsAreaMealsArray.length; i++) {
        cartona = `
        <div class="col-md-4 text-white">
            <img src="${detailsAreaMealsArray[i].strMealThumb}" alt="" class="w-100 card">
            <h1>${detailsAreaMealsArray[i].strMeal}strMeal</h1>
        </div>
        <div class="col-md-8 text-white">
            <div class="px-5">
                <h4 class="pb-4">Instructions</h4>
                <p class="py-4">${detailsAreaMealsArray[i].strInstructions}</p>
                <h4 class="py-3">Area: ${detailsAreaMealsArray[i].strArea}</h4>
                <h4 class="py-3">Category: ${detailsAreaMealsArray[i].strCategory}</h4>
                <h4 class="py-3">Recipes :</h4>
                <div class="py-3 ingr">
                    <p class="text-dark p-1 m-1 rounded-1">${detailsAreaMealsArray[i].strMeasure1}  ${detailsAreaMealsArray[i].strIngredient1}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsAreaMealsArray[i].strMeasure2}  ${detailsAreaMealsArray[i].strIngredient2}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsAreaMealsArray[i].strMeasure3}  ${detailsAreaMealsArray[i].strIngredient3}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsAreaMealsArray[i].strMeasure4}  ${detailsAreaMealsArray[i].strIngredient4}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsAreaMealsArray[i].strMeasure5}  ${detailsAreaMealsArray[i].strIngredient5}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsAreaMealsArray[i].strMeasure6}  ${detailsAreaMealsArray[i].strIngredient6}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsAreaMealsArray[i].strMeasure7}  ${detailsAreaMealsArray[i].strIngredient7}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsAreaMealsArray[i].strMeasure8}  ${detailsAreaMealsArray[i].strIngredient8}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsAreaMealsArray[i].strMeasure9}  ${detailsAreaMealsArray[i].strIngredient9}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsAreaMealsArray[i].strMeasure10}  ${detailsAreaMealsArray[i].strIngredient10}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsAreaMealsArray[i].strMeasure11}  ${detailsAreaMealsArray[i].strIngredient11}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsAreaMealsArray[i].strMeasure12}  ${detailsAreaMealsArray[i].strIngredient12}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsAreaMealsArray[i].strMeasure13}  ${detailsAreaMealsArray[i].strIngredient13}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsAreaMealsArray[i].strMeasure14}  ${detailsAreaMealsArray[i].strIngredient14}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsAreaMealsArray[i].strMeasure15}  ${detailsAreaMealsArray[i].strIngredient15}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsAreaMealsArray[i].strMeasure16}  ${detailsAreaMealsArray[i].strIngredient16}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsAreaMealsArray[i].strMeasure17}  ${detailsAreaMealsArray[i].strIngredient17}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsAreaMealsArray[i].strMeasure18}  ${detailsAreaMealsArray[i].strIngredient18}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsAreaMealsArray[i].strMeasure19}  ${detailsAreaMealsArray[i].strIngredient19}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsAreaMealsArray[i].strMeasure20}  ${detailsAreaMealsArray[i].strIngredient20}</p>
                </div>  
                <h4>Tags :</h4> 
                <p id="tags" class="tags text-dark p-1 m-1 rounded-1">${detailsAreaMealsArray[i].strTags}</p>
                <button class="px-4 py-2 mt-4 me-3 btn btn-success"><a target="_blank" href="${detailsAreaMealsArray[i].strSource}" class="text-decoration-none text-white">Source</a></button>
                <button class="px-4 py-2 mt-4 btn btn-danger"><a target="_blank" href="${detailsAreaMealsArray[i].strYoutube}" class="text-decoration-none text-white">Youtube</a></button>
            </div>
        </div>
        `
    }
    areaMealsDetails.innerHTML= cartona;
    hideWhiteSpaces();
    $("#areaMealsDetails").removeClass("d-none")
    $("areaMeals").addClass("d-none")
}

//Get by ingre
async function getingres() {
    $('#spinner').show();
    let response = await fetch(`https:/www.themealdb.com/api/json/v1/1/list.php?i=list`)
    let final = await response.json()
    ingreArray = final.meals.slice(0, 20)
    console.log(ingreArray);
    $('#spinner').hide();
}
$(".ingreLi").click(async function () {
    closeDoor()
    await getingres()
    displayingres()
  })

// Display ingres
function displayingres() {
    let cartona = "";
    for (let i = 0; i < ingreArray.length; i++) {
      cartona += `
        <div class="col-md-3 p-3 cartona">
          <div class="py-4">
            <div class="bg-black d-flex justify-content-center flex-column align-items-center text-center p-5">
                <i class="ingre-icons fa-solid fa-drumstick-bite text-white fa-3x"></i>    
                <h6 class="text-white py-4 fw-bold">${ingreArray[i].strIngredient}</h6>
                <p class="ingre-desc text-white">${ingreArray[i].strDescription}</p>
            </div>
          </div>
        </div>
      `;
    }
    ingre.innerHTML = cartona;
    $("#ingre").removeClass("d-none");
    $(".cartona").click(async function (e) {
        ingreName = this.children[0].children[0].children[1].innerHTML;
        $("#ingre").addClass("d-none");
        await getingresMeals();
        displayingreMeals();
        $("#ingreMeals").removeClass("d-none")
      });
}
//Get by ingre
async function getingresMeals() {
  $('#spinner').show()
    let response = await fetch(`https:/www.themealdb.com/api/json/v1/1/filter.php?i=${ingreName}`)
    let final = await response.json()
    ingreMealsArray = final.meals
    console.log(ingreMealsArray);
    $('#spinner').hide()
}
function displayingreMeals() {
    let cartona = "";
    for (let i = 0; i < ingreMealsArray.length; i++) {
      cartona += `
        <div class="col-md-3 p-3 cartona">
          <div class="position-relative overflow-hidden card">
            <img src="${ingreMealsArray[i].strMealThumb}" class="w-100 h-100" alt="">
            <div class="layer w-100 h-100 bg-black bg-white position-absolute d-flex align-items-center fw-bold p-5 fs-2">
              ${ingreMealsArray[i].strMeal}
              <p class="d-none">${ingreMealsArray[i].idMeal}</p>
            </div>
          </div>
        </div>
      `;
    }
    ingreMeals.innerHTML = cartona;
  
    $(".cartona").click(async function (e) {
        ingreMealId = this.children[0].children[1].children[0].innerHTML;
        $("#ingreMeals").addClass("d-none")
        console.log(ingreMealId);
        await getingreMealDetails();
        displayingreMealDetails();
    });
  }
  async function getingreMealDetails() {
    $('#spinner').show()
    let response = await fetch(`https:/www.themealdb.com/api/json/v1/1/lookup.php?i=${ingreMealId}`)
    let final = await response.json()
    detailsingreMealsArray = final.meals;
    console.log(detailsingreMealsArray);
    $('#spinner').hide()
}

// Display ingre meal details
function displayingreMealDetails() {
    let cartona = "";
    for (let i = 0; i < detailsingreMealsArray.length; i++) {
        cartona = `
        <div class="col-md-4 text-white">
            <img src="${detailsingreMealsArray[i].strMealThumb}" alt="" class="w-100 card">
            <h1>${detailsingreMealsArray[i].strMeal}strMeal</h1>
        </div>
        <div class="col-md-8 text-white">
            <div class="px-5">
                <h4 class="pb-4">Instructions</h4>
                <p class="py-4">${detailsingreMealsArray[i].strInstructions}</p>
                <h4 class="py-3">Area: ${detailsingreMealsArray[i].strArea}</h4>
                <h4 class="py-3">Category: ${detailsingreMealsArray[i].strCategory}</h4>
                <h4 class="py-3">Recipes :</h4>
                <div class="py-3 ingr">
                    <p class="text-dark p-1 m-1 rounded-1">${detailsingreMealsArray[i].strMeasure1}  ${detailsingreMealsArray[i].strIngredient1}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsingreMealsArray[i].strMeasure2}  ${detailsingreMealsArray[i].strIngredient2}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsingreMealsArray[i].strMeasure3}  ${detailsingreMealsArray[i].strIngredient3}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsingreMealsArray[i].strMeasure4}  ${detailsingreMealsArray[i].strIngredient4}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsingreMealsArray[i].strMeasure5}  ${detailsingreMealsArray[i].strIngredient5}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsingreMealsArray[i].strMeasure6}  ${detailsingreMealsArray[i].strIngredient6}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsingreMealsArray[i].strMeasure7}  ${detailsingreMealsArray[i].strIngredient7}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsingreMealsArray[i].strMeasure8}  ${detailsingreMealsArray[i].strIngredient8}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsingreMealsArray[i].strMeasure9}  ${detailsingreMealsArray[i].strIngredient9}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsingreMealsArray[i].strMeasure10}  ${detailsingreMealsArray[i].strIngredient10}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsingreMealsArray[i].strMeasure11}  ${detailsingreMealsArray[i].strIngredient11}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsingreMealsArray[i].strMeasure12}  ${detailsingreMealsArray[i].strIngredient12}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsingreMealsArray[i].strMeasure13}  ${detailsingreMealsArray[i].strIngredient13}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsingreMealsArray[i].strMeasure14}  ${detailsingreMealsArray[i].strIngredient14}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsingreMealsArray[i].strMeasure15}  ${detailsingreMealsArray[i].strIngredient15}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsingreMealsArray[i].strMeasure16}  ${detailsingreMealsArray[i].strIngredient16}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsingreMealsArray[i].strMeasure17}  ${detailsingreMealsArray[i].strIngredient17}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsingreMealsArray[i].strMeasure18}  ${detailsingreMealsArray[i].strIngredient18}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsingreMealsArray[i].strMeasure19}  ${detailsingreMealsArray[i].strIngredient19}</p>
                    <p class="text-dark p-1 m-1 rounded-1">${detailsingreMealsArray[i].strMeasure20}  ${detailsingreMealsArray[i].strIngredient20}</p>
                </div>  
                <h4>Tags :</h4> 
                <p id="tags" class="tags text-dark p-1 m-1 rounded-1">${detailsingreMealsArray[i].strTags}</p>
                <button class="px-4 py-2 mt-4 me-3 btn btn-success"><a target="_blank" href="${detailsingreMealsArray[i].strSource}" class="text-decoration-none text-white">Source</a></button>
                <button class="px-4 py-2 mt-4 btn btn-danger"><a target="_blank" href="${detailsingreMealsArray[i].strYoutube}" class="text-decoration-none text-white">Youtube</a></button>
            </div>
        </div>
        `
    }
    ingreMealsDetails.innerHTML= cartona;
    hideWhiteSpaces();
    $("#ingreMealsDetails").removeClass("d-none")
}


// Display 1 Category Meals
function displayMealsInOne() {
    let cartona = "";
    for (let i = 0; i < catOneArray.length; i++) {
      cartona += `
        <div class="col-md-3 p-3 cartona">
          <div class="position-relative overflow-hidden card">
            <img src="${catOneArray[i].strMealThumb}" class="w-100 h-100" alt="">
            <div class="layer w-100 h-100 bg-black bg-white position-absolute d-flex align-items-center fw-bold p-5 fs-2">
              ${catOneArray[i].strMeal}
              <p class="d-none">${catOneArray[i].idMeal}</p>
            </div>
          </div>
        </div>
      `;
    }
    main.innerHTML = cartona;
  
    $(".cartona").click(async function (e) {
      id = this.children[0].children[1].children[0].innerHTML;
      await getMealsforSpecificCategory();
      displayMealDetails();
    });
  }


// Display meals in specific category section
function displayCateMeals() {
  let cartona = "";
  for (let i = 0; i < detailsArray.length; i++) {
    cartona += `
      <div class="col-md-3 p-3 cartona">
        <div class="position-relative overflow-hidden card">
          <img src="${detailsArray[i].strMealThumb}" class="w-100 h-100" alt="">
          <div class="layer w-100 h-100 bg-black bg-white position-absolute d-flex align-items-center fw-bold p-5 fs-2">
            ${detailsArray[i].strMeal}
            <p class="d-none">${detailsArray[i].idMeal}</p>
          </div>
        </div>
      </div>
    `;
  }
catDetails.innerHTML = cartona;
  $("#cateDetails").removeClass("d-none")
  $(".cartona").click(async function (e) {
    mealId = this.children[0].children[1].children[0].innerHTML;
    $("#cateDetails").addClass("d-none")
    await getOneMealDetails();
    CatDisplayMealDetails()
  });
}
// Display Categories
function displayCategories() {
    let cartona = "";
    for (let i = 0; i < catArray.length; i++) {
        cartona += `
        <div class="col-md-3 p-3 cartona">
            <div class="position-relative overflow-hidden card">
                <img src="${catArray[i].strCategoryThumb}" class="w-100 h-100" alt="">
                <div class = "layer w-100 h-100 bg-black bg-white position-absolute d-flex align-items-center flex-column overflow-hidden p-1">
                    <h4>${catArray[i].strCategory}</h4>
                    <p class="fs-smaller">${catArray[i].strCategoryDescription}</p>
                </div>
            </div>
        </div>
        `;
    }
    cate.innerHTML = cartona;
    $("#cate").removeClass("d-none")
    $(".cartona").click(async function (e) {
    idFromCat = this.children[0].children[1].children[0].innerHTML;
    $("#cate").addClass("d-none")
    await getMealsforSpecificCategory()
    displayCateMeals();
    });
  }
  


// // Display meals in the search by name section
function displayMealsByName(){
    let cartona = "";
    for(let i = 0 ; i< sNarray.length ; i++){
        cartona += `
        <div class="col-md-3 p-3 cartona">
            <div class="position-relative overflow-hidden card">
                <img src="${sNarray[i].strMealThumb}" class="w-100 h-100" alt="">
                <div class = "layer w-100 h-100 bg-black bg-white position-absolute d-flex align-items-center fw-bold p-5 fs-5">
                    <h6> ${sNarray[i].strMeal} </h6>
                    <p class="d-none">${sNarray[i].idMeal}</p>
                </div>
            </div>
        </div>
        `
    }
    searcher.innerHTML= cartona;
    $(".cartona").click(async function (e) {
        $("#search").addClass("d-none")
        idFromSearchbyName = this.children[0].children[1].children[1].innerHTML;
        await getDetailstoSearchName()
        displayMealDetailsforSearchName()
    })
    
    
}
// // Display meals in the search by letter section
function displayMealsByLetter(){
    let cartona = "";
    for(let i = 0 ; i< sLarray.length ; i++){
        cartona += `
        <div class="col-md-3 p-3 cartona">
            <div class="position-relative overflow-hidden card">
                <img src="${sLarray[i].strMealThumb}" class="w-100 h-100" alt="">
                <div class = "layer w-100 h-100 bg-black bg-white position-absolute d-flex align-items-center fw-bold p-5 fs-5">
                    ${sLarray[i].strMeal}
                    <p class="d-none">${sLarray[i].idMeal}</p>
                </div>
            </div>
        </div>
        `
    }
    searcher.innerHTML= cartona;
    $(".cartona").click(async function (e) {
        idFromSearch = this.children[0].children[1].children[0].innerHTML;
        $("#search").addClass("d-none")
        await getDetailstoSearchLetter()        
        displayMealDetailsforSearchLetter()
    })
    
}



//hide white spaces from Paragraph
function hideWhiteSpaces() {
    const pElements = document.getElementsByTagName("p");
    for (let i = 0; i < pElements.length; i++) {
        const pElement = pElements[i];
        if (/^\s*$/.test(pElement.innerHTML)) {
        pElement.style.display = "none";
        }
    }
}

    
$(".doorCloser").click(closeDoor);
function closeDoor() {
        $(".sideNav").css("left","-250px")
        $(".doorCloser").addClass ("d-none")
        $(".doorOpener").removeClass ("d-none")
        $(".searchLI").animate({ top: "100%" }, 500);
        $(".categ").animate({ top: "100%" }, 500);
        $(".areaLi").animate({ top: "100%" }, 500);
        $(".ingreLi").animate({ top: "100%" }, 500);
        $(".contactLi").animate({ top: "100%" }, 500);
}

  $(".doorOpener").click(() => {
    $(".sideNav").css("left","0px")
    $(".doorOpener").addClass ("d-none")
    $(".doorCloser").removeClass ("d-none") 
    if ($(".sideNav").css("left") == "-250px") {
      $(".searchLI").animate({ top: 0 }, 1000);
      $(".categ").animate({ top: "10%" }, 1000);
      $(".areaLi").animate({ top: "20%" }, 1000);
      $(".ingreLi").animate({ top: "30%" }, 1000);
      $(".contactLi").animate({ top: "40%" }, 1000);
    }
  });




$("#SbyN").change(async function () {
    await getMealbyName()
    displayMealsByName();
})
$("#SbyFL").on("input", async function () {
    await getMealbyFL()
    displayMealsByLetter();
})


$(".searchLI").click(function() {
  $("#search").removeClass("d-none")

  closeDoor()  
})
$(".contactLi").click(function () {
  closeDoor()
  $("#contact").removeClass("d-none")
  })





  $('.ulItems li').click(function() {
    var target = $(this).data('target');
    $(target).removeClass('d-none').siblings('.section').addClass('d-none');
  });
  
  

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const ageInput = document.getElementById("age");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const submitButton = document.getElementById("submit");

const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
const emailRegex = /^\S+@\S+\.\S+$/;
const phoneRegex =/^(\+2)?01\d{9}$/
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

function validateName() {
  if (nameRegex.test(nameInput.value)) {
    nameInput.setCustomValidity("");
    nameInput.classList.remove("is-invalid");
    nameInput.nextElementSibling.textContent = '';
  } else {
    nameInput.setCustomValidity("Please enter a valid name");
    nameInput.classList.add("is-invalid");
    nameInput.nextElementSibling.textContent = 'Please enter a valid name';
  }
  checkValidity();
}

function validateEmail() {
  if (emailRegex.test(emailInput.value)) {
    emailInput.setCustomValidity("");
    emailInput.classList.remove("is-invalid");
    emailInput.nextElementSibling.textContent = '';
  } else {
    emailInput.setCustomValidity("Please enter a valid email");
    emailInput.classList.add("is-invalid");
    emailInput.nextElementSibling.textContent = 'Please enter a valid email';
  }
  checkValidity();
}

function validatePhone() {
  if (phoneRegex.test(phoneInput.value)) {
    phoneInput.setCustomValidity("");
    phoneInput.classList.remove("is-invalid");
    phoneInput.nextElementSibling.textContent = '';
  } else {
    phoneInput.setCustomValidity("Please enter a valid phone number");
    phoneInput.classList.add("is-invalid");
    phoneInput.nextElementSibling.textContent = 'Please enter a valid phone number';
  }
  checkValidity();
}

function validateAge() {
  if (ageInput.value >= 18 && ageInput.value <= 120) {
    ageInput.setCustomValidity("");
    ageInput.classList.remove("is-invalid");
    ageInput.nextElementSibling.textContent = '';
  } else {
    ageInput.setCustomValidity("Please enter a valid age between 18 and 120");
    ageInput.classList.add("is-invalid");
    ageInput.nextElementSibling.textContent = 'Please enter a valid age between 18 and 120';
  }
  checkValidity();
}

function validatePassword() {
  if (passwordRegex.test(passwordInput.value)) {
    passwordInput.setCustomValidity("");
    passwordInput.classList.remove("is-invalid");
    passwordInput.nextElementSibling.textContent = '';
  } else {
    passwordInput.setCustomValidity("Please enter a valid password with at least 8 characters, one uppercase letter, one lowercase letter, and one number");
    passwordInput.classList.add("is-invalid");
    passwordInput.nextElementSibling.textContent = 'Please enter a valid password with at least 8 characters, one uppercase letter, one lowercase letter, and one number';
  }
  validateConfirmPassword();
  checkValidity();
}

function validateConfirmPassword() {
  if (confirmPasswordInput.value === passwordInput.value && passwordRegex.test(passwordInput.value)) {
    confirmPasswordInput.setCustomValidity("");
    confirmPasswordInput.classList.remove("is-invalid");
    confirmPasswordInput.nextElementSibling.textContent = '';
  } else {
    confirmPasswordInput.setCustomValidity("Please enter the same password");
    confirmPasswordInput.classList.add("is-invalid");
    confirmPasswordInput.nextElementSibling.textContent = 'Please enter the same password';
  }
  checkValidity();
}

function checkValidity() {
  if (nameInput.checkValidity
    && emailInput.checkValidity() 
    && phoneInput.checkValidity() 
    && ageInput.checkValidity() 
    && passwordInput.checkValidity() 
    && confirmPasswordInput.checkValidity()) {
       submitButton.disabled = false;
     } else {
       submitButton.disabled = true;
     }
   }
   
   nameInput.addEventListener("input", validateName);
   emailInput.addEventListener("input", validateEmail);
   phoneInput.addEventListener("input", validatePhone);
   ageInput.addEventListener("input", validateAge);
   passwordInput.addEventListener("input", validatePassword);
   confirmPasswordInput.addEventListener("input", validateConfirmPassword);
   