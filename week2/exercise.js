//Exercise 2: Convert Minute to seconds
function convert(minutes){
    return minutes*60
}
// let result = convert  
// console.log(result(5))
// console.log(result(3))
// console.log(result(2))

// function increase(num){
//     return num + 1
// }
// console.log(increase(0))
// console.log(increase(9))
// console.log(increase(-3))

// function addUp(num){
//     let sum = 0
//     for (let count = 1; count <= num; count++){
//          sum= sum + count;
//         }
// return sum;
       
// }
// console.log(addUp(4))
// console.log(addUp(13))
// console.log(addUp(600))

// function addUp(num){
//     let sum = 0
//     for(let count = 1; count <= num; count++){
//         sum = sum + count;
//     }
//     return sum;
// }
// console.log(addUp(4))

//Exercise 5: find a character in a string

function charCount(char, word){
    let total = 0;
    for (let count = 0; count < word.length; count++){
        if (word[count] === char){
            total = total + 1;
        }
    }

    return total;
}

    console.log(charCount('a', 'edabit'))
    console.log(charCount('c', 'Chamber of secret'))
    console.log(charCount('b', 'big fat bubble'))
    
    