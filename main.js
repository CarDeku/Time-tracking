import data from './data.json' assert {type: 'json'};

let dailyArray = data.map(item => item.timeframes.daily);
let weeklyArray = data.map(item => item.timeframes.weekly);
let monthlyArray = data.map(item => item.timeframes.monthly);


let dailyBtn = document.querySelector('#daily');
let weeklyBtn = document.querySelector('#weekly');
let monthlyBtn = document.querySelector('#monthly');

let secondSection = document.querySelector('.second-section');

let bgColors = [
    'hsl(15, 100%, 70%)',
    'hsl(195, 74%, 62%)',
    'hsl(348, 100%, 68%)',
    'hsl(145, 58%, 55%)',
    'hsl(264, 64%, 52%)',
    'hsl(43, 84%, 65%)'
]

drawElement(weeklyArray, 'Week');

dailyBtn.addEventListener('click', (element) => {
    drawElement(dailyArray, 'Day');
});
weeklyBtn.addEventListener('click', (element) => {
    drawElement(weeklyArray, 'Week');
});
monthlyBtn.addEventListener('click', (element) => {
    drawElement(monthlyArray, 'Month');
});


function drawElement(array, prev){
    secondSection.innerHTML = "";
    array.forEach((element, index) => {

        let title = data[index].title;
        let titleLowerCase = title.toLocaleLowerCase();

        if(titleLowerCase == 'self care'){
            titleLowerCase = 'self-care';
        }

        secondSection.innerHTML += `<div class="card">
        <div class="card__background" style="background-color: ${bgColors[index]}">
          <img class="card__image" src="./images/icon-${titleLowerCase}.svg" alt="Work" />
        </div>

        <div class="card__details">
          <div class="card__activity">
            <p class="card__title">${title}</p>
            <img class="card__ellipsis" src="./images/icon-ellipsis.svg" alt="" />
          </div>

          <div class="card__hours">
            <p class="card__hour">${element.current}hrs</p>
            <p class="card__previous">Last ${prev}-${element.previous}hrs</p>
          </div>
        </div>
      </div>`

    });
}