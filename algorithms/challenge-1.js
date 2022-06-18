function secondLargest(arr) {

    var sortedArray = arr.sort(function(a,b){
      return b - a
    })
    var secondLargestNumber = sortedArray[1];
    console.log(secondLargestNumber);
    
    }
    // var  arrays = ;
    secondLargest([2,3,4,5,6,7,12,32]);
    module.exports = secondLargest
    
    