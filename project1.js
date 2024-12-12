const apikey="43fe49025ebfaf098f77499b324e35ef"
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchbox = document.querySelector(".search input")
const searchbtn = document.querySelector(".search button")
const weathericon=document.querySelector(".weather-icon")

async function checkweather(city){
    const response=await fetch(apiurl + city + `&appid=${apikey}`);
    var data= await response.json();

    console.log(data);
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none"
        document.querySelector(".details").style.display="none"
    }
    else{
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+ "°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed +" Km/h";
   
        if(data.weather[0].main=="Clouds"){
            weathericon.src="clo1.png";

        }
        else if(data.weather[0].main=="Clear"){
            weathericon.src="sun1.png";
        }
        else if(data.weather[0].main=="Rain"){
            weathericon.src="rain31.png";
        }
        else if(data.weather[0].main=="Drizzle"){
            weathericon.src="rai1.png";
        }
        else if(data.weather[0].main=="Mist"){
            weathericon.src="mis1.png";
        }
        document.querySelector(".weather").style.display="block"
        document.querySelector(".details").style.display="flex"
        document.querySelector(".error").style.display="none";
    }
    
}

searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
})
document.body.addEventListener("keydown",(e)=>{
    if((e.key)=="Enter"){
        checkweather(searchbox.value);
    }
    
    
})


