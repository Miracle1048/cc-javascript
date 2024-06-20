let text = 'Visit w3schools'
let n = text.search('w3schools')
console.log(n);

let string = 'Make me smile and we can all smile together';
let word = string.replace(/[abc]/ig, ':D' );
console.log(word);

function isLastCharacterN(string){
    if(string[string.length - 1] === 'n'){
        return true
    }
    else{
        return false
    }
}

    console.log(isLastCharacterN('aiden'))