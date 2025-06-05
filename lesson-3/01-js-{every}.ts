
//Bài 1: Tạo một mảng scores chứa các giá trị điểm của học sinh: 85, 90, 78. Hãy kiểm tra xem tất cả các điểm số đều lớn hơn 70 hay không.
let scores = [85, 90, 78]
let biggerThan70 = scores.every(number => number >= 70)
console.log(biggerThan70)

// Bài 2: Tạo một mảng ages chứa các giá trị tuổi: 18, 21, 16, 25. Hãy kiểm tra xem tất cả các tuổi đều lớn hơn 15 hay không.

let ages = [18, 21, 16, 25]
let biggerThan15 = ages.every(age => age >= 15)
console.log(biggerThan15)


// Bài 3: Tạo một mảng words chứa các từ: "apple", "banana", "cherry", "date". Hãy kiểm tra xem tất cả các từ đều có độ dài lớn hơn 3 ký tự hay không.

 let words = ["apple", "banana", "cherry", "date"]
 let biggerThan3 = words.every(word => word.length >= 3)
 console.log(biggerThan3)


 