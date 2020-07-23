/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
var questionCount= 0;
var blueScore = 0;
var lavenderScore = 0;
var blackScore = 0;
var greenScore = 0;

var result = document.getElementById("result");
function updateResult(){
  
var q1a1= document.getElemetId("q1a1");
var q1a2= document.getElemetId("q1a2")
var q1a3= document.getElemetId("q1a3");
var q1a4= document.getElemetId("q1a4");

var q2a1= document.getElemetId("q2a1");
var q2a2= document.getElemetId("q2a2");
var q2a3= document.getElemetId("q2a3");
var q2a4= document.getElemetId("q2a4");

var q3a1= document.getElemetId("q3a1");
var q3a2= document.getElemetId("q3a2");
var q3a3= document.getElemetId("q3a3");
var q3a4= document.getElemetId("q3a4");

    q1a1.addEventListener("click", Blue);
    q1a2.addEventListener("click", Lavender);
    q1a3.addEventListener("click", Black);
    q1a4.addEventListener("click", Green);
    q2a1.addEventListener("click", Blue);
    q2a2.addEventListener("click", Lavender);
    q2a3.addEventListener("click", Black);
    q2a4.addEventListener("click", Green);
    q3a1.addEventListener("click", Blue);
    q3a2.addEventListener("click", Lavender);
    q3a3.addEventListener("click", Black);
    q3a4.addEventListener("click", Green);

function updateResult(){
function Blue(){   
  Blue+=1;
  questionCount+=1;
if (questionCount>=3) {
  updateResult();
}

function Lavender(){   
  Lavender+=1;
  questionCount+=1;
}
  
function Green(){   
  Green+=1;
  questionCount+=1;
}
function Black(){   
  Black+=1;
  questionCount+=1;
}

  
 if (Blue >= 2){

 }
 else if(Lavender >=2){

 }
 else if(Black >=2){

 }
 else if (Green >= 2){

 }
 else{

 }
}
  
function updateResult(){
 if (Blue >= 2){
         result.innerHTML = "Blue!";
 }
 else if(LavenderScore >=2){
        result.innerHTML = "Lavender!";
 }
 else if(BlackScore >=2){
    result.innerHTML = "Black!";
 }
 else if (GreenScore>= 2){
    result.innerHTML = "Green!";
 }
 else{
    result.innerHTML = "You love all colors!";
 }
}
