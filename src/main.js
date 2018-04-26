import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import { API } from './api.js';

$(document).ready(function(){
  $("form#randomMeal").submit(function(event) {
    event.preventDefault();
    $("ul#ingredients").empty();
    $(".recipe").show();
    let randomCall = new API();
    let promiseMeal = randomCall.requestRandomAPI();

    promiseMeal.then(function(response) {
      let responseMeal = JSON.parse(response);
      let responseImage = document.getElementById("image");
      responseImage.src=responseMeal.meals[0].strMealThumb;
      $("h4#name").text(responseMeal.meals[0].strMeal);
      $("p#instructions").text(responseMeal.meals[0].strInstructions);

      let meal = responseMeal.meals[0];
      let ingredientArray = [];
      let measurementArray = [];

      for (let ingredient in meal) {
        if ( (ingredient.includes("strIngredient") && meal[ingredient] !== "") && (ingredient.includes("strIngredient") && meal[ingredient] !== null) ) {
          ingredientArray.push(meal[ingredient]);
        }
      }

      for (let measurement in meal) {
        if ( measurement.includes("strMeasure") ) {
          measurementArray.push(meal[measurement]);
        }
      }

      for (var i = 0; i < ingredientArray.length; i++) {
        $("ul#ingredients").append(
          `<li>${measurementArray[i]} ${ingredientArray[i]}</li>`
        )
      }

      console.log("Ingredient Array" + ingredientArray);
      console.log("Measurement Array" + measurementArray);
      console.log("The response is: " + responseMeal.meals[0].strMeal);
      console.log("The response is: " + responseMeal.meals[0].strMealThumb);
      console.log("The response is: " + responseMeal.meals[0].strInstructions);
    }, function(error) {
      console.log("There has been an error" + error);
    });
  });
});
