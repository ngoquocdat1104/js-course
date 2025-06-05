//1
let scores = [85, 90, 78];
let sum_scores = scores.reduce((sum, num) => sum + num, 0);
console.log(sum_scores);

//2
let numbers = [1,2,3,4];
let multiply = numbers.reduce((multiply, num) => multiply*num, 1);
console.log(multiply);

//3 
let expenses = [50, 100, 150];
let total_expenses = expenses.reduce((sum, expense) => sum + expense, 0);
console.log(total_expenses);