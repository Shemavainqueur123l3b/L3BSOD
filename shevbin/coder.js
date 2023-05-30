
var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");
function register(){
  x.style.left = "-400px"; 
  y.style.left = "50px";
  z.style.left = "110px";
  
 }
 function login(){
   x.style.left = "50px"; 
   y.style.left = "450px";
   z.style.left = "0";
   
 }
 function abc(){
   alert("Thanks for booking your wash");
 }
 function right(){
   var paragraph = document.getElementById("para");
   var changeText = paragraph.innerHTML = "So Fresh So Clean";
 }
 function left(){
   var para = document.getElementById("para");
   var changeText = para.innerHTML = "A Car Wash. Delivered To Your Door";
 }
