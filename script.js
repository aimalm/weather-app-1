
const api = {
    // Weatherbit.io api
    key: "34c33b6048084591b3ee34570df09b7e",
    base: "https://api.weatherbit.io/v2.0/forecast/daily"
}

// Nessessairy information on days, weekdays, months, year
let today = new Date();
let numOfDay = today.getDay();
let day = today.getDay();
let month = today.getMonth();
let year = today.getFullYear();

let week = new Array(7);
week[0] = "Sun";
week[1] = "Mon";
week[2] = "Tue";
week[3] = "Wed";
week[4] = "Thu";
week[5] = "Fri";
week[6] = "Sat";

let weekday = week[numOfDay];

let oneOf12 = new Array(12);
oneOf12[0] = "Jan";
oneOf12[1] = "Feb";
oneOf12[2] = "Mar";
oneOf12[3] = "Apr";
oneOf12[4] = "May";
oneOf12[5] = "Jun";
oneOf12[6] = "Jul";
oneOf12[7] = "Aug";
oneOf12[8] = "Sep";
oneOf12[9] = "Oct";
oneOf12[10] = "Nov";
oneOf12[11] = "Dec";

let the12 = oneOf12[month];

// Variables for location/searchbox
const searchBox = document.querySelector('.searchBox');
let city = document.querySelector('.location');

// Variables for all the times, dates, weatherstatusses of each day
let day01 = document.querySelector('.realtime01');
let day02 = document.querySelector('.realtime02');
let day03 = document.querySelector('.realtime03');
let day04 = document.querySelector('.realtime04');
let day05 = document.querySelector('.realtime05');
let day06 = document.querySelector('.realtime06');
let day07 = document.querySelector('.realtime07');

let days = [
    day01,
    day02,
    day03,
    day04,
    day05,
    day06,
    day07
];

let date01 = document.querySelector('.date01');
let date02 = document.querySelector('.date02');
let date03 = document.querySelector('.date03');
let date04 = document.querySelector('.date04');
let date05 = document.querySelector('.date05');
let date06 = document.querySelector('.date06');
let date07 = document.querySelector('.date07');

let dates = [
    date01,
    date02,
    date03,
    date04,
    date05,
    date06,
    date07
];

let temp01 = document.querySelector('.temp01');
let temp02 = document.querySelector('.temp02');
let temp03 = document.querySelector('.temp03');
let temp04 = document.querySelector('.temp04');
let temp05 = document.querySelector('.temp05');
let temp06 = document.querySelector('.temp06');
let temp07 = document.querySelector('.temp07');

let temperatures = [
    temp01,
    temp02,
    temp03,
    temp04,
    temp05,
    temp06,
    temp07
];

let status01 = document.querySelector('.status01');
let status02 = document.querySelector('.status02');
let status03 = document.querySelector('.status03');
let status04 = document.querySelector('.status04');
let status05 = document.querySelector('.status05');
let status06 = document.querySelector('.status06');
let status07 = document.querySelector('.status07');

let statusses = [
    status01,
    status02,
    status03,
    status04,
    status05,
    status06,
    status07
];
    
// Changing innerText weekdays/day
// Everytime the numOfDay ads upp +1 on previous day. the % 7 will devide the number once it's over a value of 7 
// The difference becomes the new value 
setup = () => {

    days.forEach((day) => {
        day.innerText = week[numOfDay++ % 7];
    });

    dates.forEach((date) => {
        date.innerText = day++ + " " + the12 + " " + year;
    });

};
setup();

// Defining the setQuery callback
setQuery = (event) => {
    
    // KeyCode == 13 is the value of the "enter"-key on the keyboard
    if (event.keyCode == 13) {
        event.preventDefault();

        // getResult will be the container to the recieved value from the searchBar
        getResults(searchBox.value);
        console.log(searchBox.value);
    };
}

// Creating a callback on Keypress
searchBox.addEventListener('keypress', setQuery);


// Placing the value from getResult in a local variable called "query"
getResults = (query) => {

    // Getting the API url with the new data implemented
    fetch(api.base + '?city=' + query + '&key=' + api.key)
        .then(weather => {

            // Changing the value into a json format
            return weather.json();
        })
        .then(displayResults); 
}


setDayTemperature = (temperatureElement, statusElement, temperature, weather) => {
    temperatureElement.innerHTML = temperature + '<span>°c</span>';
    statusElement.innerHTML = weather;
}


displayResults = (weather) => {

    console.log(weather);
    city.innerText = weather.city_name + ', ' + weather.country_code;

    for (let i = 0; i< temperatures.length; i++) {
        const temperature = temperatures[i];
        const status = statusses[i];
    
        setDayTemperature(temperature, status, weather.data[i].temp, weather.data[i].weather.description);
    }

};