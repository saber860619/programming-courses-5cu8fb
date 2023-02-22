//######################################################################
//###########################           SSTech       ###################
//###########################   Programming Courses  ###################
//######################################################################
let num1, num2: Number;
let index, result: Number;

num1 = parseInt(prompt('entre number'));
num2 = parseInt(prompt('entre number'));

result = 1;
for (index = 1; index <= num1; index++) {
  result = result * index;
}
console.log(result);

result = 1;
for (index = 1; index <= num2; index++) {
  result = result * index;
}
console.log(result);
