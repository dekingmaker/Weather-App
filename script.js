const apiKey= '96a79f2ab85e72641d54cc618df3e586';
const geoApiUrl= `http://api.openweathermap.org/geo/1.0/direct?`;
const ApiUrl=`https://api.openweathermap.org/data/2.5/weather?`;
 function getValue(){
    var city =  document.getElementById("inputField").value;

    checkWeather(city);
 }

async function checkWeather(city){
    const response= await fetch(geoApiUrl + `q=${city}&limit=5&appid=${apiKey}`);
    let data = await response.json();

    document.querySelector(".city").innerHTML=data[0].name;
   

    const{lat,lon}=data[0];
    console.log(lat);
    console.log(lon);
   await getWeather(lat,lon);
}


async function getWeather(lati, longi){

const response = await fetch(ApiUrl + `lat=${lati}&lon=${longi}&appid=${apiKey}&units=metric`);
var weatherData = await response.json();
console.log(weatherData);
document.querySelector(".temp").innerHTML=weatherData.main.temp+"°C";
document.querySelector(".humidity").innerHTML=weatherData.main.humidity+"%";
document.querySelector(".windspeed").innerHTML=weatherData.wind.speed+"km/h";
const weatherIcon = document.querySelector('.weather-icon');
console.log(weatherData.weather[0].main);
if(weatherData.weather[0].main=="Clouds"){
    weatherIcon.src="images/clouds.png";
}
if(weatherData.weather[0].main=="Clear"){
    weatherIcon.src="images/clear.png";
}
if(weatherData.weather[0].main=="Rain"){
    weatherIcon.src="images/rain.png";
}
if(weatherData.weather[0].main=="Drizzle"){
    weatherIcon.src="images/drizzle.png";
}
if(weatherData.weather[0].main=="Mist"){
    weatherIcon.src="images/mist.png";
}

console.log(weatherData);
}

