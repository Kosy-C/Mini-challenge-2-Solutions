/* My thought process:
- sort the object keys in descending order and store them in a variable;
- create an empty array and store it in a new result variable;
- iterate through the object keys; 
- create another empty and store it in a new arr variable;
- iterate through the object keys index and check if it contains a specific property using the hasOwnProperty method, continue the loop;
- in the arr array, push in the object keys index;
- initialize the result variable to zero, if the result contains all the object keys index values;
- then initialize object keys at index to the arr;
- return object;
*/
function removeDuplicates(obj) {
let keys = Object.keys(obj).sort((a, b) => b - a);
    let result = [];

    for (let i = 0; i < keys.length; i++) {
      let arr = [];

      for (let k = 0; k < obj[keys[i]].length; k++) {
        if (result.hasOwnProperty(obj[keys[i]][k])) {
          continue;
        }
        arr.push(obj[keys[i]][k]);
        result[obj[keys[i]][k]] = 0;
      }
      obj[keys[i]] = arr;
    }
    return obj;

};

module.exports = removeDuplicates;
