import { API } from './../src/scripts.js';
import { parseResult } from './../src/scripts.js';

describe('API Test', function() {

  it('should return a variable containing the API response', function() {
    const newAPI = new API();
    let test = 0;
    test = newAPI.APIRequest();
    console.log("after first test. Expect Array. " + test);
    console.log(test);
    expect(test).not.toEqual(0);
  });

  // it('should return a string containing all dinos returned by the API', function() {
  //   const newAPI = new API();
  //   let test = newAPI.APIRequest();
  //   let output = parseResult(test);
  //   console.log("second test. Expect string: " + output);
  //   expect(output).not.toEqual(0);
  // });

});
