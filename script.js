

var city =  "colorado";

$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=1a70ad7842bc94ac36c7c185861a0571", function(data)
{
console.log(data);
var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
console.log(icon);
var cityname = data.name;
var temp = data.main.temp;
var weather= data.weather[0].main;
 



$(".icon").attr("src", icon);
$(".weather").append(weather)
$(".temp").append(temp);
$(".cityname").append(cityname)
});