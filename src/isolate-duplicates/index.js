/* My thoughts process:
- check if the type of text is a string, if it is a string carry on, otherwise print "please enter a valid string";
- create an empty array and store it in a variable;
- initialize the no of duplicates to zero, also do same for total no of duplicates;
- split the text into single word array;
- iterate through the text and push the index into newArr variable;
- state the condition whereby, if text at an index with the text next to it is defined, and text at an index is equal to the text next to it, increase the no of duplicates;
- create another conditional whereby, if the no of duplicates is greater than 2, push open bracket to newArr and increase the total no of duplicates;
- otherwise, check if text at an index from the back of the array or text at an index is not equal to text next to it and the text next to it is defined, also if the no of duplicates is greater is greater than 1, then push close bracket into newArr;
- check if the no of duplicates in newArr is well matched, if it, initialize it to 0;
- then return joined newArr and total no of duplicates;
*/
function isolateDuplicates(text) {
    if(typeof text !== "string"){
        throw new Error("Please enter a valid string");
      }
      let newArr = [];
      let noOfDuplicates = 0;
      let totalNoOfDuplicates = 0;
       text = text.split('');
      
      for (let i = 0; i < text.length; i++) {
        newArr.push(text[i])

        if (text[i + 1] != undefined && text[i].toLowerCase() == text[i + 1].toLowerCase()) {
          noOfDuplicates++;

          if(noOfDuplicates == 2){
            newArr.push("[");
            totalNoOfDuplicates++;
          }
        } else if (text[i + 1] != undefined && text[i].toLowerCase() !== text[i + 1].toLowerCase() || i == text.length - 1) {
          if (noOfDuplicates > 1){
            newArr.push("]");
          }
          noOfDuplicates = 0;
        }
      }
      return [newArr.join(''), totalNoOfDuplicates];
};

module.exports = isolateDuplicates;
