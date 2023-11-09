let sum = 0;
let a = 1;
let b = 2;
let count = 0;

// console.log(x);

const x = 0;

sum = addAndSubtrackt(a, b, 0);
let sum2 = addAndSubtrackt(a, 6, 2);

function addAndSubtrackt(a, b, c) {
  count++;

  console.log("--- Funtionsanrop nr: " + count + " ---");
  console.log("A är: " + a + " B är: " + b);

  a = a + b;
  const y = a - c;

  console.log("Y är : " + y);
  console.log("A är efter förändring: " + a);
  return y;
}

console.log("--- Utanför funktionen ---");
console.log("count är: " + count + " sum är: " + sum);
console.log("A är: " + a + " B är: " + b);
// console.log("Y är: " + y);

const functionExpression = function () {
  console.log("functionExpressen");
};

const arrowfunction = (a, b) => {
  console.log("a: " + a);
};

arrowfunction(1);
functionExpression();
