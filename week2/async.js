function sayHello(name){
    console.log('Hello Tinubu') 
}
// setInterval(sayHello, 5000)

// display time
function display(){
    let time = new Date();
    let timeHeading = document.getElementById('time');
    timeHeading.innerHTML = time.toLocaleTimeString();
    // console.log(time.toLocaleTimeString())
}

setInterval(display, 1000)
