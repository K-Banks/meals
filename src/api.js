class API {

  requestRandomAPI() {
    let promise = new Promise(function(resolve, reject) {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://www.themealdb.com/api/json/v1/1/random.php');
      xhr.send();
      xhr.onload = function() {
        if (this.status === 200) {
          let response = JSON.parse(xhr.response);
          resolve(response);
        } else {
          reject(Error(xhr.statusText));
        }
      }
    });
    return promise;
  }

  requestIngredientAPI(searchString) {
    let promise = new Promise(function(resolve, reject) {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchString}`);
      xhr.send();
      xhr.onload = function() {
        if (this.status === 200) {
          let response = JSON.parse(xhr.response);
          resolve(response);
        } else {
          reject(Error(xhr.statusText));
        }
      }
    });
    return promise;
  }

  requestIdAPI(searchString) {
    let promise = new Promise(function(resolve, reject) {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${searchString}`);
      xhr.send();
      xhr.onload = function() {
        if (this.status === 200) {
          let response = JSON.parse(xhr.response);
          resolve(response);
        } else {
          reject(Error(xhr.statusText));
        }
      }
    });
    return promise;
  }


}

export { API };
