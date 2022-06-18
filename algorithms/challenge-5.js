function filterList(arr) {
 
    function filter_list(l) {
        return l.filter(x => typeof x === 'number');
      }
      console.log(filter_list([1, 'a', 'b', 0, 15]));


 }
 filterList()

  module.exports =filterList