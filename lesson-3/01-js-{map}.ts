
//Bài 1: Tạo một mảng scores chứa các giá trị điểm của học sinh: 85, 90, 78. Hãy sử dụng 
// phương thức map() để tạo ra một mảng mới adjustedScores, trong đó mỗi giá trị là điểm kiểm tra ban đầu được tăng thêm 10% nếu điểm đó dưới 90, và giảm 5% nếu điểm đó từ 90 trở lên.
let scores = [85, 90, 78]
let adjustedScores = scores.map(score => {
    if (score < 90) {
        return score * 1.1
    } else {
        return score * 0.95
    }
})
console.log(adjustedScores)

// Bài 2: Tạo một mảng ages chứa các giá trị tuổi: 18, 21, 16, 25.  Hãy chuyển đổi mảng các số thành mảng các chuỗi.
let ages = [1,2,3]
let charAges = ages.map(age => age.toString())
console.log(charAges)


// Bài 3: Tạo một mảng words chứa các từ: "apple", "banana", "cherry", "date". Hãy nhân đôi mỗi giá trị trong mảng.

 let arr = [1,2,3]
 let doubleArr = arr.map(num => num*2)
 console.log(doubleArr)


 