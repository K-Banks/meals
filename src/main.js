import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import { API } from './api.js';

$(document).ready(function(){
  $("form#randomMeal").submit(function(event) {
    event.preventDefault();
    $("ul#ingredients").empty();
    let randomCall = new API();
    let promiseMeal = randomCall.requestRandomAPI();

    promiseMeal.then(function(response) {
      let responseMeal = JSON.parse(response);
      let responseImage = document.getElementById("image");
      responseImage.src=responseMeal.meals[0].strMealThumb;
      $("h4#name").text(responseMeal.meals[0].strMeal);
      $("p#instructions").text(responseMeal.meals[0].strInstructions);
      debugger;


      let meal = responseMeal.meals[0];
      let ingredientLists = Object.entries(meal);
      for (var i = 0; i < ingredientLists.length; i++) {
        let ingredientKeyPairs = ingredientLists[i];
        if ((ingredientKeyPairs[0].includes("strIngredient") && ingredientKeyPairs[1].length > 1) || (ingredientKeyPairs[0].includes("strIngredient") && ingredientKeyPairs[1] !== null)) {
          $("ul#ingredients").append(
              `<li>${ingredientKeyPairs[1]}</li>`
          );
        }
      }


      // responseMeal.meals[0].forEach(function(item) {
      //   if (item.includes("strIngredient") {
      //     $("ul#ingredients").append(`<li>${item}</li>`
      //   }
      // });


      // for (var i = 0; i < 20; i++) {
      //   let ingredientCheck = ".strIngredient" + i;
      //   if (responseMeal.meals[0].) {
      //
      //   }
        // let ingredientQuery = "responseMeal.meals[0].strIngredient" + i
        // if (responseMeal.meals[0].strIngredient + i !== "" || responseMeal.meals[0].strIngredient + i !== null) {
        //   let ingredient = responseMeal.meals[0].strIngredient + i;
        //   console.log(ingredient);
        //   $("ul#ingredients").append(
        //     `<li>${ingredient}</li>`
          // );
      //   }
      // }
      console.log("The response is: " + responseMeal.meals[0].strMeal);
      console.log("The response is: " + responseMeal.meals[0].strMealThumb);
      console.log("The response is: " + responseMeal.meals[0].strInstructions);
    }, function(error) {
      console.log("There has been an error" + error);
    });
  });
});
