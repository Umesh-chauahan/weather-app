let apikey ="ccd061d2c3b306fe59a536a6a310e09e" 
let data = document.querySelector(".data");
let city = document.querySelector("#city");
let form = document.querySelector(".input")
let img = document.querySelector(".img");
let temp  = document.querySelector(".temp");
let info = document.querySelector(".info");

form.addEventListener("submit" ,(e)=>{
    e.preventDefault();
    const cityname = city.value;
    getweather(cityname)
}
)

async function getweather(cityname){
    
   const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}&units=metric`)

   const data = await response.json()
   
   temp.innerHTML=Math.floor(data.main.temp)+"°C";

   info.innerHTML=data.weather[0].description;

   let icoln=data.weather[0].icon;

   img.innerHTML=`<img src="https://openweathermap.org/img/wn/${icoln}.png" alt="">`

   const detail=[
    `feelslike : ${Math.floor(data.main.feels_like)}°C`,
    `humidity : ${data.main.humidity}%`,
    `windspeed : ${data.wind.speed}m/s`
   ]

   document.querySelector(".foot").innerHTML=detail.map((details)=>{
    return `<div>${details}</div>`;
   }).join("")

}