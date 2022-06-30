//PREVISÃO DO TEMPO tutorial:CodingNepal
const divClima = document.querySelector(".clima__forecast"),
inputPart = document.querySelector(".input-part"),
infoTxt = inputPart.querySelector(".info-txt"),
inputButton = inputPart.querySelector("input"),
weatherPart = divClima.querySelector(".weather-part"),
wIcon = weatherPart.querySelector("img"),
arrowBack = divClima.querySelector("header i");

let api;

inputButton.addEventListener("click", e =>{
        requestApi('bom retiro, santa catarina');
});

function requestApi(city){
    api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=8cbc712e9e90da10fdb24d46e149f80e&lang=pt_br`;
    fetchData();
}

function fetchData(){
    infoTxt.innerText = "Procurando detalhes do clima...";
    infoTxt.classList.add("pending");
    // getting api response and returning it with parsing into js obj and in another 
    // then function calling weatherDetails function with passing api result as an argument
    fetch(api).then(res => res.json()).then(result => weatherDetails(result)).catch(() =>{
        infoTxt.innerText = "Algo deu errado";
        infoTxt.classList.replace("pending", "error");
    });
}

function weatherDetails(info){
        //getting required properties value from the whole weather information
        const city = info.name;
        const country = info.sys.country;
        const {description, id} = info.weather[0];
        const {temp, feels_like, humidity} = info.main;

        // using custom weather icon according to the id which api gives to us
        if(id == 800){
            wIcon.src = "./assets/images/icons/clear.svg";
        }else if(id >= 200 && id <= 232){
            wIcon.src = "./assets/images/icons/storm.svg";  
        }else if(id >= 600 && id <= 622){
            wIcon.src = "./assets/images/icons/snow.svg";
        }else if(id >= 701 && id <= 781){
            wIcon.src = "./assets/images/icons/haze.svg";
        }else if(id >= 801 && id <= 804){
            wIcon.src = "./assets/images/icons/cloud.svg";
        }else if((id >= 500 && id <= 531) || (id >= 300 && id <= 321)){
            wIcon.src = "./assets/images/icons/rain.svg";
        }
        
        //passing a particular weather info to a particular element
        weatherPart.querySelector(".temp .numb").innerText = Math.floor(temp);
        weatherPart.querySelector(".weather").innerText = description;
        weatherPart.querySelector(".location span").innerText = `${city}, ${country}`;
        weatherPart.querySelector(".temp .numb-2").innerText = Math.floor(feels_like);
        weatherPart.querySelector(".humidity span").innerText = `${humidity}%`;
        infoTxt.classList.remove("pending", "error");
        infoTxt.innerText = "";
        inputButton.value = "";
        divClima.classList.add("active");
}

arrowBack.addEventListener("click", ()=>{
    divClima.classList.remove("active");
    inputButton.value="Verificar previsão";
});