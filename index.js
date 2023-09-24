import axios from "axios";
function formatDate(timeStamp) {
    
}
function displayTemperature(response){
    console.log(response.data.main.temp);
    let temperatureElement =document.querySelector("#temperature");
    temperatureElement.innerHTML=Math.round(response.data.main.temp);
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML=response.data.name;
    let descriptionElement = document.querySelector("#description");
descriptionElement.innerHTML=respons.data.weather[0].description;

}