var elBox1 = document.querySelector('.box1')
var elBox2 = document.querySelector('.box2')
var elBox3 = document.querySelector('.box3')
var elBox4 = document.querySelector('.box4')
var elBox5 = document.querySelector('.box5')
var elTitle = document.querySelector('.title')
var count = 0
var second = 6
setInterval(() => {
    count = count + 1
    if (count >= 1 && count <= 6) {
        elBox1.classList.add('r')
        elBox2.classList.remove('y')
        elBox3.classList.remove('g')
        
     
    }
    if (count == 7 || count == 13) {
        elBox1.classList.remove('r')
        elBox2.classList.add('y')
        elBox3.classList.remove('g')
    }
    if (count >= 8 && count <= 12) {
        elBox1.classList.remove('r')
        elBox2.classList.remove('y')
        elBox3.classList.add('g')
    }
    if (count >= 13) {
        count = 0
    }
}, 1000)

setInterval(()=>{
    if(count == 7 || count == 8) {
        elBox4.classList.add('red')
        elBox5.classList.remove('green')
       
    }
    if(count >= 1 && count <= 6){
        elBox4.classList.remove('red')
        elBox5.classList.add('green')

    }

},1000)


// let second = 5;

// function startTimer() {
//     const intervalId = setInterval(() => {
//        elTitle.textContent = second;
//         second--;

//         if (second < 0) {
//             clearInterval(intervalId); 
           
//         }
//     }, 1000);
// }

// startTimer();










