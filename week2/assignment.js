// function divisionCalc(num){
//     if(num % 100 === 0){
//         return true

//     }
//     else{
//         return false
//     }
// }
// console.log(divisionCalc(1))
// console.log(divisionCalc(1000))
// console.log(divisionCalc(100))

// console.log('\n\n')
// // Q uestion 2:
//  function fiftyThirtyTwenty(ati) {
//  const budget = {
//      'Needs': ati / 100 * 50,
//      'wants': ati / 100 * 30,
//      'Savings': ati / 100 * 20,
//  }
//   return budget;
//  }
    
//  console.log(fiftyThirtyTwenty(10000))
//  console.log(fiftyThirtyTwenty(50000))
//  console.log(fiftyThirtyTwenty(13450))


//  console.log('\n\n')
// // Question 3
// function makesTen(a, b) {
//     if ( a === 10 || b === 10 ) {
//         return true;
        
//     }
//     else if(a + b ===10){
//         return true;
//     } 
//     else{
//         return false;
//     }
// }
// console.log(makesTen(9, 10))
// console.log(makesTen(9, 9))
// console.log(makesTen(1, 9))


// function minMax(array){
//     let smallest = Math.min(...array);
//     let largest = Math.max(...array)

//     return [smallest, largest];
// }

// console.log(minMax([1,2,3,4,5]))


//emotify the sentence
function emotify(sentence) {
    sentence = sentence + ' ';
    let word = '';
    let newSentence = ''
    for(let count = 0; count < sentence.length; count++){
        if (sentence[count] === ' '){
            if (word === 'smile'){
                word = ':D';
            }
            else if(word === 'grin'){
                word = ':)';
            }
            else if(word === 'sad'){
                word = ':(';
            }
            else if(word === 'mad'){
                word = ':p';
            }

            newSentence = newSentence + word + ' ';
            word = '';
        
        }
         else {
                word = word + sentence[count];
        }
    }
       console.log(newSentence);
}

    emotify('Make me sad');

    console.log('\n\n')

    //Exercise: How many vowels

    function countVowels(string){
        let noOfVowels = 0;
        for (let count = 0; count < string.length; count++){
            if(string[count] === 'a' || string[count] === 'e' || string[count] === 'i' || string[count] === 'o'
                || string[count] === 'u'
             )
                noOfVowels++
             
        }

        return noOfVowels;
    }

    console.log(countVowels('Celebration'))
    console.log('\n\n')
    // Reverse the case
    function reverseCase(string){
        let newString = ''
        for (let count = 0; count < string.length; count++){
            if (string[count] === string[count].toUpperCase()) {
                newString = newString + string[count].toLowerCase();
                
            }
            else{
                newString = newString + string[count].toUpperCase()
            }
        }

        return newString
    }
console.log(reverseCase('Happy Birthday'));
console.log(reverseCase('MANY THANKS'));
console.log(reverseCase('SpONTanNeOUS'));



