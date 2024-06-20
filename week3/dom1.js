// DOM method 1: Adding element with the page
// we have append and append child they are different, we can use append to append a string
// const body = document.body;
// body.append('hello world' + ' Bye')

// if i use append child is not going to work appendChild only Appened div,span and anchor tag etc
// body.appendChild('Hello World')
// const body = document.body;
//  const div = document.createElement('div')
//  div.innerText = 'Hello World' 
//  body.append(div)

// Using appendChild becuz it an element
//  const body = document.body;
//  const div = document.createElement('div')
//  div.innerText = 'Hello World' 
//  body.appendChild(div)


//  instead of .innerText we can use textContent
// const body = document.body;
// const div = document.createElement('div')
// div.textContent = 'Hello World' 
// body.appendChild(div)

// difference btw Textcontent and innertext
//  const div = document.querySelector('div');
//  console.log(div.textContent);
//  console.log(div.innerText);

// Modifying element HTML
// const body = document.body;
//  const div = document.createElement('div')
//  const strong = document.createElement('strong')
//  strong.innerText = 'Hello World 2'
//  div.append(strong)
// //  div.innerHTML = '<strong> Hello World <strong/>' 
//   body.append(div)

// const body = document.body;
// const div = document.querySelector('div')
//  const spanHi = document.querySelector('hi')
//  const spanBye = document.querySelector('bye')

// spanBye.remove()
//  div.append(spanBye)
// we can also remove from the parent
const body = document.body;
const div = document.querySelector('div');
const spanHi = document.querySelector('Hi');
const spanBye = document.querySelector('Bye');

div.removeChild(spanHi)
//  div.append(spanBye)

 
// console.log(spanHi.getAttribute('id'))
// console.log(spanHi.setAttribute('id', 'gold'))
// console.log(spanHi.id )
// console.log(spanHi.title)
spanHi.classList.add('sfdsgdgfd')
spanHi.classList.remove('sfdsgdgfd')
spanHi.style.color = 'red'
spanHi.style.backgroundColor = 'red' 

// to get the innertext in 
// const body = document.body
// const heading = document.getElementById('main-heading')
// console.log(heading.innerText)

// select the paragraph
// const body = document.body
// const paragraph = document.getElementsByTagName('p')
// console.log(paragraph)

// bring the h2 with class name

// const body = doucment.body
// const allHeading = document.getElementsByClassName('sub-heading')
// console.log(allHeading)

// to collect the innerText of the h2 with Third Topic 
// const allHeading = document.getElementsByClassName('sub-heading')
// console.log(allHeading[1].innerText)

// 
// const heading = document.getElementById('main-heading')
// heading.innerHTML = 'New topic'

// to g
//   const paragraph = document.getElementsByTagName('p')
// for(let count = 0; count < paragraph.length; count++){
//     if(count === paragraph.length - 1){
//         (paragraph[count].innerHTML = 'Things are hard sha')
//     }
    
//     else{
//         (paragraph[count].innerHTML = 'i sabi Javascript sha') 
//     }
// }


// changing the css properties
// const paragraphs = document.getElementsByTagName('p');
// const sub = document.getElementsByClassName('sub-heading');
// sub[1].style.color = 'red';










