function alert(x){ 
    x === 'undefined' ? console.log('undefined') : console.log(x); return; 
 }; 
 alert('x'); alert();
// Create an array called cars which consists of 4 different types of cars as String type. The first car type should be Ford and includes Honda.

let cars = ["Ford", "GMC", "Honda", "Jeep"];

// Console.log the length of the array.

console.log(cars.length);

// Use node main.js to run the program.


// ====================================


// Create another array called moreCars with 4 more different types of cars. The last car type should be Honda.

let moreCars = ['Jeep', 'Chevy', 'Pontiac', 'Honda']

// Use the concat method to combine the cars and moreCars arrays into another array called totalCars.

let totalCars = cars.concat(moreCars)

console.log(totalCars)

// Run the program.

// ====================================

// Use the indexOf method to console.log the index of Honda.

console.log(totalCars.indexOf('Honda'))

// Use the lastIndexOf method to console.log the index of Ford.

console.log(totalCars.lastIndexOf('Ford'))

// Run the program.

// ====================================

// Use the join method to covert the array totalCars into a string called stringOfCars.

let stringOfCars = totalCars.join(',');

console.log(stringOfCars)

// Run the program.

// ====================================

// Use the split method to convert stringOfCars back intro an array called totalCars.

totalCars = stringOfCars.split(",")

console.log(totalCars)

// Run the program.

// ====================================

// Use the reverse method to create an array carsInReverse which is the array totalCars in reverse.

console.log("before reversed")
console.log(totalCars)

let carsInReverse = totalCars.reverse();

console.log('after reversed')
console.log(carsInReverse)

// Run the program.

// ====================================

// Use the sort method to put the array carsInReverse into alphabetical order.

console.log(carsInReverse.sort());


// Based on the types of cars you used, predict which item in the array should be at index 0.

// my prediction is Chevy because is better than Ford

// Use the following code to confirm or reject your prediction:

alert(carsInReverse.indexOf('yourPrediction'));

// ====================================

// Use the slice method to remove Ford and Honda from the carsInReverse array and move them into a new array called removedCars.

let removedCars = carsInReverse.slice(1, 3)

console.log(carsInReverse)
console.log(removedCars)

// ====================================

// Use the splice method to remove the 2nd and 3rd items in the array carsInReverse and add Ford and Honda in their place.
console.log(carsInReverse);
carsInReverse.splice(2, 3, 'Ford', 'Honda');
console.log(carsInReverse);

// ====================================

// Use the push method to add the types of cars that you removed using the splice method to the carsInReverse array.

console.log(carsInReverse);
carsInReverse.push("GMC", "Honda");
console.log(carsInReverse);

// ====================================

// Use the pop method to remove and console.log the last item in the array carsInReverse.

console.log(carsInReverse.pop())
console.log(carsInReverse);

// ====================================

// Use the shift method to remove and console.log the first item in the array carsInReverse.

console.log(carsInReverse.shift([0]));
console.log(carsInReverse)

// ====================================

// Use the unshift method to add a new type of car to the array carsInReverse.

carsInReverse.unshift("Corvette");
console.log(carsInReverse)

// ====================================

// Create an array called numbers with the following items: 23, 45, 0, 2 Write code that will add 2 to each item in the array numbers.
// .forEach() requires a function to be passed into it as its first argument. Build a function that will add 2 and then use .forEach() to pass each number into your freshly built function. const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]

const numbers = [23, 45, 0, 2]
const numbers2 = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]

numbers.forEach(myFunction)
numbers2.forEach(myFunction)

function myFunction(item, index, arr) {
    arr[index] = item + 2;
}

console.log(numbers)
console.log(numbers2)

// Hope i did it all correctly :(

