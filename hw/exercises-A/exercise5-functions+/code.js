// Write your code in this file.
// Save to see test status
function greeting(a) {
    return "Hello " + a + "!";
}
function isThisValueTrue(a) {
   let arr = a;
        return Boolean(arr);
    }
    isThisValueTrue(1);
function isThisNumberEven(a) {
    if (a % 2 == 0 ) {
        return "even";
    } else 
    return "odd";
}
function makeNumberNegative(x) {
  return -Math.abs(x);
}
function doYouWantCake (boolean) {
    if (boolean===true ) {
        return "yes";}
    else {
    return "no";}
}
function wordLength(a){
 return a.length;
 
}
function carBuilder(carBrand,carModel,carYear) {
return {
    make:carBrand,
    model:carModel,
    year: carYear,
};
}
 function teachersNeeded(a,b){
    var c = a / b;
    return Math.ceil(c); 
}