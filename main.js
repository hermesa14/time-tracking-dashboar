import data from './data.json' assert{type:'json'}

let dailyBtn = document.querySelector('#daily');
let weeklyBtn = document.querySelector('#weekly');
let monthlyBtn = document.querySelector('#monthly');


let daylyArray= data.map(item => item.timeframes.daily)
let weeklyArray= data.map(item => item.timeframes.weekly)
let monthlyArray= data.map(item => item.timeframes.monthly)



let bgColors =[
'hsl(15, 100%, 70%)',
'hsl(195, 74%, 62%)',
'hsl(348, 100%, 68%)',
'hsl(145, 58%, 55%)',
'hsl(264, 64%, 52%)',
'hsl(43, 84%, 65%)'
]


let secondSection = document.querySelector('.second-section')
drawElements(daylyArray);
dailyBtn.addEventListener('click', ()=>{
    drawElements(daylyArray);
})
weeklyBtn.addEventListener('click', ()=>{
    drawElements(weeklyArray);
})
monthlyBtn.addEventListener('click', ()=>{
    drawElements(monthlyArray);
})
function drawElements(array){
    secondSection.innerHTML =''
    array.forEach((element, index) =>{
        let title = data[index].title
        let titleLowercase= title.toLocaleLowerCase()

        if(titleLowercase=='self care'){
            titleLowercase= 'self-care'
        }
        secondSection.innerHTML += `
        <div class="card">
        <div class="card__background" style="background-color:${bgColors[index]}">
          <img class="card__image" src="./images/icon-${titleLowercase}.svg" alt="">
        </div>
        <div class="card__details">
          <div class="card__activity">
            <p class="card__title">${title}</p>
            <img class="card__dots"src="./images/icon-ellipsis.svg" alt="trhee">
          </div>
          <div class="card__time">
            <p class="card__hour">${element.current}hrs</p>
            <p class="card__previous">Previous - ${element.previous}</p>
          </div>
        </div>
      </div>
      `
    })

}