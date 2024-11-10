// Immediate Invoke Function Expression
// Just a techinque that exectuesfunction only once
// it does not have any name nor store in any variable
// used to avoid global pollution
// global pollution?

var a = 20;
console.log(a);
(function () {
  let a = 300;
  console.log(a);
})();

(function () {
  const a = 1000;
  console.log(a);
})();
