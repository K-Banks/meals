class Data {

  ingredientCompiler(meal) {
    let ingredientArray = [];
    for (let ingredient in meal) {
      if ( (ingredient.includes("strIngredient") && meal[ingredient] !== "") && (ingredient.includes("strIngredient") && meal[ingredient] !== null) ) {
        ingredientArray.push(meal[ingredient]);
      }
    }
    return ingredientArray;
  }

  measurementCompiler(meal) {
    let measurementArray = [];
    for (let measurement in meal) {
      if ( measurement.includes("strMeasure") ) {
        measurementArray.push(meal[measurement]);
      }
    }
    return measurementArray;
  }

}

export { Data };
