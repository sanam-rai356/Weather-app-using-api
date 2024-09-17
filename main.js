
let MainButton = document.querySelector('.search button');
let temp = document.querySelector('.temp');
let city = document.querySelector('.city');
let humidity = document.querySelector('.humidity');
let wind = document.querySelector('.wind');
let colImg = document.querySelector('.col img');




MainButton.addEventListener('click',async()=>{
    let input= document.querySelector('.search input').value;
    if(input===""){
        alert('Please write city name')
    }else{
        let inputLowercase = input.toLowerCase();
        const BASEURL = `https://api.weatherapi.com/v1/current.json?key=e97ec64760924dbc9e5161357243008&q=${inputLowercase}`;
        let response = await fetch(BASEURL);
        let data = await response.json();
        let CityName=data.location.name;
        let CityTemp=data.current.temp_c;
        let CityTempFloor = Math.floor(CityTemp);
        let CityWind=data.current.wind_kph;
        let CityWindFloor = Math.floor(CityWind)
        let CityHumidity=data.current.humidity;
    
        city.innerHTML=CityName;
        temp.innerHTML=`${CityTempFloor}°c`;
        humidity.innerHTML=`${CityHumidity}%`;
        wind.innerHTML=`${CityWindFloor}km/hr`;
    }




})



// less than 15 is cold(snow)