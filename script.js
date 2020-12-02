
    const api = {

        // Weatherbit.io api
    
        key: "34c33b6048084591b3ee34570df09b7e",
        base: "https://api.weatherbit.io/v2.0/forecast/daily"
    }

    let i = 0;
    let today = new Date();
    let day = today.getDay();

    let week = new Array(7);
	week[0] = "Sun";
	week[1] = "Mon";
	week[2] = "Tues";
	week[3] = "Wed";
	week[4] = "Thu";
	week[5] = "Fri";
	week[6] = "Sat";

    let weekday = week[day];

    
    const searchBox = document.querySelector('.searchBox');

    let city = document.querySelector('.location');
    let day01 = document.querySelector('.realtime01');
    let day02 = document.querySelector('.realtime02');
    let day03 = document.querySelector('.realtime03');
    let day04 = document.querySelector('.realtime04');
    let day05 = document.querySelector('.realtime05');
    let day06 = document.querySelector('.realtime06');
    let day07 = document.querySelector('.realtime07');

    //TODO: fixing the day display
    // if (day > 6, day = 0);

    //     day01.innerText = week[day];
    //     day02.innerText = week[day++];
    //     day03.innerText = week[day++];
    //     day04.innerText = week[day++];
    //     day05.innerText = week[day++];
    //     day06.innerText = week[day++];
    //     day07.innerText = week[day++];
    

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

        day01.innerText = week[day];
    };
    
