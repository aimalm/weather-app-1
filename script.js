
    const api = {

        // Weatherbit.io api
    
        key: "34c33b6048084591b3ee34570df09b7e",
        base: "https://api.weatherbit.io/v2.0/forecast/daily"
    }

    
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

    
    const searchBox = document.querySelector('.searchBox');

    let city = document.querySelector('.location');
    let day01 = document.querySelector('.realtime01');
    let day02 = document.querySelector('.realtime02');
    let day03 = document.querySelector('.realtime03');
    let day04 = document.querySelector('.realtime04');
    let day05 = document.querySelector('.realtime05');
    let day06 = document.querySelector('.realtime06');
    let day07 = document.querySelector('.realtime07');

    let date01 = document.querySelector('.date01');
    let date02 = document.querySelector('.date02');
    let date03 = document.querySelector('.date03');
    let date04 = document.querySelector('.date04');
    let date05 = document.querySelector('.date05');
    let date06 = document.querySelector('.date06');
    let date07 = document.querySelector('.date07');

    let temp01 = document.querySelector('.temp01');
    let temp02 = document.querySelector('.temp02');
    let temp03 = document.querySelector('.temp03');
    let temp04 = document.querySelector('.temp04');
    let temp05 = document.querySelector('.temp05');
    let temp06 = document.querySelector('.temp06');
    let temp07 = document.querySelector('.temp07');

    let status01 = document.querySelector('.status01');
    let status02 = document.querySelector('.status02');
    let status03 = document.querySelector('.status03');
    let status04 = document.querySelector('.status04');
    let status05 = document.querySelector('.status05');
    let status06 = document.querySelector('.status06');
    let status07 = document.querySelector('.status07');
        

        day01.innerText = week[numOfDay++ % 7];
        day02.innerText = week[numOfDay++ % 7];
        day03.innerText = week[numOfDay++ % 7];
        day04.innerText = week[numOfDay++ % 7];
        day05.innerText = week[numOfDay++ % 7];
        day06.innerText = week[numOfDay++ % 7];
        day07.innerText = week[numOfDay++ % 7];

        
        // TODO:    Need to make a functions to separate the even months and uneven months + Feb
        //          after making those into variables, make the 'day' var depending on % (typeOfMonth) operator
        date01.innerText = day++ + " " + the12 + " " + year;
        date02.innerText = day++ + " " + the12 + " " + year;
        date03.innerText = day++ + " " + the12 + " " + year;
        date04.innerText = day++ + " " + the12 + " " + year;
        date05.innerText = day++ + " " + the12 + " " + year;
        date06.innerText = day++ + " " + the12 + " " + year;
        date07.innerText = day++ + " " + the12 + " " + year;
    

    searchBox.addEventListener('keypress', setQuery);
    
    function setQuery(event) {
        
        if (event.keyCode == 13) {
            event.preventDefault();
            getResults(searchBox.value);
            console.log(searchBox.value);
        }
    }
    
    function getResults (query) {

        fetch(api.base + '?city=' + query + '&key=' + api.key)
            .then(weather => {
                return weather.json();
            })
            .then(displayResults);
    }
    
    function displayResults (weather) {

        console.log(weather);
        city.innerText = weather.city_name + ', ' + weather.country_code;

        temp01.innerHTML = weather.data[0].temp + '<span>°c</span>';
        temp02.innerHTML = weather.data[1].temp + '<span>°c</span>';
        temp03.innerHTML = weather.data[2].temp + '<span>°c</span>';
        temp04.innerHTML = weather.data[3].temp + '<span>°c</span>';
        temp05.innerHTML = weather.data[4].temp + '<span>°c</span>';
        temp06.innerHTML = weather.data[5].temp + '<span>°c</span>';
        temp07.innerHTML = weather.data[6].temp + '<span>°c</span>';

        status01.innerHTML = weather.data[0].weather.description;
        status02.innerHTML = weather.data[1].weather.description;
        status03.innerHTML = weather.data[2].weather.description;
        status04.innerHTML = weather.data[3].weather.description;
        status05.innerHTML = weather.data[4].weather.description;
        status06.innerHTML = weather.data[5].weather.description;
        status07.innerHTML = weather.data[6].weather.description;

    };
    
