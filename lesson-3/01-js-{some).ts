//1
let scores = [85, 90, 78];
let check_scores = scores.some(num => num >= 80);
console.log(check_scores);

//2
let ages = [18, 21, 16, 25];
let check_ages = ages.some(num => num <= 18);
console.log(check_ages)

//3
let words = ["apple", "banana", "cherry", "date"]
let check_words = words.some(i => i.length >= 5)
console.log(check_words)