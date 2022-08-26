const input = document.querySelector(".Cityname");
const ShowBtn = document.querySelector(".submit");
const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const status = document.querySelector(".status");
const deg = document.querySelector(".Degreg");
const humidity = document.querySelector(".Humidity");
const WindSpeed = document.querySelector(".WindSpeed");
const variable = document.querySelector(".var");


const APIkey = "f123c758b483a32efc7183059acb012c";


ShowBtn.addEventListener("click",HandeledShowCity);

function HandeledShowCity(e){
    console.log(input.value)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${APIkey}&units=metric`;

        fetch(url)
            .then(Response => Response.json())
            .then(data =>{
                try{
                    console.log(data)
                    const {main,name,weather,wind,sys} = data
                    console.log(sys);
                    city.innerHTML = name + `<sup class='country' >${sys.country}</sup>`;
                    city.style.display = "block";
                    temp.innerHTML=Math.round(+main.temp)+`C <sup style="color: #fff">o</sup>`;
                    temp.style.display = "block";
                    status.innerText = weather[0].main;
                    status.style.display = "block";
        
                    deg.innerHTML = Math.round(main.feels_like)+`C <sup style="color: #000">o</sup>`;
                    humidity.innerText = main.humidity;
                    WindSpeed.innerHTML = Math.round(+wind.speed)+` Km/h`;
        
                    variable.style.display = "block";
                }catch (err){
                    temp.innerHTML = "";
                    status.innerText = ""
                    variable.style.display = 'none';
                    city.innerText = 'city not found';
                }
            })        
}
