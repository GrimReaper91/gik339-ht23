let sum = 0;
let a = 1;
let b = 2;
let count = 0;

console.log(x);

const x = 0;

sum = addAndSubtrackt(a, b, 0);
sum = addAndSubtrackt(a, 6, 2);

function addAndSubtrackt(a, b, c) {
  count++;

  console.log("--- Funtionsanrop nr: " + count + " ---");
  console.log("A är: " + a + " B är: " + b);

  a = a + b;

  const y = a - c;

  console.log("A är efter förändring: " + a);
  return y;
}

console.log("--- Utanför funktionen ---");
console.log("count är: " + count + " sum är: " + sum);
console.log("Y är: " + a + " B är: " + b);
console.log("Y är: " + y);
