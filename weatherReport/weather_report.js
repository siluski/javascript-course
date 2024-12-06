document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);

function showweatherDetails(event){
    event.preventDefault();
    const city = document.getElementById('city').value;
    const lat = document.getElementById('latitude').value;
    const long = document.getElementById('longitude').value;
    const apiKey = 'bd72428ca5bf11cc37c9e0358bfad16a';
    let apiUrl;
    if(city !== ''){
        apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        getWeather(apiUrl);
    }else if(lat !== ''&&long != ''){
        console.log("getting weather via coordinate");
        apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
        getWeather(apiUrl);
    } 


    
}

function getWeather(apiUrl){
    fetch(apiUrl).then(response => response.json()).then(data =>{
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp} &#8451;</p>
        <p>Weather: ${data.weather[0].description}</p>`;
    })
}
