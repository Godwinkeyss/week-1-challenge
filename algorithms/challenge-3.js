function sumMix(arr) {
   
    var stringArray = ["1", "2", "3", "4", "5",6,7];
     // Create an empty array of number
     var numberArray = [];

       // Store length of array of string
    // in variable length
    length = stringArray.length;
  
    for (var i = 0; i < length; i++)

    numberArray.push(parseInt(stringArray[i]));
    console.log(numberArray);


 }
 

sumMix()
  module.exports = sumMix