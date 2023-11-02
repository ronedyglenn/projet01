import './style.css'

/**
 * My api key :5298ef0a916800e13ce0b9eaee1f0ec1
 * url: https://api.openweathermap.org/data/2.5/weather?q=${pays}&appid=${key}&units=metric&lang=fr
 */


let key= "34a9f5a20cca31d1d91ea6c2c7638970";
let pays = document.querySelector("input");
let boutton = document.querySelector("button");
let span = document.querySelector('span')
let degree = document.querySelector('.temperature')
let gabon = document.querySelector('.country')
let km = document.querySelector('#vitesse')
let img = document.querySelector('image')
let hum = document.querySelector('.humidité')

boutton.addEventListener("click", (e)=>{
  e.preventDefault();
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${pays.value}&appid=${key}&units=metric&lang=fr`)
  .then(reponse => reponse.json()).then(data => {
    console.log(data);
    let humidity = data.main.humidity
    let speed = data.wind.speed
    let temperature = data.main.temp;
    let country = data.name
    let icon = data.weather[0].icon
    console.log(humidity)
    console.log(speed)
    console.log(temperature)
    console.log(country);
    console.log(icon);

    span.innerHTML = humidity
    degree.innerHTML = temperature + ' °C ';
    gabon.innerHTML = country
    km.innerHTML = speed + 'km/h';
   


  });

})




