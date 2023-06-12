let valid_date = document.getElementById("date");
let time = document.getElementById("time");
let timer = document.getElementById("timer");
let id_date = document.getElementById("id_date");
let date = new Date();
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
let today_day = date.getDate() -1;
let today_month = months[date.getMonth()];
let today_year =  date.getFullYear();
// console.log(today_day + today_month + today_year);
let newDate = new Date();
let t;
// console.log(date);
let gethours = newDate.getHours();
let getminutes = newDate.getMinutes();
  if(gethours < 10 & getminutes >= 10){
     t = "0"+ gethours + ":" + getminutes;
} else if(getminutes < 10 & gethours >= 10){
    t = gethours + ":" + "0"+ getminutes;
} else if (getminutes<10 & gethours<10){
    t = "0"+gethours + ":" + "0"+ getminutes;
}else{
    t = gethours + ":" + getminutes;
}
valid_date.innerHTML = today_day + " " + today_month + " " + today_year;
time.innerHTML = t; 
next_week = newDate.setDate(newDate.getDate() + 6);
// console.log(next_week);
var countDownDate = new Date(next_week).getTime();
const id_year = date.getFullYear() * 1e4; // 1e4 gives us the the other digits to be filled later, so 20210000.
const id_month = (date.getMonth() + 1) * 100; // months are numbered 0-11 in JavaScript, * 100 to move two digits to the left. 20210011 => 20211100
const id_day = date.getDate()-1; // 20211100 => 20211124
const result = id_year + id_month + id_day + '' // `+ ''` to convert to string from number, 20211124 => "20211124"
id_date.innerHTML = result;

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);


    
  // Output the result in an element with id="demo"
  if(days>0){
       timer.innerHTML = days + "d :  " + hours + "h : "
  + minutes + "m : " + seconds + "s "; 
  } else{
    timer.innerHTML = hours + "h : "
    + minutes + "m : " + seconds + "s "; 
  }

    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    // document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);