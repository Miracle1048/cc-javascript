//  array within an array
 let num = [[1,2], [3,5]]
//  console.log(num[1][1])

//  Array within an object
let sample = [
    {name: 'jamiu', id: 12, school: 'unilag'},
    {name: 'jamiu', id: 20, school: ['OAU', 'Uniben', 'BUK']},
    {name:'jamiu', id:46, school:[{North: ['BUK', 'ABU', 'Unimaid', 'FUTM'],
     West: ['Unilag', 'OAU', 'UI', 'Lautech'], 
     East: ['UNN', 'EBSU', 'ABSU', 'UniZik'], 
     South: ['Uniport', 'Unical', 'UniUyo', 'Delsu']
    }
  ]
}
]
// console.log(sample[1].school[1]);
// console.log(sample[2].id)
// console.log(sample[2].school[0].North[1])
// console.log(sample[2].school[0].East[3])
// console.log(sample[0].school)
// console.log(sample[1].school[2])
// console.log(sample[2].school[0].East[1])
// console.log(sample[2].school[0].South[1])

let input = document.getElementsByTagName('input')
function displayValue(){
    console.log(input[0].value)
}
displayValue()

// let input = document.getElementsByTagName('input');
// let name = document.getElementById('name');

// function displayValue(){
//     name.innerHTML = input[0].value;
// }
// displayValue()

