console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 1) {
    console.log(i);
  }
  else
    continue;
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FIZZBUZZ");
  }
  else if (i % 3 == 0) {
    console.log("FIZZ");
  }
  else if (i % 5 == 0) {
    console.log("BUZZ");
  }
  else
    console.log(i);
} 

// Exercise 3 Section
console.log("");
console.log("EXERCISE 3.1:\n==========\n");
let number = 1;
while(number <=100){
  if(number%2==1)
    console.log(number);
  number++;
}

console.log("");
console.log("EXERCISE 3.2:\n==========\n");
number = 1;
while(number<=100){
  if (number % 3 == 0 && number % 5 == 0) {
    console.log("FIZZBUZZ");
  }
  else if (number % 3 == 0) {
    console.log("FIZZ");
  }
  else if (number % 5 == 0) {
    console.log("BUZZ");
  }
  else
    console.log(number);
  number++;
}

console.log("");
console.log("EXERCISE 3.3:\n==========\n");
number = 1;
do{
  if(number%2==1)
    console.log(number);
  number++;
}while(number <=100);

console.log("");
console.log("EXERCISE 3.4:\n==========\n");
number = 1;
do{
  if (number % 3 == 0 && number % 5 == 0) {
    console.log("FIZZBUZZ");
  }
  else if (number % 3 == 0) {
    console.log("FIZZ");
  }
  else if (number % 5 == 0) {
    console.log("BUZZ");
  }
  else
    console.log(number);
  number++;
}while(number<=100);


// Exercise 4 Section
console.log("");
console.log("EXERCISE 4:\n==========\n");
let value = Math.round((Math.random() * 500));
let n = Math.round(Math.random() * (500 - 100) + 100);
let foundValue = false;

for (let i = 0; i <= n; i++) {
  if (i == value) {
    console.log(`Found it!`);
    foundValue = true;
    break;

  }
}
if (!foundValue)
  console.log("Did not find value");

//Exercise 5 Section
console.log("");
console.log("EXERCISE 5:\n==========\n");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
n = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (; start <= n; start++) {
  if (start % fizzDivisor == 0 && start % buzzDivisor == 0)
    console.log("FIZZBUZZ")
  else if (start % fizzDivisor == 0)
    console.log("FIZZ");
  else if (start % buzzDivisor == 0)
    console.log("BUZZ");
  else
    console.log(start);
}
console.log(fizzDivisor);
console.log(buzzDivisor);


