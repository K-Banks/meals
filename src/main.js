import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import { API } from './api.js';
import { Data } from './data.js';

$(document).ready(function(){
  $("button#randomMeal").click(function(event) {
    event.preventDefault();
    $("div.error").hide();
    $("ul#ingredients").empty();
    let randomCall = new API();
    let dataCall = new Data();
    let promiseMeal = randomCall.requestRandomAPI();

    promiseMeal.then(function(response) {
      $(".recipe").show();
      let responseMeal = response;
      let meal = responseMeal.meals[0];
      let ingredientArray = dataCall.ingredientCompiler(meal);
      let measurementArray = dataCall.measurementCompiler(meal);

      let responseImage = document.getElementById("image");
      responseImage.src=responseMeal.meals[0].strMealThumb;
      $("h4#name").text(responseMeal.meals[0].strMeal);
      $("p#instructions").text(responseMeal.meals[0].strInstructions);

      for (var i = 0; i < ingredientArray.length; i++) {
        $("ul#ingredients").append(
          `<li>${measurementArray[i]} ${ingredientArray[i]}</li>`
        )
      }

    }, function(error) {
      $("div.error").text("There has been an error: " + error);
      $("div.error").show();
    });
  });

  $("form#mainIngredient").submit(function(event) {
    event.preventDefault();
    $("div.wrapper").empty();
    let searchString = $("input.inputField").val();
    $("input.inputField").val("");
    let ingredientCall = new API();
    let dataCall = new Data();
    let promiseMeals = ingredientCall.requestIngredientAPI(searchString);

    promiseMeals.then(function(responseMeals) {
      responseMeals.meals.forEach(function(meal) {
        $("div.wrapper").append(
          `<div class="card thumbnail">
            <span id="${meal.idMeal}" class="takeMeThere">
              <img class="card-img-top image" src="${meal.strMealThumb}" alt="image of ${meal.strMeal}">
              <h4 class="card-title name">${meal.strMeal}</h4>
            </span>
          </div>`
        );
        $("div.thumbnail").last().on('click', function(event) {
          // debugger;
          event.preventDefault();
          // let spanTarget = this.getElementsByClassName("takeMeThere";)
          console.log("you clicked me!!");
          console.log("This is the meal id: " + spanTarget.id);
        });

      });
    }, function(error) {
      console.log("There was an error " + error);
    });
  });


});
