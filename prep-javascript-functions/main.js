function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var addTwoNumbersResult = addTwoNumbers(2, 2);
console.log(addTwoNumbersResult);

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
var convertHoursToMinutesResult = convertHoursToMinutes(2);
console.log(convertHoursToMinutesResult);

function getGreeting(name) {
  return 'Hello' + ' ' + name;
}
var getGreetingResult = getGreeting('World');
console.log(getGreetingResult);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var addAndMultiplyBy5Result = addAndMultiplyBy5(10, 5);
console.log(addAndMultiplyBy5Result);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var multiplyAndDivideBy5Result = multiplyAndDivideBy5(35, 10);
console.log(multiplyAndDivideBy5Result);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var subtractTwoNumbersResult = subtractTwoNumbers(22, 7);
console.log(subtractTwoNumbersResult);

function getCircleCircumference(radius) {
  return radius * 2 * Math.PI;
}
var getCircleCircumferenceResult = getCircleCircumference(5);
console.log(getCircleCircumferenceResult);

function getFulllName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var getFulllNameResult = getFulllName('Juan', 'Ramirez');
console.log(getFulllNameResult);

function cube(number) {
  return number * number * number;
}
var cubeResult = cube(5);
console.log(cubeResult);
