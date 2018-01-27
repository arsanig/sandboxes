var date = new Date();
var day = date.getDay();
var hour = date.getHours();
if (hour > 12){
  hour -= 12;
}
var minute = date.getMinutes();
if (minute < 10){
  minute = "0" + minute;
}
var second = date.getSeconds();
if (second < 10){
  second = "0" + second;
}
var dayString = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var postfix = (hour >= 12) ? " PM" : " AM";
console.log("Today is : "+dayString[day]+".\nCurrent time is : "+hour+postfix+" : "+minute+" : "+second);
