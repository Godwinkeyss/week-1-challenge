function sumTwoSmallestNums(arr) {
    



    const sumTwoSmallestNumbers = (numbers) => {
        //Code here
        let ordered = numbers.sort(function(a,b){return a-b;});
      //  console.log(ordered);
        let result = 0;
          for (let i = 0; i < ordered.length; i++){
            if (i===0){
              result = result + ordered[0]; //2
              console.log(result);
            }
            if (i===1){
              result = result + ordered[1]; //5
              console.log(result);
            }
          }
          return result;
      };
      
      console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
      //Output:  (2 + 5) =  7
 
 }
 sumTwoSmallestNums([19, 5, 42, 2, 77])
  module.exports =sumTwoSmallestNums