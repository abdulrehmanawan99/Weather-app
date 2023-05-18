// Next Page JS
var area = JSON.parse(localStorage.getItem("area"));
var latlong;
var flag;
var productsLoader  = document.querySelector(".products-Loader"); 

 
fetch("https://restcountries.com/v3.1/all")
  .then((response) => {
    console.log(response.status);
    console.log(response.ok);
    return response.json(); // This function uses for convert this format to json.
  })
  .then((data) => {
    data.forEach((country) => {
      if (area === country.area) {
        latlong = country.latlng;
        flag = country.flags.png;
        var lat = latlong[0];
        var long = latlong[1];

        var country = document.querySelector(".country");
        var weather = document.querySelector(".weather");
        var icon = document.querySelector(".icon");
        var temp = document.querySelector(".temp");
        var temp_min = document.querySelector(".temp_min");
        var temp_max = document.querySelector(".temp_max");
        var pressure = document.querySelector(".pressure");
        var sea_level = document.querySelector(".sea_level");
        var grnd_level = document.querySelector(".grnd_level");
        var humidity = document.querySelector(".humidity");


        productsLoader.classList.remove("d-none");
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=17bb745c3cffb6fda826ae70fdcea098`
        )
          .then((response) => {
            console.log(response.status);
            console.log(response.ok);
            return response.json(); // This function uses for convert this format to json.
          })
          .then((data) => {
            console.log(data);
            country.innerText = data.name;
            weather.innerText = data.weather[0].description;
            icon.innerHTML = `<img src="${flag}">`;
            temp.innerText = (data.main.temp - 32) * 5/9 + '\xB0C';
            temp_min.innerText = (data.main.temp_min - 32) * 5/9 + '\xB0C';
            temp_max.innerText = (data.main.temp_max - 32) * 5/9 + '\xB0C';
            pressure.innerText = data.main.pressure;
            sea_level.innerText = data.main.sea_level;
            grnd_level.innerText = data.main.grnd_level;
            humidity.innerText = data.main.humidity;
          });
          productsLoader.classList.add("d-none");
      }
    });
  })
  .catch((error) => {
    console.log(error);
  });
  








  

// newArray = latlong.split(",");
// console.log(newArray);
// var lat = newArray[0];
// var long = newArray[1];
// console.log(lat);
// console.log(long);

// var country = document.querySelector('.country');
// var weather = document.querySelector('.weather');
// var icon = document.querySelector('.icon');
// var temp = document.querySelector('.temp');
// var temp_min = document.querySelector('.temp_min');
// var temp_max = document.querySelector('.temp_max');
// var pressure = document.querySelector('.pressure');
// var sea_level = document.querySelector('.sea_level');
// var grnd_level = document.querySelector('.grnd_level');
// var humidity = document.querySelector('.humidity');

// fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=17bb745c3cffb6fda826ae70fdcea098`)
// .then((response)=>{
//     console.log(response.status)
//     console.log(response.ok)
//     return response.json() // This function uses for convert this format to json.
// }).then((data)=>{
//    console.log(data);
//    country.innerText = data.name;
//    weather.innerText = data.weather[0].description;
//    const {icon} = data.weather[0];
//    icon.innerText = `<img src="icons/${icon}.png">`;
//    temp.innerText = data.main.temp;
//    temp_min.innerText = data.main.temp_min;
//    temp_max.innerText = data.main.temp_max;
//    pressure.innerText = data.main.pressure;
//    sea_level.innerText = data.main.sea_level;
//    grnd_level.innerText = data.main.grnd_level;
//    humidity.innerText = data.main.humidity;
// })
