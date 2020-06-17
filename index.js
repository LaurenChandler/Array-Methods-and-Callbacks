import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces 
of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

//(a)
let name = fifaData.filter(function(item, year){
    let year = 2014;
    return item["Home Team Name"];
});
console.log(name, 2014);

//(b)
let name = fifaData.filter(function(item, year){
    let year = 2014;
    return item["Away Team Name"];
});
console.log(name, 2014);

//(c)
let goals = fifaData.filter(function(item, year){
    let year = 2014;
    return item["Home Team Goals"];
});
console.log(goals, 2014);

//(d)
let goals = fifaData.filter(function(item, year){
    let year = 2014;
    return item["Away Team Goals"];
});
console.log(goals, 2014);

//(e)
function getWinners(getFinals) {
    let winners = getFinals(fifaData).map(function(item){
        if item[`Home Team Goals`] > item [`Away Team Goals`]) {
            return item[`Home Team Name`];
        }else if item [`Home Team Goals`] < item [`Away Team Goals`]) {
            return item[`Away Team Name`];
        }
    });
    return winners;
}
console.log(getWinners(getFinals));

/*fifaData.forEach(function(callback, year){ 
    let year = 2014;
  });
  console.log(fifaData(callback, 2014);*/

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array 
of objects with only finals data */

function getFinals(data) {
    return data;
};
console.log(getFinals(data));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback) {
    callback(fifaData);
    const fifaData = finals.map(function(item){
       return item.year();
   });
}
console.log(getYears);

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function 
`getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all 
winning countries in an array called `winners` */ 

function getWinnersByYear(func1, func2){
    let result = [];
    let winners = func1;
    let years = func2;
    for (let i = 0; i<years.length; i++) {
        result.push(`In ${years[i]}, ${winners[i]} won the world cup!`);
    }
    return result;
 }

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following 
parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(country, year, data) {
    const country = getWinners(getFinals, data);
    const year = getYears(getFinals, data);
    const allWinners = [];
    getFinals(data).forEach((item, i) =>{
        allWinners.push(`In ${year[i]}, ${country[i]} won the world cup!`)
    });
    return allWinners;
};
console.log(getWinnersByYear(getWinners, getYears, fifaData))

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter 
`data` and returns the the average number of home team goals and away team goals scored per match 
(Hint: use .reduce and do this in 2 steps) */

function getAverageGoals() {
    const homeG = (allHtG.reduce(function(acc, val) { return acc + val; }, 0))/allHtG.length
    const awayG = (allAtG.reduce(function(acc, val) { return acc + val; }, 0))/allAtG.length
    return `home :${homeG} and away: ${awayG}`
};
console.log(getAverageGoals(data));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
