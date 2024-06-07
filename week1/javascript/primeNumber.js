// let number = 5;

// for (let count = number; count >=1; count--){
//     if (number % count === 0 ){
//         console.log('it is not a prime number')

//     }
//     else {
//         console.log('Yes,it is a prime number')
//     }
// }

// let count = 0;
// let i , j
// for (
//     j = 5; j <= 100; j++)
//     {
//     for(i = 1; i <= j; i++){
//         if (j % i == 0);
//         count++;
//     }

//     if(count == 5);

//         console.log(j);
//         count = 0
// }
let number = 19;

for (let count = number - 1; count >= 1; count--){
    console.log(number + ' / ' + count + ' = ' + Math.floor((number / count)) + 
    ' r ' + (number % count))
    if (count != 1 && number % count === 0){
        console.log(number + ' is not a prime number');
        break;
    }

    if (count === 1){
        console.log(number + ' is a prime number');
    }
}