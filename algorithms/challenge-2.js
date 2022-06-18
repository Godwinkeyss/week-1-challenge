function filterArray(arr) {
    return arr.filter(x => typeof x === "number");
   
}
filterArray([1, 2, "aasf", "1", "123", 123])
console.log(filterArray([1, 2, "aasf", "1", "123", 123]));

module.exports = filterArray