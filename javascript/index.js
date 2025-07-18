function updateTime(){
    let sydneyElement = document.querySelector("#sydney");
    if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyTime = moment().tz("Australia/Sydney");

    sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format("h:mm:ss [<small>]A[</small>]");
  }
   let londonElement = document.querySelector("#london");
    if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
    londonTimeElement.innerHTML = londonTime.format("h:mm:ss [<small>]A[</small>]");
  }
   let apiaElement = document.querySelector("#apia");
    if (apiaElement) {
    let apiaDateElement = apiaElement.querySelector(".date");
    let apiaTimeElement = apiaElement.querySelector(".time");
    let apiaTime = moment().tz("Pacific/Apia");

    apiaDateElement.innerHTML = apiaTime.format("MMMM Do YYYY");
    apiaTimeElement.innerHTML = apiaTime.format("h:mm:ss [<small>]A[</small>]");
  }
}
   let selectedCityInterval = null;
function updateCity(event){
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current"){
        cityTimeZone = moment.tz.guess();
    }
    let citiesElement = document.querySelector("#cities");
    if (selectedCityInterval){
      clearInterval(selectedCityInterval);
    }
    function updateSelectedCityTime(){
      let cityName = cityTimeZone.replace("_" , " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
   
    citiesElement.innerHTML =  `
      <div class="city">
             <div>
             <h2>${cityName}</h2>
             <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
            </div>
            <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(" A ")}</small></div>
         </div>
         <a href="/">Reset cities</a>`;
    }
   updateSelectedCityTime()
   selectedCityInterval = setInterval(updateSelectedCityTime, 1000);
}
updateTime();
setInterval(updateTime,1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
